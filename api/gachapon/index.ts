import type { Gachapon, GachaponList } from './type'

export const spinUrl = 'promotion/gachapon-tasks/spin-gachapon'
export const receiveUrl = 'promotion/gachapon-tasks/receive-task-reward'
export const taskListUrl = 'promotion/gachapon-tasks/get-task-list'
export const specialPrizesUrl = 'promotion/gachapon-tasks/get-special-prizes'
export const redeemUrl = 'promotion/gachapon-tasks/redeem-reward'

export function spinGachapon() {
  return useNuxtApp().$clientApi<Gachapon>(spinUrl)
}

export function receiveTaskReward(id: number) {
  return useNuxtApp().$clientApi<Gachapon>(receiveUrl, { params: { id } })
}

export function getTaskList() {
  return useNuxtApp().$clientApi<GachaponList>(taskListUrl)
}

export function getSpecialPrizes() {
  return useNuxtApp().$clientApi<{ ruleId: number, prizesResp: Gachapon[] }>(specialPrizesUrl)
}

export function redeemReward(ruleId: number) {
  return useNuxtApp().$clientApi<Gachapon>(redeemUrl, { params: { ruleId } })
}
