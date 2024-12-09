<script lang="ts" setup>
const current = ref(0)
const currentList = ref([{
  title: 'General Bonus',
  icon: 'icon-new-bonus',
}, {
  title: 'VIP Bonus',
  icon: 'icon-new-bonus-vip',
}, {
  title: 'Special Bonus',
  icon: 'icon-new-bonus-special ',
}])
</script>

<template>
  <BaseTabs v-model="current" :list="currentList" class="!static rounded-b-[5px] [&>div:first-child]:rounded-bl-[5px] [&>div:last-child]:rounded-br-[5px]" />
</template>

<style>

</style>
