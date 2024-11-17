import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function replaceMiddle(str: string) {
  return `${str.slice(0, 2)}****${str.slice(-1)}`
}
