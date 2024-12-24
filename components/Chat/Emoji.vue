<script lang="ts" setup>
const select = defineEmit<[value: string]>()
</script>

<template>
  <div class="absolute bg-color2 bottom-[100%] left-[10px] w-[280px] rounded-t-[6px]">
    <div class="relative overflow-hidden h-[165px] flex p-[15px] pb-[0] w-full">
      <ul
        class="grid grid-cols-8 w-full overflow-y-auto gap-[6px] overscroll-contain touch-pan-y overflow-scrolling-touch"
      >
        <li v-for="item in emojiList" :key="item" class="flex items-center justify-center text-[24px] cursor-pointer" @click="select(item)">
          {{ item }}
        </li>
      </ul>
    </div>
  </div>
</template>

<style></style>
