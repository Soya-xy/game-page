<script lang="ts" setup>
import { ActivityType, getCheckInButton, getMonthlyRewardButton, getSpinButton } from './VipActivityEnum'

const data = defineProp<any>()
const handle = defineEmit<any>()
const loading = defineModel<boolean>()

const info = computed<any>(() => {
  return Object.values(data.value?.rewardInfo).filter(Boolean)?.[0]
})

const status = computed<any>(() => {
  if (!info.value)
    return

  if (info.value.countdown > 0) {
    return {
      type: 'countdown',
    }
  }

  switch (data.value.bonusCode) {
    // 转盘
    case ActivityType.InviteWheel:
      return getSpinButton(info.value)
    // 扭蛋
    case ActivityType.CrazyGachapon:
      return {
        type: 'details',
        text: 'Details',
      }
    // 签到
    case ActivityType.CheckIn:
      return getCheckInButton(info.value)
    // 等级奖励
    case ActivityType.LevelReward:
      return {
        type: 'details',
        text: 'View VIP Club',
      }
    // 月度奖励
    case ActivityType.MonthlyReward:
      return getMonthlyRewardButton(info.value)
    // 周度奖励
    case ActivityType.WeeklyReward:
      return {
        type: 'details',
        text: 'Claim',
      }
    default:
      return {
        type: 'details',
        text: 'Details',
      }
  }
})

function handleItem() {
  loading.value = true
  handle(data.value)
  loading.value = false
}
</script>

<template>
  <button
    v-if="status.type === 'countdown'"
    class="shrink-0 h-[36px] text-font border-radius-0 font-bold w-full flex items-center justify-center text-[13px] pointer-events-none"
  >
    <div class="text-[13px] text-color flex items-center justify-center">
      <i
        class="inline-block h-[max-content] w-[max-content] icon-new-recent-useless cursor-pointer text-[13px] mr-[6px] text-color"
      />
      Ready in
      <Countdown :time="info?.countdown" content-class="ml-2" />
    </div>
  </button>
  <button
    v-else-if="status.type === 'lock'"
    class="shrink-0 h-[36px] text-color-btn-4 border-radius-0 font-bold w-full flex items-center justify-center text-[13px] bg-color-btn-3 text-color-text-0"
  >
    <div class="flex items-center justify-center">
      <i
        class="inline-block h-[max-content] w-[max-content] icon sysicon-new-lock cursor-pointer text-[13px] mr-[4px]"
      />
      {{ status.text }}
    </div>
  </button>
  <BaseButton
    v-else :loading="loading"
    class="shrink-0 h-[36px] text-font border-radius-0 font-bold md:w-full w-[max-content] min-w-[136px] flex items-center justify-center text-[13px] "
    :class="{
      'bg-active': info.status === 1,
      'bg-color5 text-white': info.status === 0,
    }" @click="handleItem"
  >
    {{ status.text }}
  </BaseButton>
</template>

<style></style>
