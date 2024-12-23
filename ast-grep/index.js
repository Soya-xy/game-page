import { Buffer } from 'node:buffer'
import fs from 'node:fs'
import path from 'node:path'

import { fileURLToPath } from 'node:url'
import { Lang, parse } from '@ast-grep/napi'
import fg from 'fast-glob'
import puppeteer from 'puppeteer'

const __dirname = path.dirname(fileURLToPath(import.meta.url))


async function downloadFile(urls) {
  // 启动浏览器，只打开一个窗口
  const browser = await puppeteer.launch({
    headless: false
  })

  const page = await browser.newPage()

  try {
    // 设置更长的超时时间
    // 依次下载每张图片

    for (const [index, { url, fileName, dirPath }] of urls.entries()) {
      try {
        console.log(`正在下载第 ${index + 1} 张图片: ${url} - ${fileName}`)

        // 导航到图片
        const response = await page.goto(url, {
          timeout: 60000
        })
        console.log(response)

        // 检查响应状态
        if (response && response.status() === 200) {
          // 生成输出路径
          const outputPath = path.join(dirPath, fileName)

          const img = await page.select('img')
          // 截图保存
          await page.screenshot({
            path: outputPath,
            fullPage: false,
            type: 'png',
            clip:{
              width:img.width(),
              height: img.height(),
            },
            captureBeyondViewport: false
          })

          console.log(`图片 ${index + 1} 已保存到: ${outputPath}`)
        } else {
          console.warn(`第 ${index + 1} 张图片下载失败，状态码: ${response ? response.status() : '未知'}`)
        }
      } catch (imageError) {
        console.error(`下载第 ${index + 1} 张图片时出错:`, imageError)
      }
    }

  } catch (error) {
    console.error('下载图片过程中发生错误:', error)
  } finally {
    // await browser.close()
  }
}

const IMG_URL = 'https://web-res-ccc.afunimg8.com/cdn-cgi/image/format=auto/C02'
const STYLE_URL = 'background-image: url\((.*)\)'
const MATCH = {
  imgSrc: {
    rule: {
      kind: 'attribute',
      regex: 'src',
      has: {
        kind: 'attribute_value',
        regex: IMG_URL,
        pattern: '$URL',
        stopBy: 'end',
      },
    },
  },
  styleSrc: {
    rule: {
      kind: 'attribute_value',
      regex: STYLE_URL,
      pattern: '$URL',
    },
  }
}

async function main(type) {
  const files = await fg.glob([
    'pages/**/*.vue',
    'components/**/*.vue',
  ])
  // 读取文件
  console.clear()

  if (files.length > 0) {
    const urls = []
    files.forEach((file) => {
      const content = fs.readFileSync(file, 'utf-8')
      const sgNode = parse(Lang.Html, content).root()
      const node = sgNode.findAll(MATCH[type])
      if (node.length > 0) {
        node.forEach(async (item) => {
          const url = item.getMatch('URL').text()          
          if (url.includes('$')) {
            return
          }
          let u = url
          if (type === 'styleSrc') {
            u = url.split('url(')[1].split(')')[0]
          }

          // 去掉最后的?
          let newUrl = u.replace(IMG_URL, '/images')
          newUrl = newUrl.split('?')[0]
          const dirName = newUrl.split('/').slice(0, -1).join('/')
          const fileName = u.split('/').pop().split('?')[0]
          // 如果文件夹不存在，则创建文件夹
          const dirPath = path.join(__dirname, '../public', dirName)
          if (!fs.existsSync(dirPath)) {
            fs.mkdirSync(dirPath, {
              recursive: true,
            })
          }

          console.log(fileName)
          const newContent = content.replaceAll(url, `background-image: url(${newUrl});`)
          // 写入文件
          fs.writeFileSync(file, newContent)

          urls.push({
            url: u,
            dirPath,
            fileName
          })
        })
      }
    })
    downloadFile(urls)
  }
}

main('styleSrc')
