<script lang="ts" setup>
import { cn } from '@/lib/utils'

const open = defineModel<boolean>()
const contentClass = defineProp<string>()

const noClose = defineProp<boolean>(false)
</script>

<template>
  <Dialog v-model:open="open" modal>
    <DialogContent
      disable-outside-pointer-events :class="cn(
        'fixed left-1/2 top-1/2 z-[500] flex flex-col max-h-[80vh] -translate-x-1/2 -translate-y-1/2 gap-4 border shadow-lg bg-[--bc-bgColor8] w-[calc(100vw-16vw)] rounded-[10px]',
        contentClass,
      )"
      :no-close
    >
      <slot />
    </DialogContent>
  </Dialog>
</template>

<style></style>
