import { isClient } from '@vueuse/core'
import { joinURL } from 'ufo'

// Scheme: https://tools.ietf.org/html/rfc3986#section-3.1
// Absolute URL: https://tools.ietf.org/html/rfc3986#section-4.3
const ABSOLUTE_URL_REGEX = /^[a-z][a-z\d+\-.]*:/i

// Windows paths like `c:\`
const WINDOWS_PATH_REGEX = /^[a-z]:\\/i

// https://github.com/sindresorhus/is-absolute-url/blob/main/index.js
export function isAbsoluteUrl(url: string) {
  if (typeof url !== 'string')
    throw new TypeError(`Expected a \`string\`, got \`${typeof url}\``)

  if (WINDOWS_PATH_REGEX.test(url))
    return false

  return ABSOLUTE_URL_REGEX.test(url)
}

export function fullPath(path: string) {
  if (!isClient)
    return

  // 绝对路径（带协议）
  if (isAbsoluteUrl(path))
    return path
  // 当前域名根路径
  if (path.startsWith('//'))
    return joinURL(window.location.origin, path.substring(1))
  // 默认相对路径
  if (path.startsWith('/'))
    return joinURL(import.meta.env.BASE_URL, path)
  // 当前相对路径
  return joinURL(window.location.href, path)
}

export function http2ws(url: string) {
  if (!url)
    return

  url = fullPath(url)!
  if (url.startsWith('http://'))
    url = url.replace('http://', 'ws://')
  if (url.startsWith('https://'))
    url = url.replace('https://', 'wss://')
  return url
}
