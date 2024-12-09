<script setup lang="ts">
import type { SliderRootEmits, SliderRootProps } from 'radix-vue'
import { cn } from '@/lib/utils'
import { SliderRange, SliderRoot, SliderThumb, SliderTrack, useForwardPropsEmits } from 'radix-vue'
import { computed, type HTMLAttributes } from 'vue'

const props = defineProps<SliderRootProps & { class?: HTMLAttributes['class'] }>()
const emits = defineEmits<SliderRootEmits>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwarded = useForwardPropsEmits(delegatedProps, emits)
</script>

<template>
  <SliderRoot
    :class="cn(
      'relative flex w-full touch-none select-none items-center data-[orientation=vertical]:flex-col data-[orientation=vertical]:w-2 data-[orientation=vertical]:h-full',
      props.class,
    )"
    v-bind="forwarded"
  >
    <SliderTrack class="relative h-2 w-full data-[orientation=vertical]:w-2 grow overflow-hidden rounded-full bg-[--bc-bgColor9]">
      <SliderRange class="absolute h-full data-[orientation=vertical]:w-full bg-[--bc-bgColor9]" />
    </SliderTrack>
    <SliderThumb
      v-for="(_, key) in modelValue"
      :key="key"
      class="block  rounded-full border-2 border-primary bg-[--bc-color20] ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
    >
      <div class="w-[20px] h-[10px] bg-[--bc-color20]" />
      <div class="w-[15px] h-[15px] bg-[--bc-color20] mx-auto transform rotate-[40deg]" />
    </SliderThumb>
  </SliderRoot>
</template>
