<script lang="ts" setup>
import { ref } from 'vue'
import { getPromotionRewardsClaim, getPromotionRewardsList, getPromotionRewardsReady } from '~/api/promotion'
import { useToast } from '../ui/toast'
import { ActivityType, getActivityDetail } from './VipActivityEnum'

const { isPc } = useDevice()
const { toast } = useToast()

const current = ref<number>(0)
const currentList = ref<any[]>([])
const showRules = ref<boolean>(false)
const loading = ref<boolean>(false)
const currentRules = ref<any>(null)
const currentItem = ref<any>(null)
const showGachapon = ref<boolean>(false)
const showTurnTable = ref<boolean>(false)
const showCheckIn = ref<boolean>(false)

const total = ref<any[]>([])
const res = await getPromotionRewardsList()

// 获取每个活动的奖励数量
const listRewards = await getPromotionRewardsReady()
listRewards.forEach((v) => {
  total.value.push({
    id: v.id,
    count: v.listRewards.length,
  })
})

currentList.value = res.map((v) => {
  return {
    id: v.id,
    title: v.name,
    icon: v.picUrl.replaceAll('sysicon-', 'icon-'),
    children: v.listRewards,
    badge: total.value.find(item => item.id === v.id)?.count,
  }
})

function handleRules(v: any) {
  currentRules.value = v
  showRules.value = true
}

// 活动处理映射
const BONUS_HANDLERS: any = {
  [ActivityType.InviteWheel]: () => {
    if (isPc.value) {
      showTurnTable.value = true
    }
    else {
      routerPush('/bonus/roulette')
    }
  },

  [ActivityType.CrazyGachapon]: () => {
    showGachapon.value = true
  },

  [ActivityType.CheckIn]: () => {
    showCheckIn.value = true
  },

  [ActivityType.LevelReward]: () => {
    routerPush('/vip')
  },

  [ActivityType.WeeklyReward]: async () => {
    try {
      loading.value = true
      await getPromotionRewardsClaim(currentItem.value.id)

      toast({
        title: 'Claim Success',
        class: 'my-toast',
        duration: 2000,
      })
    }
    catch (error) {
      console.error('处理奖励项目时出错:', error)
    }
    finally {
      loading.value = false
    }
  },
} as const

function handleItem(item: any) {
  try {
    currentItem.value = item
    const handler = BONUS_HANDLERS[item.bonusCode]
    loading.value = true
    if (handler) {
      handler(item)
    }
    else {
      console.warn(`未找到对应的处理方法: ${item.bonusCode}`)
    }
  }
  catch (error) {
    console.error('处理奖励项目时出错:', error)
  }
  finally {
    loading.value = false
  }
}
</script>

