<script setup lang="ts">
const { isPageLoading } = useLoading()
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
