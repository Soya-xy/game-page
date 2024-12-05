import type { ID } from './../type'

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
  providerData: string
}

export interface CategoryListProviderResponse extends ID {
  picUrl: string
  name: string
  parentId: number
}

export interface CategoryListResponse {
  gamesRespVO: CategoryListDetailResponse
  providerList: CategoryListDetailResponse[]
}
