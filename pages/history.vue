<script lang="ts" setup>
definePageMeta({
  pageIndex: PageIndexEnum.bets,
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
  <Bets />
</template>

<style>

</style>
