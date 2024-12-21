export interface RouletteInfo {
  id: number
  spinAmount: number
  tickets: number
  totalSpinAmount: number
  remBalance: number
  freeAmount: number
  expirationDate: string
}

export interface RouletteList {
  id: number
  rewardValue: number
  imageUrl: string
  rewardDesc: string
}

export interface RouletteSpin {
  id: number
  spinId: number
  spinAmount: number
  tickets: number
  totalSpinAmount: number
  remBalance: number
  expirationDate: string
}
