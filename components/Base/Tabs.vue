<script lang="ts" setup>
import { cn } from '@/lib/utils'

const list = defineProp<string[] | { title: string, icon?: string, badge?: number, value?: string }[]>()
const itemClass = defineProp<string>()
const modelValue = defineModel<number>()
const { isShowTop } = useMenu()
</script>

<template>
  <div
    class="border-b-[1px] border-solid border-[--bc-bgColor9] flex fixed md:static w-full z-[20] bg-color2 md:h-[46px] h-[40px] overflow-x-auto transition-all duration-300"
    :class="!isShowTop ? 'top-[48px]' : 'top-[calc(48px+var(--bc-appDownloadHeight,0px))]'"
  >
    <div
      v-for="(item, index) in list" :key="index"
      class="h-full flex-[0_0_auto] md:flex-none md:w-[200px] px-[4px] flex items-center cursor-pointer justify-center text-xs relative"
      :class="cn(
        index === modelValue ? 'bg-linear-color-4 text-white font-bold' : '',
        itemClass,
      )" @click="modelValue = index"
    >
      <template v-if="typeof item === 'string'">
        {{ item }}
      </template>
      <template v-else>
        <div class="flex items-center gap-x-[2px]">
          <i :class="`inline-block h-[max-content] w-[max-content] cursor-pointer mr-[4px] text-[16px] ${item.icon} ${index === modelValue ? 'text-white' : 'text-color'}`" />
          {{ item.title }}
        </div>
        <div v-if="item.badge && item.badge > 0" class="absolute top-0 right-0 bg-green text-font min-w-[16px] h-[16px] rounded-full flex items-center justify-center font-bold text-[12px]">
          {{ item.badge }}
        </div>
      </template>
    </div>
  </div>
</template>

<style>

</style>
