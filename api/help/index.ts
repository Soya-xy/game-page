import type { FeedBackCreateResponse } from './type'

export const feedBackUrl = '/help/user-feedback/create-feedback'

export const resourceUrl = '/help/resource-config/get-key-list'
/**
 * 消息反馈
 */
export async function asyncFeedBackCreate(params: FeedBackCreateResponse) {
  return useNuxtApp().$clientApi(feedBackUrl, {
    body: params,
    method: 'post',
  })
}

/**
 * 资源配置
 */
export async function asyncResourceConfigGetKeyList(resourceCategory: string) {
  return useNuxtApp().$clientApi(resourceUrl, {
    params: {
      resourceCategory,
    },
  })
}
