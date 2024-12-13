<script lang="ts" setup>
definePageMeta({
  pageIndex: PageIndexEnum.vip,
  noHeader: true,
})
const { token } = useUserStore()
</script>

<template>
  <div class="container @container flex flex-col gap-y-[12px] relative z-[20] sm:px-[24px] !px-0 pb-[24px]">
    <Vip v-if="token" />
    <VipNoLogin v-else />
  </div>
</template>

<style>

</style>
