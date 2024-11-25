<script setup lang="ts">
</script>

<template>
  <div class="text-color bg-color">
    <LayoutWapHeader />
    <div class="overflow-auto flex flex-col pb-[70px]">
      <main>
        <slot />
      </main>
    </div>
    <LayoutWapTabbar />
  </div>
</template>
