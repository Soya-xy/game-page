<script setup lang="ts">
defineProps<{
  src: string
}>()
</script>

<template>
  <NuxtImg :src class="w-full h-full" v-bind="$attrs" />
</template>
