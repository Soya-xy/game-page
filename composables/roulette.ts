import type { RouletteInfo, RouletteList } from '~/api/roulette/type'
import { getRouletteInfo, getRouletteSpin } from '~/api/roulette'

export const rouletteInfo = ref<RouletteInfo>()
export const rouletteList = ref<RouletteList[]>([])
export const spinResult = ref<any>(null)
export const freeAmount = ref<number>(0)
export async function getRouletteList() {
  const res = await getRouletteSpin()
  rouletteList.value = res
}

export async function getRoulette() {
  const res = await getRouletteInfo()
  rouletteInfo.value = res
}

export async function initRoulette() {
  await getRoulette()
  await getRouletteList()
}
