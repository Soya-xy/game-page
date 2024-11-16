<template>
  <div class="app-loading">
    <div class="spin" />
  </div>
</template>

<style scoped>
.app-loading {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10000000;
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
