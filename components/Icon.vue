<script setup lang="ts">
withDefaults(defineProps<{
  icon: object
  filled?: boolean
  name?: string // Add optional prop name.
  fontControlled?: boolean
}>(), {
  filled: true,
  fontControlled: false,
})
</script>

<template>
  <Component
    :is="icon"
    :class="{
      'fill-current': filled,
      'h-[1em] w-[1em]': fontControlled,
    }"
  />
</template>
