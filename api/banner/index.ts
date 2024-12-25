import type { BannerResponse } from './type'

const bannerUrl = '/promotion/homepage-layout/home-module-banner'
const addBrowserUrl = '/promotion/banner/add-browse-count'
export async function asyncBannerList() {
  return useAPI<BannerResponse[]>(bannerUrl)
}

export async function getBannerList() {
  return useNuxtApp().$clientApi<BannerResponse[]>(bannerUrl)
}

export async function addBrowser(id: number) {
  return useNuxtApp().$clientApi(addBrowserUrl, {
    method: 'put',
    query: {
      id,
    },
  })
}
