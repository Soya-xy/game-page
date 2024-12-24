<script lang="ts" setup>
const current = ref(0)
const currentList = ref(['Today team data', 'Total team data'])
const affiliate = useAffiliate()
const { summary } = storeToRefs(affiliate)
</script>

<template>
  <div class="mt-[15px] bg-color2 border-radius-0 relative">
    <BaseTabs v-model="current" :list="currentList" class="!static" item-class="w-[50%]" />

    <div class="flex flex-wrap gap-y-[10px] items-center py-[15px]">
      <div class="w-[50%] shrink-0 text-center">
        <div class="text-[--bc-color20] text-[10px] mb-[2px]">
          Sign Up
        </div>
        <div class="text-color font-semibold text-[12px]">
          {{ current === 0 ? summary?.todayBrokerageUserCount : summary?.totalBrokerageUserCount }}
        </div>
      </div>
      <div class="w-[50%] shrink-0 text-center">
        <div class="text-[--bc-color20] text-[10px] mb-[2px]">
          First Deposit
        </div>
        <div class="text-color font-semibold text-[12px]">
          {{ current === 0 ? summary?.todayBrokerageUserCount : summary?.totalBrokerageUserCount }}
        </div>
      </div>
      <div class="w-[50%] shrink-0 text-center">
        <div class="text-[--bc-color20] text-[10px] mb-[2px]">
          Valid bet
        </div>
        <div class="text-color font-semibold text-[12px]">
          <span class="whitespace-pre">{{ toCurrency(current === 0 ? summary?.todayBrokerageUserCount : summary?.totalBrokerageUserCount) }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>
