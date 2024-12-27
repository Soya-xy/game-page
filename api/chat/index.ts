import type { ChatList, Conversation } from './type'

export const getChatListUrl = 'promotion/public-message/public-page'
export const sendChatUrl = 'promotion/public-message/send-public'
export const getConversationUrl = 'promotion/public-message/public-channel'
export const getChatCountUrl = 'promotion/public-message/get-public-channel'

export async function getConversation() {
  return useNuxtApp().$clientApi<Conversation[]>(getConversationUrl)
}

export async function getChatCount(conversationId: number) {
  return useNuxtApp().$clientApi<number>(getChatCountUrl, {
    params: {
      conversationId,
    },
  })
}

export async function getChatList(params: any & { conversationId: number }) {
  return useNuxtApp().$clientApi<ChatList[]>(getChatListUrl, { params })
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
