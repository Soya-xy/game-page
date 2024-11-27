<script setup lang="ts">
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
    <LayoutWapHeader />
    <div class="overflow-auto flex flex-col pb-[70px] pt-[48px] h-full">
      <main>
        <BaseSpin v-show="isPageLoading" is-page />
        <slot />
      </main>
    </div>
    <LayoutWapTabbar />
  </div>
</template>
