export interface PromotionArticleResponse {
  id: number
  title: string
  author: string
  categoryId: number
  picUrl: string
  introduction: string
  content: string
  createTime: Date
  browseCount: number
  spuId: number
}

export interface PromotionRewardsResponse {
  id: number
  name: string
  picUrl: string
  listRewards: {
    id: number
    bonusCode: number
    title: string
    path: string
    categoryId: number
    picUrl: string
  }[]
}
