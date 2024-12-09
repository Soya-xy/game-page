<script setup lang="ts">
import { useIntersectionObserver } from '@vueuse/core'
import { ref } from 'vue'

const target = ref(null)
const isVisible = ref(false)
const offset = defineProp<number>(0)

const { pause } = useIntersectionObserver(
  target,
  ([entries]: IntersectionObserverEntry[]) => {
    if (entries?.isIntersecting) {
      isVisible.value = true
      pause()
    }
  },
  {
    rootMargin: `${offset.value || 0}px`,
  },
)
</script>

<template>
  <div ref="target">
    <slot v-if="isVisible" />
    <template v-else>
      <slot name="placeholder" />
    </template>
  </div>
</template>
