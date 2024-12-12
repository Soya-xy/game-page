<script setup lang="ts">
const { isOpen } = useMenu()

const { isPageLoading } = useLoading()
const main = ref<HTMLElement>()
const route = useRoute()
const isShowTop = ref(false)
const showRight = ref<boolean>(false)

function scrollHandler() {
  if (main.value!.scrollTop > 300) {
    isShowTop.value = true
  }
  else {
    isShowTop.value = false
  }
}

onMounted(() => {
  main.value?.addEventListener('wheel', scrollHandler, { passive: true })
})

onUnmounted(() => {
  main.value?.removeEventListener('wheel', scrollHandler)
})

function scrollToTop() {
  main.value?.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
}
const type = ref('')
function open(e: string) {
  type.value = e
  showRight.value = true
}
</script>

<template>
  <div class="text-color bg-[--bc-bgColor8]">
    <LayoutHeader @open="open" />
    <div ref="main" class="relative bottom-0 top-[60px] overflow-auto flex flex-col bg-color h-[calc(100vh-60px)]">
      <LayoutSlidebar />
      <main
        class="flex-1 pt-6 transition-all duration-300 ease-in-out " :class="{
          'ml-[var(--bc-menuOpen)]': isOpen,
          'ml-[var(--bc-menuClose)]': !isOpen,
        }"
      >
        <BaseSpin v-show="isPageLoading" is-page />
        <div class="flex overflow-x-hidden">
          <div class="flex-1 overflow-x-hidden">
            <div class="flex flex-col min-w-[640px]">
              <slot />
            </div>
          </div>
          <LazyRight v-model:show="showRight" :type />
        </div>
        <LayoutFooter v-if="route.meta.haveFooter" />
      </main>
    </div>
    <Top :is-show="isShowTop" @top="scrollToTop" />
  </div>
</template>
