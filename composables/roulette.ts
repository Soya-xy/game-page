import type { RouletteInfo, RouletteList } from '~/api/roulette/type'
import { getRouletteInfo, getRouletteSpin } from '~/api/roulette'

export const rouletteInfo = ref<RouletteInfo>()
export const rouletteList = ref<RouletteList[]>([])

export async function getRouletteList() {
  const res = await getRouletteSpin()
  rouletteList.value = res
}

export async function getRoulette() {
  const res = await getRouletteInfo()
  rouletteInfo.value = res
  await getRouletteList()
}

// getRoulette()
