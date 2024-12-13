export interface AffiliateSummary {
  withdrawPrice: number
  brokeragePrice: number
  todayEffectiveInvestment: number
  todayBrokerageUserCount: number
  todayFirstDeposit: number
  totalBrokerageUserCount: number
  totalEffectiveInvestment: number
  totalFirstDeposit: number
}

export interface AffiliateCode {
  brokeragePosterUrls: string[]
  brokeragePromotionUrl: string
  brokeragePromotionCode: string
}

export interface AffiliateActivity {
  maxParticipants: number
  maxReward: number
}

export interface AffiliateRecord {
  respVOList: {
    avatar: string
    phone: string
    userName: string
    price: number
    level: number
  }[]
  totalCommission: number
}

export interface AffiliateLevel {
  gameCategory: string
  tier: number
  rewardPercentage: number
  wagerPercentage: number
  remarks: string
  createTime: string
}

export interface AffiliateInvite {
  status: number
  id: string
  statusName: string
  price: number
  createTime: string
}
