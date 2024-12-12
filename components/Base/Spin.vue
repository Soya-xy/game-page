<script setup lang="ts">
const isPage = defineProp<boolean>(false)
</script>

<template>
  <div
    class="app-loading md:top-[60px] w-full h-full fixed z-[99] bg-color" :class="{
      'top-0 !z-[9999] left-0': !isPage,
    }"
  >
    <div class="spin" />
  </div>
</template>
