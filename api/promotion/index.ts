import type { Page, PageData } from '../type'
import type { PromotionArticleResponse } from './type'

/**
 * 活动列表
 */
export async function asyncPromotionArticleList(params: { } & Page) {
  return useNuxtApp().$clientApi<PageData<PromotionArticleResponse>>(
    '/promotion/article/page',
    {
      params,
    },
  )
}
