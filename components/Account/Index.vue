<script lang="ts" setup>
const userStore = useUserStore()
const { token } = storeToRefs(userStore)
</script>

<template>
  <div class="min-h-[80vh]">
    <div class="px-[15px] text-[12px] container @container">
      <AccountLogin v-if="!token" />
    </div>
  </div>
</template>

<style>

</style>
