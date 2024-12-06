<script setup lang="ts">
import { cn } from '@/lib/utils'
import { AccordionContent, type AccordionContentProps } from 'radix-vue'
import { computed, type HTMLAttributes } from 'vue'

const props = defineProps<AccordionContentProps & { class?: HTMLAttributes['class'] }>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})
</script>

<template>
  <AccordionContent
    v-bind="delegatedProps"
    class="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down rounded-bl-[6px] rounded-br-[6px] bg-[--bc-bgColor41] p-[3px]"
  >
    <div :class="cn('pt-0 bg-[--bc-bgColor] p-[20px] border-[--bc-searchBtnColor] border border-solid', props.class)">
      <slot />
    </div>
  </AccordionContent>
</template>
