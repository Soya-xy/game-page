<script lang="ts" setup>
import { cn } from '@/lib/utils'

const activeIndex = ref(0)
const list = [
  {
    name: '推荐',
    icon: 'icon-n-recommend',
    path: '/gametag/hot',
  },
  {
    name: '最近',
    icon: 'icon-n-recent',
    path: '/collections?type=0',
  },
  {
    name: '收藏',
    icon: 'icon-n-favorites',
    path: '/collections?type=1',
  },
]

function changeTab(path: string, idx: number) {
  activeIndex.value = idx
  routerPush(path)
}
</script>

<template>
  <div class="w-full grid grid-cols-3 items-center gap-x-[5px]">
    <div
      v-for="(item, index) in list" :key="item.path"
      class="h-[40px] text-[14px] font-semibold bg-tab cursor-pointer rounded-[10px] overflow-hidden"
      @click="changeTab(item.path, index)"
    >
      <div class="h-full flex items-center relative  justify-center" :class="{ 'bg-linear-3': activeIndex === index }">
        <div class="w-[40px] h-[40px] flex items-center justify-center">
          <i
            class="inline-block h-[max-content] w-[max-content] cursor-pointer text-[22px]"
            :class="cn(item.icon, { 'text-white': activeIndex === index })"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>
