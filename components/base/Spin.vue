<script setup lang="ts">
import { cn } from '@/lib/utils'

const isPage = defineProp<boolean>(false)
const { isPc } = useDevice()
</script>

<template>
  <ClientOnly>
    <div
      class="app-loading" :class="
        cn(
          !isPage && 'top-0 !z-[9999] left-0',
          isPc && 'top-[60px]',
        )"
    >
      <div class="spin" />
    </div>
  </ClientOnly>
</template>

<style scoped>
.app-loading {
  position: fixed;
  z-index: 99;
  background-color: var(--bc-bgColor);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 100%;
  height: 100%;
}

.spin {
  width: 25px;
  height: 25px;
  border-radius: 50%;
  border: 4px solid var(--bc-activeColor);
  border-top-color: transparent;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
</style>
