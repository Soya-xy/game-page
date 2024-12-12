<script setup lang="ts">
const loading = defineProp()
</script>

<template>
  <button>
    <slot v-if="!loading" />
    <div v-else class="w-full h-full flex items-center justify-center">
      <div class="dot-collision dot-collision-0" />
    </div>
  </button>
</template>
