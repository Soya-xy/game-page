<script lang="ts" setup>
const container = ref<HTMLDivElement>()
onMounted(() => {
  container.value?.addEventListener('wheel', (e) => {
    if (e.deltaY !== 0 && container.value) {
      e.preventDefault()
      container.value.scrollLeft += e.deltaY * 1
    }
  })
})
</script>

<template>
  <div ref="container" class="flex flex-1  flex-nowrap gap-[10px] overflow-x-auto">
    <slot />
  </div>
</template>

<style></style>
