import type { Page } from '../type'
import type { CategoryListProviderResponse, CategoryListResponse } from './type'

const categoryListUrl = '/api/getCategoryList'
const categoryListDetailUrl = '/api/getCategoryListDetail'
export async function getCategoryList() {
  return useNuxtApp().$serverApi<CategoryListProviderResponse[]>(categoryListUrl)
}

export async function asyncCategoryList() {
  return useAPI<CategoryListProviderResponse[]>(categoryListUrl, undefined, true)
}

export async function asyncCategoryListDetail(params: { id: string, name?: string } & Page) {
  return useAPI<CategoryListResponse>(categoryListDetailUrl, {
    params,
  }, true)
}

export async function getCategoryListDetailGame(params: { id: string } & Page) {
  return useNuxtApp().$serverApi<CategoryListResponse>(categoryListDetailUrl, {
    params,
  })
}
