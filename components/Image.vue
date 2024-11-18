<script setup lang="ts">
defineProps<{
  src: string
}>()

const img = useImage()
</script>

<template>
  <NuxtImg
    :src="src" class="max-w-full h-full" loading="lazy"
    :placeholder="img(src, { format: 'png', blur: 20, quality: 70 })" v-bind="$attrs"
  />
</template>
