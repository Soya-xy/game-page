<script lang="ts" setup>
interface Info {
  eventName: string
  startDate: string
  banner: string
  blueIcon: string
  blueTeamName: string
  redIcon: string
  redTeamName: string
  productCode: string
  productDesc: string
}
const info = defineProp<Info>(undefined, true)
const desc = computed(() => JSON.parse(info.value?.productDesc || '{}'))
</script>

<template>
  <div>
    <div
      class="bg-color2 space-y-[20px] py-[10px] px-[12px] rounded-[10px] font-semibold cursor-pointer text-white"
      :style="`${info.banner ? `background: url(${info.banner}) no-repeat center center / cover` : ''}`"
    >
      <div class="flex items-center justify-between">
        <div class="flex items-center overflow-hidden">
          <svg xmlns="http://www.w3.org/2000/svg" width="6" height="6" viewBox="0 0 6 6" fill="none" class="mx-[6px]">
            <circle cx="3.14746" cy="2.7207" r="2.5" fill="white" />
          </svg>
          <div class="truncate xl:max-w-[15rem] lg:max-w-[20rem] md:max-w-[10rem] max-w-[25rem]">
            {{ info.eventName }}
          </div>
        </div>
        <div
          v-if="!info.startDate"
          class="bg-noActive h-[24px] min-w-[48px] whitespace-nowrap shrink-0 px-[6px] text-active font-normal flex items-center justify-center gap-x-[4px] rounded-[10px]"
        >
          <i
            class="inline-block h-[max-content] w-[max-content] icon-new-play cursor-pointer text-active text-[12px]"
          />
          Live
        </div>
        <p v-else class="text-white truncate">
          {{ info.startDate }}
        </p>
      </div>
      <div class="flex items-center justify-between h-[90px]">
        <div class="flex-1 flex flex-col items-center h-full justify-start gap-y-[4px]">
          <Image
            :src="info.blueIcon"
            class="h-[50px]"
          />
          <div class="text-center break-words break-all line-clamp-2">
            {{ info.blueTeamName }}
          </div>
        </div>
        <div class="px-[20px] flex flex-col items-center justify-center  gap-y-[8px]">
          <div class="text-[24px]">
            <span>{{ desc?.socres?.away_score }}</span> : <span>{{ desc?.socres?.home_score }}</span>
          </div>
          <div class="text-color font-normal">
            {{ desc?.state }}
          </div>
        </div>
        <div class="flex-1 flex flex-col items-center justify-start gap-y-[4px] h-full">
          <Image
            :src="info.redIcon"
            class="h-[50px]"
          />
          <div class="text-center break-words break-all line-clamp-2">
            {{ info.redTeamName }}
          </div>
        </div>
      </div>
      <div class="flex gap-x-[5px]">
        <button class="flex-1 h-[40px] rounded-[10px] flex items-center justify-center gap-x-[8px] bg-[#FC3C3C1a]">
          1 <div class="text-[12px] text-[#FC3C3C]">
            {{ desc?.markets?.basic[1]?.k }}
          </div>
        </button><button
          class="flex-1 h-[40px] border-radius-0 flex items-center justify-center gap-x-[8px] bg-[#fc3c3c26]"
        >
          Draw
          <div class="text-[12px] text-[#FC3C3C]">
            {{ desc?.markets?.basic[2]?.k }}
          </div>
        </button>

        <button
          class="flex-1 h-[40px] rounded-[10px] flex items-center justify-center gap-x-[8px] bg-[#FC3C3C1a]"
        >
          2 <div class="text-[12px] text-[#FC3C3C]">
            {{ desc?.markets?.basic[3]?.k }}
          </div>
        </button>
        <button v-if="desc?.markets?.plus" class="flex-1 h-[40px] rounded-[10px] flex items-center justify-center bg-page">
          +{{ desc?.markets?.plus }}
        </button>
      </div>
    </div>
  </div>
</template>

<style></style>
