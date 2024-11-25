<script setup lang="ts">
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
} from '@/components/ui/drawer'

const open = defineModel<boolean>('open', {
  type: Boolean,
  required: true,
})

const title = defineProp('')
const haveClose = defineProp<boolean>(true)
</script>

<template>
  <Drawer v-model:open="open" should-scale-background>
    <DrawerContent class="bg-color">
      <DrawerHeader class="flex justify-between">
        <DrawerTitle>{{ title }}</DrawerTitle>
        <DrawerClose v-if="haveClose">
          <button
            class="flex justify-center items-center shrink-0 w-[28px] h-[28px] rounded-[6px] bg-button text-white"
          >
            <i class="inline-block  icon-new-clean-1 text-[8px] font-bold" />
          </button>
        </DrawerClose>
      </DrawerHeader>
      <div class="px-[12px]">
        <slot />
      </div>
    </DrawerContent>
  </Drawer>
</template>
