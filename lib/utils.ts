import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

enum RouterHash {
  Tag = 'gametag',
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function replaceMiddle(str: string) {
  if (!str)
    return ''
  return `${str.slice(0, 2)}****${str.slice(-1)}`
}

// 获取router的hash
export function getRouterHash(hash: string) {
  const routerHash = hash.replace('#', '')
  if (routerHash.includes(RouterHash.Tag))
    return routerHash.split(`${RouterHash.Tag}/`)[1]
  return ''
}

// 首字母大写
export function capitalizeFirstLetter(str: string = '') {
  return str.charAt(0).toUpperCase() + str.slice(1)
}
