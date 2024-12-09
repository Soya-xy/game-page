<script setup lang="ts">
import { cn } from '@/lib/utils'
import { X } from 'lucide-vue-next'
import {
  DialogContent,
  type DialogContentProps,
  DialogOverlay,
  useForwardPropsEmits,
  VisuallyHidden,
} from 'radix-vue'
import { computed, type HTMLAttributes } from 'vue'

const props = defineProps<DialogContentProps & {
  class?: HTMLAttributes['class']
  clickOutClose?: boolean
  noClose?: boolean
  overlayClass?: HTMLAttributes['class']
}>()
const emits = defineEmits(['close'])
const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwarded = useForwardPropsEmits(delegatedProps)
</script>

<template>
  <DialogOverlay
    class="fixed inset-0 z-[500] bg-black/60 backdrop-blur
    data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0
    "
    :class="props.overlayClass"
  />
  <DialogContent
    :aria-describedby="undefined"
    v-bind="forwarded" :class="cn(
      'fixed left-1/2 top-1/2 z-[500] grid  -translate-x-1/2 -translate-y-1/2 gap-4 border sm:rounded-lg bg-background shadow-lg',
      props.class,
    )"
    @interact-outside="(e: Event) => {
      if (!props.clickOutClose) {
        e.preventDefault()
      }
    }"
  >
    <VisuallyHidden as-child>
      <DialogTitle />
    </VisuallyHidden>
    <slot />

    <div
      v-if="!props.noClose"
      class="absolute right-[20px] top-[20px] rounded-sm opacity-70 hover:opacity-100 focus:outline-none cursor-pointer hover:-rotate-[180deg] transition-all duration-300"
      @click="emits('close')"
    >
      <X class="w-6 h-6" />
      <span class="sr-only">Close</span>
    </div>
  </DialogContent>
</template>
