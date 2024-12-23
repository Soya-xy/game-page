<script lang="ts" setup>
definePageMeta({
  pageIndex: PageIndexEnum.transaction,
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
  <Transaction />
</template>

<style>

</style>
