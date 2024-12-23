import type { Page, PageData } from '../type'
import type { Game } from './type'

export const faviconGameUrl = '/product/favorite/page'
export const faviconGameCount = '/product/favorite/get-count'
export const historyGameUrl = '/product/browse-history/page'

export function getFavoriteGameList(params: Page) {
  return useNuxtApp().$clientApi<PageData<Game>>(faviconGameUrl, {
    params,
  })
}
export function getRecentGameList(params: Page) {
  return useNuxtApp().$clientApi<PageData<Game>>(historyGameUrl, {
    params,
  })
}

export function getFavoriteGameCount() {
  return useNuxtApp().$clientApi<number>(faviconGameCount)
}
