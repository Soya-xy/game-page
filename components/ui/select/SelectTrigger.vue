<script setup lang="ts">
import { cn } from '@/lib/utils'
import { ChevronDown } from 'lucide-vue-next'
import { SelectIcon, SelectTrigger, type SelectTriggerProps, useForwardProps } from 'radix-vue'
import { computed, type HTMLAttributes } from 'vue'

const props = defineProps<SelectTriggerProps & { class?: HTMLAttributes['class'] }>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <SelectTrigger
    v-bind="forwardedProps"
    :class="cn(
      'flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background data-[placeholder]:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:truncate text-start group',
      props.class,
    )"
  >
    <slot />
    <SelectIcon  class="bg-[--bc-bgColor7] w-[22px] h-[22px] rounded-[4px] flex items-center justify-center">
      <i
        class="inline-block h-[max-content] -rotate-90 w-[max-content] icon-n-back cursor-pointer text-[8px]  group-data-[state=open]:rotate-90"
      />
    </SelectIcon>
    
  </SelectTrigger>
</template>
