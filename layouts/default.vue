<script setup lang="ts">
const { isOpen } = useMenu()

const { isPageLoading } = useLoading()

const route = useRoute()
</script>

<template>
  <div class="text-color bg-[--bc-bgColor8]">
    <LayoutHeader />
    <div class="relative bottom-0 top-[60px] overflow-auto flex flex-col bg-color h-[calc(100vh-60px)]">
      <LayoutSlidebar />
      <main
        class="flex-1 pt-6 transition-all duration-300 ease-in-out" :class="{
          'ml-[var(--bc-menuOpen)]': isOpen,
          'ml-[var(--bc-menuClose)]': !isOpen,
        }"
      >
        <BaseSpin v-show="isPageLoading" is-page />

        <slot />
        <LayoutFooter v-if="!route.meta.noFooter" />
      </main>
    </div>
  </div>
</template>
