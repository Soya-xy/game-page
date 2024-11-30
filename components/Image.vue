<script setup lang="ts">
const src = defineProp<string>('')
const lazy = defineProp<boolean>(true)

const img = useImage()
const isError = ref(false)
</script>

<template>
  <NuxtImg
    v-if="!isError"
    :src="src" class="max-w-full h-full" :loading="lazy ? 'lazy' : 'eager'"
    :placeholder="img(src, { h: 10, f: 'png', blur: 2, q: 50 })" v-bind="$attrs"
    @error="isError = true"
  />
  <NuxtImg
    v-else src="/images/logo.avif" class="max-w-full h-full"
    loading="lazy"
    :placeholder="img('/images/logo.avif', { h: 10, f: 'png', blur: 2, q: 50 })"
  />
</template>
