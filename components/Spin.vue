<script setup lang="ts">
const loading = defineProp<boolean>(false)
</script>

<template>
  <div :class="{ 'app-loading': loading }" class="w-full">
    <div v-if="loading" class="spin" />
    <slot v-else />
  </div>
</template>
