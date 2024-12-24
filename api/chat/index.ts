import type { Page, PageData } from '../type'
import type { ChatList, Conversation } from './type'

export const getChatListUrl = 'promotion/public-message/public-page'
export const sendChatUrl = 'promotion/public-message/send-public'
export const getConversationUrl = 'promotion/public-message/public-channel'

export async function getConversation() {
  return useNuxtApp().$clientApi<Conversation[]>(getConversationUrl)
}

export async function getChatList(params: Page & { conversationId: number }) {
  return useNuxtApp().$clientApi<PageData<ChatList>>(getChatListUrl, { params })
}
export async function sendChat(body: {
  contentType: number
  content: string
  conversationId: number
}) {
  return useNuxtApp().$clientApi<boolean>(sendChatUrl, {
    method: 'POST',
    body,
  })
}
