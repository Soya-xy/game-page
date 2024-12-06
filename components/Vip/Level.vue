<script lang="ts" setup>
import type { VipLevel } from '~/api/vip'

const levelList = inject<VipLevel[]>('levelList')
const modelValue = defineModel<number>('modelValue', {
  required: true,
})
</script>

<template>
  <div class="overflow-hidden bg-color2 pt-[20px] w-full">
    <div class="grid w-full grid-cols-[repeat(15,1fr)]">
      <div
        v-for="level in levelList" :key="level.id"
        class="relative h-[30px] text-white leading-[30px] cursor-pointer whitespace-nowrap z-[2] rounded-[15px] flex justify-center"
        :class="{
          'bg-[--bc-activeColor] vip-level-item !text-font': modelValue === level.id,
        }"
        @click="modelValue = level.id"
      >
        <div class="min-w-[50px] relative rounded-[15px] h-full">
          <p class="whitespace-nowrap w-full text-center font-bold leading-[30px]">
            VIP {{ level.id }}
          </p>
        </div>
      </div>
    </div>
    <div class="bg-[--bc-color20] grid h-[10px] mt-[6px] w-full  grid-cols-[repeat(15,1fr)]">
      <div
        v-for="level in levelList" :key="level.id"
        class="relative h-[10px] min-w-[50px] shrink-0 text-white leading-[30px] bg-[--bc-color20] whitespace-nowrap px-[10px] z-[2] vip-level-item-tag text-center"
      >
        <p class="whitespace-nowrap w-full text-center select-none opacity-0 invisible font-bold">
          VIP {{ level.id }}
        </p>
      </div>
    </div>
  </div>
</template>

<style>

</style>
