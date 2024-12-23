import type { ID } from '../type'
import type { RouletteInfo, RouletteList, RouletteSpin, WinnerReward } from './type'

const getRouletteInfoUrl = '/promotion/roulette-spin-record/get-roulette-info'
const spinRouletteUrl = '/promotion/roulette-spin-record/spin-roulette'
const redeemRewardUrl = '/promotion/roulette-spin-record/redeem-reward'
const getRouletteSpinUrl = '/promotion/roulette-spin-record/get-roulette-spin'
const winnerRewardUrl = '/promotion/roulette-spin-record/winner-reward'
export const getFreeAmountUrl = '/promotion/roulette-spin-record/get-roulette-freeAmount'

export async function getRouletteInfo() {
  return useNuxtApp().$clientApi<RouletteInfo>(getRouletteInfoUrl)
}
export async function spinRoulette() {
  return useNuxtApp().$clientApi<RouletteSpin>(spinRouletteUrl)
}

export async function redeemReward(params: ID) {
  return useNuxtApp().$clientApi<boolean>(redeemRewardUrl, {
    params,
  })
}

export async function getRouletteSpin() {
  return useNuxtApp().$clientApi<RouletteList[]>(getRouletteSpinUrl)
}
export async function getWinnerReward(id: number) {
  return useNuxtApp().$clientApi<{
    list: WinnerReward[]
    myList: WinnerReward[]
  }>(winnerRewardUrl, {
    params: {
      id,
    },
  })
}
export async function getFreeAmount() {
  return useNuxtApp().$clientApi<boolean>(getFreeAmountUrl)
}
