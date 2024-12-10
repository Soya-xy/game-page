<script setup lang="ts">
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
} from '@/components/ui/drawer'
import { cn } from '@/lib/utils'

const open = defineModel<boolean>('open', {
  type: Boolean,
  required: true,
})

const haveClose = defineProp<boolean>(true)
const noHeader = defineProp<boolean>()
const contentClass = defineProp<string>('')
const overlayClass = defineProp<string>('')
const headerClass = defineProp<string>('')
const close = defineEmit()
</script>

<template>
  <Drawer v-model:open="open" should-scale-background>
    <DrawerContent :class="cn('bg-color p-[12px]', contentClass)" :overlay-class="overlayClass">
      <DrawerHeader v-if="!noHeader" class="flex justify-between items-center bg-[--bc-color-3] bg-color-pop-16" :class="headerClass">
        <DrawerTitle>
          <slot name="title" />
        </DrawerTitle>
        <DrawerClose v-if="haveClose" @click="close">
          <button
            class="flex justify-center items-center shrink-0 w-[28px] h-[28px] rounded-[6px] bg-button text-white"
          >
            <i class="inline-block  icon-new-clean-1 text-[8px] font-bold" />
          </button>
        </DrawerClose>
      </DrawerHeader>
      <slot />
    </DrawerContent>
  </Drawer>
</template>