<template>
  <BaseTabs
    v-model="current" :list="currentList"
    class="!static rounded-b-[5px] [&>div:first-child]:rounded-bl-[5px] [&>div:last-child]:rounded-br-[5px] mb-[20px]"
    item-class="w-[33%] !whitespace-nowrap"
  />

  <div
    v-if="currentList[current]?.children.length"
    class="grid gap-[20px] grid-cols-[repeat(auto-fill,minmax(280px,1fr))]"
  >
    <div
      v-for="v in currentList[current]?.children" :key="v.id"
      class="flex md:flex-col w-full md:h-[308px] h-[150px] z-[1] relative border-radius-1 bg-[--bc-activity35] text-white"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg" fill="none"
        class="absolute top-0 left-0 pointer-events-none z-[5] w-full h-full rounded-[inherit]"
      >
        <g filter="url(#filter0_f_33686_44107)">
          <circle cx="151" cy="-90" r="80" :style="{ fill: v.color }" />
        </g>
        <defs>
          <filter
            id="filter0_f_33686_44107" x="-189" y="-430" width="680" height="680" filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="130" result="effect1_foregroundBlur_33686_44107" />
          </filter>
        </defs>
      </svg>
      <div
        class="w-full h-full px-[4px] pb-[4px] relative z-[1] rounded-[inherit] flex md:flex-col justify-between bg-contain bg-no-repeat"
      >
        <div class="md:p-[10px] md:pt-[5px] md:w-full md:h-[125px] flex items-center justify-center w-[100px]">
          <Image :src="v.picUrl" alt="" class="md:w-[110px] md:!h-auto w-[78px] !h-[78px]" />
        </div>
        <div class="flex flex-col flex-1 md:py-0 py-[13px]  ">
          <div
            class="pb-[10px] text-center md:text-[18px] text-[16px] font-bold flex items-center md:justify-center justify-start"
          >
            {{ v?.title }}
          </div>

          <div
            class="bg-[--bc-alphaBlack1a] backdrop-blur-[10px] rounded-[8px] md:p-[10px] md:h-[137px] shrink-0 flex flex-col  pr-[10px] flex-1 md:flex-[0_auto] md:items-center items-end"
          >
            <div
              class="flex flex-col space-y-[8px] md:text-[14px] text-[12px] flex-1 w-full"
              v-html="getActivityDetail(v?.bonusCode, v?.rewardInfo)"
            />

            <BonusButton :data="v" :loading="loading" @handle="handleItem" />
          </div>
        </div>
      </div>
      <div
        class="px-[10px]  py-[5px] absolute right-0 top-0 bg-[--bc-buttonColor] rounded-bl-[inherit] rounded-tr-[inherit] text-white text-[14px] z-[6] cursor-pointer"
        @click="handleRules(v)"
      >
        Rules
      </div>
    </div>
  </div>
  <BaseEmpty v-else />

  <BaseModal
    v-model:show="showRules" content-class="!bg-[#F5F8FA] !rounded-[10px] z-[999]"
    close-class="!text-white bg-[--bc-alphaBlack] w-[28px] h-[28px] !rounded-full flex items-center justify-center "
    overlay-class="z-[990]" wap-content-class="z-[999] h-[max-content] p-0" no-header
  >
    <div class="absolute top-0 right-0 px-[15px] py-[10px] z-[10] md:hidden" @click="showRules = false">
      <div class="bg-[--bc-alphaBlack] w-[28px] h-[28px] rounded-full flex items-center justify-center font-bold">
        <i class="inline-block h-[max-content] w-[max-content] icon-new-clean-3 text-white text-[12px]" />
      </div>
    </div>
    <BonusModal :info="currentRules" />
  </BaseModal>

  <BaseModal
    v-model:show="showGachapon" direction="right" wap-content-class="z-[555] h-[100vh] !p-0"
    content-class="z-[555] w-[500px]" overlay-class="z-[550]" no-header no-close
  >
    <Gachapon
      @close="() => {
        showGachapon = false
        currentItem = null
      }"
    />
  </BaseModal>

  <BaseModal
    v-model:show="showCheckIn" content-class=" !rounded-[10px] z-[999]"
    close-class="w-[28px] h-[28px] !rounded-full flex items-center justify-center " overlay-class="z-[990]"
    wap-content-class="z-[999] h-[max-content] p-0" no-header
  >
    <template #title>
      <div class="flex justify-between items-center h-[76px] px-[20px] bg-color-pop-16 text-white rounded-[10px]">
        Check In
      </div>
    </template>
    <div class="absolute top-0 right-0 px-[15px] py-[10px] z-[10] md:hidden" @click="showCheckIn = false">
      <div class="bg-[--bc-alphaBlack] w-[28px] h-[28px] rounded-full flex items-center justify-center font-bold">
        <i class="inline-block h-[max-content] w-[max-content] icon-new-clean-3 text-white text-[12px]" />
      </div>
    </div>
    <BonusCheckIn />
  </BaseModal>

  <TurnTable v-model:show="showTurnTable" class="!mx-auto" @close="currentItem = null" />
</template>
