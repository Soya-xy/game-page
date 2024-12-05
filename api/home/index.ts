import type { ID, Page } from '../type'
import type { GameResponse, HomeData } from './type'

const homeDataUrl = '/api/getHomeData'

const sportsDataUrl = '/promotion/homepage-layout/home-module-sports'

const moduleDataUrl = '/promotion/homepage-layout/home-module-data'

const hotGameUrl = '/product/category/list-hot-game'

export async function getHomeData() {
  return useNuxtApp().$serverApi<any[]>(homeDataUrl)
}

export async function asyncHomeData() {
  return useAPI<HomeData[]>(homeDataUrl, undefined, true)
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
