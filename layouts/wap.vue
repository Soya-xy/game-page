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
  <div class="text-color bg-[--bc-bgColor8]">
    <LayoutWapHeader />
    <div class="overflow-auto flex flex-col pb-[70px] bg-color pt-[48px] h-full">
      <main>
        <BaseSpin v-show="isPageLoading" is-page />
        <Transition name="page">
          <slot />
        </Transition>
      </main>
    </div>
    <LayoutWapTabbar />
  </div>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.3s ease-in-out;
}

.page-enter-from,
.page-leave-to {
  transform: translateX(100%);
}
</style>
