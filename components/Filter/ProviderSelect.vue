<script setup lang="ts">
import type { Option } from '~/api/type'

import { Button } from '@/components/ui/button'
import {
  Command,
  CommandGroup,
  CommandItem,
  CommandList,
} from '@/components/ui/command'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'

const option = defineProp<Option[]>(undefined, true)

const open = ref(false)
const change = defineEmit<any>()
const checkedList = ref<string[]>([])
const { isPc } = useDevice()
function changeHandler(e: string) {
  if (checkedList.value.includes(e)) {
    checkedList.value = checkedList.value.filter(item => item !== e)
  }
  else {
    checkedList.value.push(e)
  }
  change(checkedList.value)
}

const triggerRef = ref()
const contentWidth = ref(200)

watch(open, (v) => {
  if (v) {
    contentWidth.value = document.querySelector('.triggerRef')?.clientWidth || 200
  }
})
</script>

<template>
  <Popover v-model:open="open">
    <PopoverTrigger as-child class="max-w-[325px] w-full h-10 bg-color2 border-[--bc-transparentColor] triggerRef  hover:bg-color6">
      <Button
        ref="triggerRef"
        variant="outline"
        role="combobox"
        :aria-expanded="open"
      >
        <div class="flex items-center justify-between w-full">
          <slot name="placeholder" />
          <div class="bg-[--bc-bgColor7] w-[22px] h-[22px] rounded-[4px] flex items-center justify-center">
            <i
              class="inline-block h-[max-content] w-[max-content] icon-n-back cursor-pointer text-[8px]"
              :class="{
                'rotate-[90deg]': open,
                '-rotate-[90deg]': !open,
              }"
            />
          </div>
        </div>
      </Button>
    </PopoverTrigger>
    <PopoverContent v-if="isPc" class="bg-color2 p-0 border-[--bc-transparentColor] hidden md:block" :style="{ width: `${contentWidth}px` }">
      <Command>
        <CommandList
          class="bg-color2 border-[--bc-bgColor7] gap-[2px]"
        >
          <CommandGroup>
            <CommandItem
              v-for="item in option"
              :key="item.value"
              :value="item"
              class="data-[highlighted]:bg-color6"
              @select="() => {
                changeHandler(item.value)
                open = false
              }"
            >
              <Checkbox
                class="bg-color2 border-[--bc-bgColor7]"
                :class="{
                  'bg-linear-color-1': checkedList.includes(item.value),
                }"
                :checked="checkedList.includes(item.value)"
              />
              <Image :src="item.picUrl" :alt="item.label" class="ml-[20px] transition-all duration-200 !h-[28px]" />
              <div class="flex-1 flex justify-end items-center">
                {{ item.count }} Games
              </div>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>
    </PopoverContent>
  </Popover>
  <BaseDrawer v-if="!isPc" v-model:open="open" content-class="z-[555]" overlay-class="z-[550]" header-class="bg-transparent">
    <template #title>
      Select
    </template>
    <div class="flex flex-col gap-y-[2px] max-h-[350px] overflow-y-auto overscroll-contain">
      <div
        v-for="item in option"
        :key="item.value"
        :value="item"
        class="flex items-center justify-between py-[10px] px-[10px] cursor-pointer"
        @click="() => {
          changeHandler(item.value)
          open = false
        }"
      >
        <Checkbox
          class="bg-color2 border-[--bc-bgColor7]"
          :class="{
            'bg-linear-color-1': checkedList.includes(item.value),
          }"
          :checked="checkedList.includes(item.value)"
        />
        <Image :src="item.picUrl" :alt="item.label" class="ml-[20px] transition-all duration-200 !h-[28px]" />
        <div class="flex-1 flex justify-end items-center">
          {{ item.count }} Games
        </div>
      </div>
    </div>
  </BaseDrawer>
</template>
