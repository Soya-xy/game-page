import type { ID, ParentId, PicUrl } from './../type'

export type Provider = PicUrl & ID & { count: number }
export interface CategoryListDetailResponse {
  pageResult: {
    list: {
      id: number
      name: string
      keyword: string
      nameId: string
      introduction: string
      categoryId: number
      description: string
      propertyId: string
      picUrl: string
      brandId: number
      brandName: string
      sort: number
      status: number
      virtualSalesCount: number
      browseCount: number
      gameMaintain: boolean
      newGame: boolean
      isHot: boolean
      isLobby: boolean
      gameRecommended: boolean
      gameStock: boolean
      rtp: string
      greatVictory: string
      createTime: string
    }[]
    total: number
  }
  providerData: Provider[]
}

export interface CategoryListProviderResponse extends ID, ParentId, PicUrl {}

export interface CategoryListResponse {
  gamesRespVO: CategoryListDetailResponse
  providerList: CategoryListDetailResponse[]
}

export interface CategoryQuery {
  id: string
  name?: string
  order?: string
}
