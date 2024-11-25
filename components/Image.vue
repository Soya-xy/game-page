<script setup lang="ts">
defineProps<{
  src: string
}>()

const img = useImage()
</script>

<template>
  <NuxtImg
    :src="src" class="max-w-full h-full" loading="lazy"
    :placeholder="img(src, { h: 10, f: 'png', blur: 2, q: 50 })" v-bind="$attrs"
  />
</template>
