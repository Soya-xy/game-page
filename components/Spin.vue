<script setup lang="ts">
const loading = defineProp<boolean>(false)
</script>

<template>
  <div :class="{ 'app-loading': loading }" class="w-full">
    <div v-if="loading" class="spin" />
    <slot v-else />
  </div>
</template>

<style scoped>
.app-loading {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 20px;
}

.spin {
  width: 25px;
  height: 25px;
  border-radius: 50%;
  border: 4px solid var(--bc-activeColor);
  border-top-color: transparent;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
</style>
