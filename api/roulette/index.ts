import type { RouletteInfo, RouletteList, RouletteSpin } from './type'

const getRouletteInfoUrl = '/promotion/roulette-spin-record/get-roulette-info'
const spinRouletteUrl = '/promotion/roulette-spin-record/spin-roulette'
const redeemRewardUrl = '/promotion/roulette-spin-record/redeem-reward'
const getRouletteSpinUrl = '/promotion/roulette-spin-record/get-roulette-spin'

export async function getRouletteInfo() {
  return useNuxtApp().$clientApi<RouletteInfo>(getRouletteInfoUrl)
}
export async function spinRoulette() {
  return useNuxtApp().$clientApi<RouletteSpin>(spinRouletteUrl)
}

export async function redeemReward() {
  return useNuxtApp().$clientApi<boolean>(redeemRewardUrl)
}

export async function getRouletteSpin() {
  return useNuxtApp().$clientApi<RouletteList[]>(getRouletteSpinUrl)
}
