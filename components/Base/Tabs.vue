<script lang="ts" setup>
const list = defineProp<string[] | { title: string, icon?: string, badge?: number }[]>()
const modelValue = defineModel<number>()
</script>

<template>
  <div
    class="border-b-[1px] border-solid border-[--bc-bgColor9] flex fixed md:static top-[48px] w-full z-[20] bg-color2 md:h-[46px] h-[40px]"
  >
    <div
      v-for="(item, index) in list" :key="index"
      class="h-full flex-1 md:flex-none md:w-[200px] flex items-center cursor-pointer justify-center text-xs relative"
      :class="index === modelValue ? 'bg-linear-color-4 text-white font-bold' : ''" @click="modelValue = index"
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
