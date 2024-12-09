<script setup lang="ts">
const route = useRoute()
const { isPageLoading } = useLoading()
</script>

<template>
  <div class="text-color bg-[--bc-bgColor8]">
    <LayoutWapHeader v-if="!route.meta.noHeader" />
    <div
      class="overflow-auto flex flex-col bg-color pb-[70px] h-full min-h-screen"
      :class="{
        'pt-[48px]': !route.meta.noHeader,
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
