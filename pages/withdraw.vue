<script lang="ts" setup>
definePageMeta({
  pageIndex: PageIndexEnum.withdraw,
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
  <BaseWithdrawPage />
</template>

<style>

</style>
