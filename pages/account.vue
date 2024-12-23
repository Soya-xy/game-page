<script lang="ts" setup>
definePageMeta({
  pageIndex: PageIndexEnum.account,
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
  <Account />
</template>

<style>

</style>
