<script setup lang="ts">
const { isOpen } = useMenu()
</script>

<template>
  <div class="h-[100svh] text-color bg-color">
    <LayoutHeader />
    <div class="relative bottom-0 top-[60px] overflow-hidden flex h-[calc(100svh-60px)]">
      <LayoutSlidebar />
      <main
        class="flex-1 p-6 transition-all duration-300 ease-in-out"
        :class="{
          'ml-[var(--bc-menuOpen)]': isOpen,
          'ml-[var(--bc-menuClose)]': !isOpen,
        }"
      >
        <slot />
      </main>
    </div>
  </div>
</template>
