<script lang="ts" setup>
import { onClickOutside } from '@vueuse/core'

const contentHeight = defineProp(300)
const offset = defineProp(45)
const options = defineProp<any[]>([])
const open = ref(false)
const contentRef = ref<HTMLElement | null>(null)
const value = defineModel<string | number>('value')

const list = computed(() => ([
  {
    label: 'All rewards',
    value: '',
  },
  ...options.value,
]))
onClickOutside(contentRef, () => {
  open.value = false
})
</script>

<template>
  <div class="text-[14px] flex items-center">
    <div
      class="border-radius-0 relative overflow-visible text-[12px] text-color shrink-0  h-[40px] bg-[--bc-bgColor9] z-10 min-w-[130px]"
    >
      <div
        class="h-full flex items-center justify-between px-[12px] cursor-pointer"
        @click="open = !open"
      >
        <div class="flex items-center text-color font-medium mr-2">
          <span class="flex items-center">{{ options.find(item => item.value === value)?.label || 'All rewards' }}</span>
        </div>
        <div class="flex items-center">
          <button
            class="text-[12px] transition-all duration-200 flex items-center text-color"
            :class="{ 'rotate-[90deg] text-white font-bold': open, '-rotate-[90deg]': !open }"
          >
            <i class="inline-block h-[max-content] w-[max-content] icon-new-back cursor-pointer" />
          </button>
        </div>
      </div>
      <ul
        ref="contentRef"
        class="bg-color2 border-radius-0 absolute z-[2] transition-[height] overflow-y-auto box-shadow-02 !w-[200px] right-0 bottom-[unset]
        " :style="{ height: `${open ? contentHeight : '0'}px`, top: `${offset}px` }"
      >
        <li
          v-for="item in list"
          :key="item.value"
          class="flex items-center justify-between px-[12px] relative cursor-pointer shrink-0  bg-[--bc-searchBtnColor] hover:text-white font-bold min-h-[40px] h-[40px] hover:bg-[--bc-bgColor9]"
          @click="() => {
            value = item.value
            open = false
          }"
        >
          <div class=" flex items-center">
            <span class=" flex items-center">{{ item.label }}</span>
          </div><button class="absolute inset-y-0 right-[12px] flex items-center" />
        </li>
      </ul>
    </div>
  </div>
</template>

<style></style>
