import type { Page, PageData } from '../type'
import type { PromotionArticleResponse, PromotionRewardsResponse } from './type'

const promotionArticleListUrl = '/promotion/article/page'
const promotionRewardsUrl = '/promotion/rewards/all-rewards'
const promotionRewardsClaimUrl = '/promotion/rewards/claim-bonus'

/**
 * 活动列表
 */
export async function asyncPromotionArticleList(params: {} & Page) {
  return useNuxtApp().$clientApi<PageData<PromotionArticleResponse>>(
    promotionArticleListUrl,
    {
      params,
    },
  )
}

/**
 * 奖励列表
 */
export async function getPromotionRewardsList() {
  return useNuxtApp().$clientApi<PromotionRewardsResponse[]>(promotionRewardsUrl)
}

/**
 * 领取奖励
 */
export async function getPromotionRewardsClaim(id: number) {
  return useNuxtApp().$clientApi<PromotionRewardsResponse[]>(promotionRewardsClaimUrl, { params: { id } })
}
