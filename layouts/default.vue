<script setup lang="ts">
const { isOpen } = useMenu()
</script>

<template>
  <div class="h-[100svh] text-color bg-color">
    <LayoutHeader />
    <div class="relative bottom-0 top-[60px] overflow-auto flex flex-col h-[calc(100svh-60px)]">
      <LayoutSlidebar />
      <main
        class="flex-1 py-6 transition-all duration-300 ease-in-out"
        :class="{
          'ml-[var(--bc-menuOpen)]': isOpen,
          'ml-[var(--bc-menuClose)]': !isOpen,
        }"
      >
        <slot />
        <LayoutFooter />
      </main>
    </div>
  </div>
</template>
