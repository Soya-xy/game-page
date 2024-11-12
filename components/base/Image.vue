<script setup lang="ts">
defineProps<{
  src: string
}>()
</script>

<template>
  <NuxtImg :src v-bind="$attrs" />
</template>
