import type { Page } from '../type'
import type { PromotionArticleResponse } from './type'

/**
 * 活动列表
 * @returns
 */
export async function asyncPromotionArticleList(params: { } & Page) {
  return useNuxtApp().$clientApi<PromotionArticleResponse[]>('/promotion/article/page', {
    params,
  })
}
