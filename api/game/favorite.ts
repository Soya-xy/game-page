import type { Page, PageData } from '../type'
import type { Game } from './type'

export const faviconGameUrl = '/product/favorite/page'
export const faviconGameCount = '/product/favorite/get-count'

export function getFavoriteGameList(params: Page) {
  return useNuxtApp().$clientApi<PageData<Game>>(faviconGameUrl, {
    params,
  })
}

export function getFavoriteGameCount() {
  return useNuxtApp().$clientApi<number>(faviconGameCount)
}
