<script setup lang="ts">
import { DialogPortal } from 'radix-vue'
import {
  PageDialog as Dialog,
  PageDialogContent as DialogContent,
} from '~/components/PageDialog'

import { cn } from '~/lib/utils'

const useWap = defineProp<boolean>(true)
const contentClass = defineProp<string>()
const wapContentClass = defineProp<string>()
const wapHeaderClass = defineProp<string>()
const direction = defineProp<string>()
const overlayClass = defineProp<string>()
const closeClass = defineProp<string>()
const noWapHeader = defineProp<boolean>()
const noClose = defineProp<boolean>(false)
const show = defineModel<boolean>('show', {
  type: Boolean,
  required: true,
})

const enterAnimation = ref(0)
const { isPc } = useDevice()

watch(show, (val) => {
  if (val) {
    enterAnimation.value = 1
  }
  else {
    enterAnimation.value = 2
    setTimeout(() => {
      enterAnimation.value = 0
    }, 300)
  }
})

function closeModal() {
  enterAnimation.value = 2
  setTimeout(() => {
    show.value = false
    enterAnimation.value = 0
  }, 300)
}
</script>

<template>
  <Dialog v-if="(isPc || !useWap) && show" id="modalalaal" v-model:open="show" modal>
    <DialogPortal>
      <DialogContent
        disable-outside-pointer-events :class="cn(
          'fixed left-1/2 top-1/2 z-[500] flex flex-col min-w-[500px]  max-h-[80vh] -translate-x-1/2 -translate-y-1/2 gap-4 border sm:rounded-lg shadow-lg bg-[--bc-bgColor8]',
          enterAnimation === 0 && 'DialogContentClosed',
          enterAnimation === 1 && 'DialogContentOpen',
          enterAnimation === 2 && 'DialogContentClosed',
          contentClass,
        )" :overlay-class :close-class :no-close @close="closeModal"
      >
        <DialogTitle v-if="$slots.title">
          <slot name="title" />
        </DialogTitle>
        <slot />
      </DialogContent>
    </DialogPortal>
  </Dialog>

  <BaseDrawer
    v-else-if="useWap" v-model:open="show" :direction :content-class="wapContentClass"
    :header-class="wapHeaderClass" :overlay-class :no-header="noWapHeader"
  >
    <template #title>
      <slot name="title" />
    </template>
    <slot />
  </BaseDrawer>
</template>
