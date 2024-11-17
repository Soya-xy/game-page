<script setup lang="ts">
defineProps<{
  src: string
}>()
</script>

<template>
  <NuxtImg :src class="max-w-full h-full" v-bind="$attrs" />
</template>
