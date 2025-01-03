import type { RouteLocationAsRelativeI18n } from 'vue-router'
import type { RouteNamedMapI18n } from 'vue-router/auto-routes'
import { isClient } from '@vueuse/core'
import { joinURL } from 'ufo'
import { currencyMap } from '~/@types/constants'

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

// 根据i18n转换货币符号
export function toCurrency(value: number | string | undefined, color?: string) {
  if (!value) {
    value = 0
  }

  if (typeof value === 'string') {
    value = Number(value)
  }

  const { locale } = useI18n()

  const currency = currencyMap[locale.value]
  const formatter = new Intl.NumberFormat(locale.value, {
    style: 'currency',
    currency,
  })

  return formatter.formatToParts(Number(value || 0)).map((p) => {
    if (p.type === 'currency' && color)
      return `<span class="${color}">${p.value}</span>`
    return p.value
  }).join('')
}

export function routerPush(path: string) {
  navigateTo(useNuxtApp().$localeRoute((path as keyof RouteNamedMapI18n | (Omit<RouteLocationAsRelativeI18n, 'path'>)))?.fullPath)
}

export function routerReplace(path: string) {
  navigateTo(useNuxtApp().$localeRoute((path as keyof RouteNamedMapI18n | (Omit<RouteLocationAsRelativeI18n, 'path'>)))?.fullPath, { replace: true })
}

export function isEmail(email: string) {
  return /^[\w-]+@[\w-]+(?:\.[\w-]+)+$/.test(email)
}
