<script lang="ts" setup>
import type { VipLevel } from '~/api/vip'

const levelList = inject<VipLevel[]>('levelList')
const modelValue = defineModel<number>('modelValue', {
  required: true,
})
</script>

<template>
  <div class="md:overflow-hidden overflow-x-auto overflow-y-hidden bg-color2 md:pt-[20px] pt-[6px] w-full">
    <div class="grid w-full grid-cols-[repeat(15,1fr)] gap-[10px] md:gap-0">
      <div
        v-for="level in levelList" :key="level.id"
        class="relative h-[30px] md:text-white text-color leading-[30px] cursor-pointer whitespace-nowrap z-[2] rounded-[15px]  justify-center flex"
        :class="{
          'bg-[--bc-activeColor] vip-level-item !text-font': modelValue === level.id,
        }" @click="modelValue = level.id"
      >
        <div class="min-w-[50px] relative rounded-[15px] h-full">
          <p class="whitespace-nowrap w-full text-center md:font-bold leading-[30px] md:text-[14px] text-[12px]">
            VIP {{ level.id }}
          </p>
        </div>
      </div>
    </div>
    <div
      class="bg-[--bc-color20] grid h-[10px] mt-[6px] w-full gap-[10px] md:gap-0" :style="{
        'grid-template-columns': `repeat(${levelList!.length}, 1fr)`,
      }"
    >
      <div
        v-for="level in levelList" :key="level.id"
        class="relative h-[10px] min-w-[50px] shrink-0 text-white leading-[30px] bg-[--bc-color20] whitespace-nowrap px-[10px] z-[2] vip-level-item-tag text-center"
        :class="{
          'vip-level-item-currrent-tag': modelValue === level.id,
        }"
      >
        <p class="whitespace-nowrap w-full text-center select-none opacity-0 invisible font-bold">
          VIP {{ level.id }}
        </p>
      </div>
    </div>
  </div>
</template>

<style></style>
