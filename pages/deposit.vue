<script lang="ts" setup>
definePageMeta({
  pageIndex: PageIndexEnum.deposit,
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
  <BaseDepositPage />
</template>

<style>

</style>
