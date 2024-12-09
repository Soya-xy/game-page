import type { BannerResponse } from './type'

const bannerUrl = '/promotion/banner/list'
const addBrowserUrl = '/promotion/banner/add-browse-count'
export async function asyncBannerList(position: number) {
  return useAPI<BannerResponse[]>(bannerUrl, {
    params: {
      position,
    },
  })
}

export async function getBannerList(position: number) {
  return useNuxtApp().$clientApi<BannerResponse[]>(bannerUrl, {
    params: {
      position,
    },
  })
}

export async function addBrowser(id: number) {
  return useNuxtApp().$clientApi(addBrowserUrl, {
    method: 'put',
    query: {
      id,
    },
  })
}
