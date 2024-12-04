import type { AsyncData } from '#app'
import type { Page } from './type'
import { useMyAsyncData } from '.'

export async function getCategoryList(): Promise<AsyncData<any[], any>> {
  return useMyAsyncData('getCategoryList', '/api/getCategoryList', undefined, {
    server: true,
  })
}

export async function getCategoryListDetail(params: { id: string } & Page): Promise<AsyncData<any, any>> {
  return useMyAsyncData('getCategoryListDetail', '/api/getCategoryListDetail', {
    params,
  }, {
    server: true,
  })
}
