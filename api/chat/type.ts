export interface ChatList {
  id: number
  conversationId: number
  senderId: number
  senderAvatar: string
  nickname: string
  level: number
  senderType: number
  receiverId: number
  receiverType: number
  contentType: number // 1: text, 2: image, 3: audio, 4: video
  content: string
  readStatus: boolean
  createTime: number
}

export interface Conversation {
  id: number
  sessionTitle: string
}
