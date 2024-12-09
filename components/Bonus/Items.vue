<script lang="ts" setup>
import { activityTypeMap } from './VipActivityEnum'
</script>

<template>
  <div class="grid gap-[20px] grid-cols-[repeat(auto-fill,minmax(280px,1fr))]">
    <div
      v-for="v in activityTypeMap" :key="v.id"
      class="flex flex-col w-full h-[308px] z-[1] relative border-radius-1 bg-[--bc-activity35] text-white"
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
        class="w-full h-full px-[4px] pb-[4px] relative z-[1] rounded-[inherit] flex flex-col justify-between bg-contain bg-no-repeat"
      >
        <div class="p-[10px] pt-[5px] flex items-center justify-center w-full h-[125px]">
          <Image :src="v.image" alt="" class="w-[110px]" />
        </div>
        <div class="pb-[10px] text-center text-[18px] font-bold flex items-center justify-center">
          {{ v.title }}
        </div>
        <div
          class="bg-[--bc-alphaBlack01] backdrop-blur-[10px] rounded-[8px] p-[10px] h-[137px] shrink-0 flex flex-col"
        >
          <div class="flex flex-col space-y-[8px] text-[14px] flex-1">
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
            class="shrink-0 h-[36px] text-font border-radius-0 font-bold w-full flex items-center justify-center text-[13px] bg-active"
          >
            <div class="flex items-center justify-center">
              Details
            </div>
          </button>
        </div>
      </div>
      <div
        class="px-[10px] z-[4] py-[5px] absolute right-0 top-0 bg-[--bc-buttonColor] rounded-bl-[inherit] rounded-tr-[inherit] text-white text-[14px] z-[6] cursor-pointer"
      >
        Rules
      </div>
    </div>
  </div>
</template>
