import type { ID, Page } from '../type'
import type { BigWinsItem, GameResponse, HomeData } from './type'

const homeDataUrl = '/api/getHomeData'

const sportsDataUrl = '/promotion/homepage-layout/home-module-sports'

const moduleDataUrl = '/promotion/homepage-layout/home-module-data'

const hotGameUrl = '/product/category/list-hot-game'

const bigWinsUrl = '/promotion/homepage-layout/home-module-bigWins'

export async function getHomeData() {
  return useNuxtApp().$serverApi<HomeData[]>(homeDataUrl)
}

export async function asyncHomeData() {
  return useAPI<HomeData[]>(homeDataUrl, undefined, true)
}

export async function getHomeBigWins() {
  return useNuxtApp().$clientApi<BigWinsItem[]>(bigWinsUrl)
}

export async function asyncHomeBigWins() {
  return useAPI<BigWinsItem[]>(bigWinsUrl)
}

export async function asyncSportsData() {
  return useAPI<any[]>(sportsDataUrl)
}

export async function asyncModuleData(params: Page & ID) {
  return useAPI<GameResponse>(moduleDataUrl, {
    params,
  })
}

export async function asyncHotGameData() {
  return useAPI<GameResponse>(hotGameUrl)
}

export async function getGameByTag(tag: string) {
  return useNuxtApp().$clientApi<GameResponse>(`/product/category/list-${tag}-game`)
}
