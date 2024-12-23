import type { PageData } from '../type'

export const getChatListUrl = 'promotion/kefu-message/page'
export const sendChatUrl = 'promotion/kefu-message/send'
export async function getChatList(params: any) {
  return useNuxtApp().$clientApi<PageData<any>>(getChatListUrl, { params })
}
export async function sendChat(body: any) {
  return useNuxtApp().$clientApi<any>(sendChatUrl, {
    method: 'POST',
    body,
  })
}
