<script lang="ts" setup>
const isLoading = defineProp<boolean>(false, true)
const hasMore = defineProp<boolean>(false, true)
</script>

<template>
  <div class="text-center py-4 text-sm text-gray-500">
    <div v-if="isLoading" class="flex justify-center items-center">
      <div class="spin " />
    </div>

    <p v-else-if="!hasMore">
      没有更多数据了
    </p>
  </div>
</template>

<style>

</style>
