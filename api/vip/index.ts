const levelListUrl = '/member/level/list'

export interface VipLevel {
  id: number
  name: string
  level: number
  experience: number
  levelBonus: number
  weeklyExperience: number
  weeklyBonus: number
  dailyExperience: number
  dailyBonus: number
  monthlyExperience: string
  monthlyBonus: number
  exclusiveVip: boolean
  exclusiveBonuses: boolean
  premiumGiveaways: boolean
  bonusRain: boolean
  icon: string
  backgroundUrl: string
}

export async function asyncLevelList() {
  return useAPI<VipLevel[]>(levelListUrl, {
    default: () => [],
  })
}

export async function getLevelList() {
  return useNuxtApp().$clientApi<VipLevel[]>(levelListUrl)
}
