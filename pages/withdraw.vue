<script lang="ts" setup>
definePageMeta({
  pageIndex: PageIndexEnum.withdraw,
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
