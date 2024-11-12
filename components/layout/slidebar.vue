<script lang="ts" setup>
import { cn } from '@/lib/utils'

const { menuOpen, isOpen, isTransition } = useMenu()
</script>

<template>
  <transition
    name="slide-fade" mode="out-in"
    @before-leave="isTransition = true"
  >
    <div
      v-if="isOpen" :class="cn(
        'transition-all h-full bg-color shadow-bc',
        'w-[var(--bc-menuOpen)]',
      )"
    >
      <div>
        123
      </div>
    </div>
  </transition>
  <transition
    name="fade-up" mode="in-out"
    @before-enter="isTransition = false"
  >
    <div
      v-if="menuOpen" :class="cn(
        'h-full bg-color shadow-bc ',
      )"
    >
      <div>
        321444
      </div>
    </div>
  </transition>
</template>

<style scoped>
.slide-fade-enter,
.slide-fade-leave-to {
  opacity: 0;
  transform: translateX(-280px);
}

.fade-up-enter-active,
.fade-up-leave-active {
  transition: all 0.3s;
}

.fade-up-enter-from,
.fade-up-leave-to {
  opacity: 0;
  transform: translateY(20px);
}
</style>
