<script lang="ts" setup>
definePageMeta({
  pageIndex: PageIndexEnum.setting,
  noHeader: true,
})
const { isPc } = useDevice()
watch(isPc, (newVal) => {
  if (newVal) {
    routerPush('/')
  }
}, {
  immediate: true,
})
</script>

<template>
  <Setting />
</template>

<style>

</style>
