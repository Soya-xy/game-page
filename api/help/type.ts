export interface FeedBackCreateResponse {
  userId: number | string
  feedbackTypeId?: string
  feedbackContent: string
}

export interface ResourceConfig {
  id: number
  resourceCategory: string
  configValue: string
  description: string
  configType: string
  isActive: number
  sortOrder: number
  createTime: string
}
