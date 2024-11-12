<script setup lang="ts">
import { cn } from '@/lib/utils'

const { isOpen, isTransition } = useMenu()
</script>

<template>
  <div class="h-[100svh] text-color bg-color">
    <LayoutHeader />
    <div class="relative bottom-0 top-[60px] overflow-hidden flex h-[calc(100svh-60px)]">
      <LayoutSlidebar />
      <div
        :class="cn(
          'h-full',
          (!isOpen && isTransition) && 'pl-2',
        )"
      >
        <slot />
      </div>
    </div>
  </div>
</template>
