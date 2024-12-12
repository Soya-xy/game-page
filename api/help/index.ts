import type { FeedBackCreateResponse } from './type'

/**
 * 消息反馈
 * @returns
 */
export async function asyncFeedBackCreate(params: FeedBackCreateResponse) {
  return useNuxtApp().$clientApi('/help/user-feedback/create-feedback', {
    body: params,
    method: 'post',
  })
}
