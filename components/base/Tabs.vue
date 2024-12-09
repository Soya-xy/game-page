<script lang="ts" setup>
const list = defineProp<string[]>()
const modelValue = defineModel<number>()
</script>

<template>
  <div
    class="border-b-[1px] border-solid border-[--bc-bgColor9] flex fixed md:static top-[48px] w-full z-[20] bg-color2 h-[46px]"
  >
    <div
      v-for="(item, index) in list" :key="index"
      class="h-full flex-1 md:flex-none md:w-[200px] flex items-center cursor-pointer justify-center text-xs "
      :class="index === modelValue ? 'bg-linear-color-4 text-white font-bold' : ''" @click="modelValue = index"
    >
      {{ item }}
    </div>
  </div>
</template>

<style>

</style>
