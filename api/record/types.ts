export interface RecordList {
  bonusIcon: string
  bonusName: string
  bonusType: number
  totalClaimedAmount: number
}

export interface RecordPage {
  id: number
  userId: number
  userName: string
  bizId: string
  bizType: number
  title: string
  description: string
  point: number
  totalPoint: number
  createTime: string
}
