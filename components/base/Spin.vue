<script setup lang="ts">
const isPage = defineProp<boolean>(false)
</script>

<template>
  <div
    class="app-loading md:top-[60px]" :class="{
      'top-0 !z-[9999] left-0': !isPage,
    }"
  >
    <div class="spin" />
  </div>
</template>

<style scoped>
.app-loading {
  position: fixed;
  z-index: 99;
  background-color: var(--bc-bgColor);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 100%;
  height: 100%;
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
