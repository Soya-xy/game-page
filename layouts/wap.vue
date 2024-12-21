<script setup lang="ts">
const route = useRoute()
const { isPageLoading } = useLoading()

const { isShowTop } = useMenu()

function scrollHandler() {
  if (document.documentElement.scrollTop > 50) {
    // document.documentElement.style.setProperty('--bc-appDownloadHeight', '0px')
    isShowTop.value = false
  }
  else {
    // document.documentElement.style.setProperty('--bc-appDownloadHeight', '46px')
    isShowTop.value = true
  }
}

onMounted(() => {
  window.addEventListener('scroll', scrollHandler)
})

onUnmounted(() => {
  window.removeEventListener('scroll', scrollHandler)
})
</script>

<template>
  <div class="text-color bg-[--bc-bgColor8]">
    <LayoutWapHeader v-if="!route.meta.noHeader" :is-show-top="isShowTop" />
    <div
      class="overflow-auto flex flex-col bg-color pb-[70px] h-full min-h-screen" :class="{
        'pt-[calc(48px+var(--bc-appDownloadHeight,0px)+var(--bc-appHeaderTabHeight,0px))]': !route.meta.noHeader,
      }"
    >
      <main>
        <BaseSpin v-show="isPageLoading" is-page />
        <slot />
      </main>
    </div>
    <LayoutWapTabbar v-if="!route.meta.noTabbar" />
  </div>
</template>
