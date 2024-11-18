<script setup lang="ts">
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'

import { TooltipArrow } from 'radix-vue'

const side = defineProp<'top' | 'right' | 'bottom' | 'left' | undefined>('top')
const sideOffset = defineProp<number>(0)
const arrowColor = defineProp<string>('currentColor')
</script>

<template>
  <TooltipProvider>
    <Tooltip>
      <TooltipTrigger as-child>
        <slot />
      </TooltipTrigger>
      <TooltipContent class="p-0 shadow-bc2" :side :side-offset>
        <slot name="content" />
        <TooltipArrow :width="11" :height="5" fill="currentColor" :style="{ fill: arrowColor }" />
      </TooltipContent>
    </Tooltip>
  </TooltipProvider>
</template>
