<script lang="ts" setup>
import { ref } from 'vue'
import { activityTypeMap } from './VipActivityEnum'

const current = ref<number>(0)
const { isPc } = useDevice()
const currentList = ref<{
  title: string
  icon: string
  children: any[]
}[]>([{
  title: 'General Bonus',
  icon: 'icon-new-bonus',
  children: Object.values(activityTypeMap).filter(v => [1, 2, 3, 4].includes(v.id)) || [],
}, {
  title: 'VIP Bonus',
  icon: 'icon-new-bonus-vip',
  children: Object.values(activityTypeMap).filter(v => [5, 6, 7, 8].includes(v.id)) || [],
}, {
  title: 'Special Bonus',
  icon: 'icon-new-bonus-special ',
  children: Object.values(activityTypeMap).filter(v => [9, 10, 11, 12].includes(v.id)) || [],
}])

const showRules = ref<boolean>(false)
const currentRules = ref<any>(null)

function handleRules(v: any) {
  currentRules.value = v
  showRules.value = true
}
</script>

<template>
  <BaseTabs
    v-model="current" :list="currentList"
    class="!static rounded-b-[5px] [&>div:first-child]:rounded-bl-[5px] [&>div:last-child]:rounded-br-[5px] mb-[20px]"
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
        <div class="md:p-[10px] md:pt-[5px] flex items-center justify-center md:w-full md:h-[125px]  w-[100px]">
          <Image :src="v.image" alt="" class="md:w-[110px] md:!h-auto w-[78px] !h-[78px]" />
        </div>
        <div class="flex flex-col flex-1 md:py-0 py-[13px]  ">
          <div
            class="pb-[10px] text-center md:text-[18px] text-[16px] font-bold flex items-center md:justify-center justify-start"
          >
            {{ v.title }}
          </div>

          <div
            class="bg-[--bc-alphaBlack01] backdrop-blur-[10px] rounded-[8px] md:p-[10px] md:h-[137px] shrink-0 flex flex-col  pr-[10px] flex-1 md:flex-[0_auto] md:items-center items-end"
          >
            <div class="flex flex-col space-y-[8px] md:text-[14px] text-[12px] flex-1 w-full">
              <div class="flex text-color shrink-0 justify-between items-center">
                <span>Wager</span>
                <div>
                  <span class="whitespace-pre text-white">$0.00</span> /
                  <span class="whitespace-pre">200.00</span>
                </div>
              </div>
              <div class="flex text-color shrink-0 justify-between items-center">
                <span>Daily
                  Bonus</span><span class="whitespace-pre text-white">$1.00</span>
              </div>
            </div>

            <button
              class="shrink-0 h-[36px] text-font border-radius-0 font-bold md:w-full w-[max-content] min-w-[136px] flex items-center justify-center text-[13px] bg-active"
            >
              <div class="flex items-center justify-center">
                Details
              </div>
            </button>
          </div>
        </div>
      </div>
      <div
        class="px-[10px] z-[4] py-[5px] absolute right-0 top-0 bg-[--bc-buttonColor] rounded-bl-[inherit] rounded-tr-[inherit] text-white text-[14px] z-[6] cursor-pointer"
        @click="handleRules(v)"
      >
        Rules
      </div>
    </div>
  </div>
  <BaseEmpty v-else />

  <BaseModal
    v-if="isPc"
    v-model:show="showRules" content-class="!bg-[#F5F8FA] !rounded-[10px]"
    close-class="!text-white bg-[--bc-alphaBlack] w-[28px] h-[28px] !rounded-full flex items-center justify-center"
  >
    <BonusModal :info="currentRules" />
  </BaseModal>
  <BaseDrawer v-else v-model:open="showRules" content-class="z-[999] h-[max-content] p-0" overlay-class="z-[999]" no-header>
    <div class="absolute top-0 right-0 px-[15px] py-[10px] z-[10]" @click="showRules = false">
      <div class="bg-[--bc-alphaBlack] w-[28px] h-[28px] rounded-full flex items-center justify-center font-bold">
        <i class="inline-block h-[max-content] w-[max-content] icon-new-clean-3 text-white text-[12px]" />
      </div>
    </div>
    <BonusModal :info="currentRules" />
  </BaseDrawer>
</template>
