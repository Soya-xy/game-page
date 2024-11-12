<script lang="ts" setup>
import { useMenu } from '@/composables/menu'
import { cn } from '@/lib/utils'

const { toggleMenu, isOpen } = useMenu()
</script>

<template>
  <header
    :class="cn(
      'h-[60px] fixed top-0 left-0 right-0 z-[100]',
      'bg-header flex-item-center shdow-[0_4px_20px_#00000060]',
    )
    "
  >
    <BaseToggleMenu :class="isOpen ? 'rotate-180' : ''" @click="toggleMenu" />
  </header>
</template>

<style></style>
