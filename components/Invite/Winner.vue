<script lang="ts" setup>
import type { WinnerReward } from '~/api/roulette/type'
import { getWinnerReward } from '~/api/roulette'

const activeIndex = ref(0)
const list = ref<WinnerReward[]>([])
const myList = ref<WinnerReward[]>([])

watch(rouletteInfo, (val) => {
  if (val?.id) {
    getWinnerReward(val.id).then((res) => {
      list.value = res.list
      myList.value = res.myList
    })
  }
}, {
  immediate: true,
  deep: true,
})
</script>

<template>
  <div class="flex-[1] flex flex-col gap-y-[8px] mt-[20px] overflow-hidden w-full">
    <div
      class="h-[50px] text-[14px] font-bold text-white bg-color2 border-radius-1 flex justify-between items-center gap-[5px] overflow-hidden p-[5px] shrink-0"
    >
      <div
        class="h-full flex-1 flex items-center justify-center border-radius-0 cursor-pointer"
        :class="{ 'bg-[--bc-bgColor7]': activeIndex === 0 }" @click="() => {
          activeIndex = 0
        }"
      >
        Winner
      </div>
      <div
        class="h-full flex-1 flex items-center justify-center border-radius-0 cursor-pointer"
        :class="{ 'bg-[--bc-bgColor7]': activeIndex === 1 }" @click="() => {
          activeIndex = 1
        }"
      >
        My Reward
      </div>
    </div>
    <div class="overflow-hidden text-[13px] bg-color2 border-radius-1 p-[15px] h-[160px]">
      <BaseAutoScroll :list="activeIndex === 0 ? list : myList" :min-size="40" :item-gap="0">
        <template #default="{ itemData }">
          <div class="flex justify-between items-center h-[40px] font-semibold">
            <div class="flex-1">
              {{ itemData.spinName }}
            </div>
            <div class="flex-1 text-center text-white">
              {{ itemData.spinType }}
            </div>
            <div class="text-active flex-1 text-right">
              <span class="whitespace-pre">{{ toCurrency(itemData.amount) }}</span>
            </div>
          </div>
        </template>
      </BaseAutoScroll>
    </div>
  </div>
</template>

<style></style>
