<script setup lang="ts">
const { isOpen } = useMenu()

const { isPageLoading } = useLoading()
const nuxtApp = useNuxtApp()

nuxtApp.hook('page:start', () => {
  isPageLoading.value = true
})

nuxtApp.hook('page:finish', () => {
  isPageLoading.value = false
})
</script>

<template>
  <div class="text-color bg-color">
    <LayoutHeader />
    <BaseSpin v-show="isPageLoading" is-page />
    <div class="relative bottom-0 top-[60px] overflow-auto flex flex-col h-[calc(100%-60px)]">
      <LayoutSlidebar />
      <main
        class="flex-1 pt-6 transition-all duration-300 ease-in-out" :class="{
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
