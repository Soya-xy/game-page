<script lang="ts" setup>
const params = useRoute().params as { id: string }
const id = params.id
console.log('🚀 ~ id:', id)
</script>

<template>
  <div class="container @container flex flex-col gap-y-[12px] mt-[12px] relative z-[20] sm:px-[24px]">
    <BaseBread type="Slots" title="Game" />
  </div>
</template>

<style>

</style>
