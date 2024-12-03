<script setup lang="ts">
// interface PageTransition {
//   name: 'app-slide-left' | 'app-slide-right'
//   mode: 'in-out' | 'out-in'
// }

const { isPageLoading } = useLoading()
// const route = useRoute()
const nuxtApp = useNuxtApp()

// const pageTransition = computed<PageTransition>(() => {
//   const transition = route.meta.pageTransition as Partial<PageTransition> | undefined

//   return {
//     name: transition?.name ?? 'app-slide-right',
//     mode: transition?.mode ?? 'in-out',
//   }
// })

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
    <div class="overflow-auto flex flex-col pb-[70px] bg-color pt-[48px] h-full min-h-screen">
      <main>
        <BaseSpin v-show="isPageLoading" is-page />
        <slot />
      </main>
    </div>
    <LayoutWapTabbar />
  </div>
</template>
