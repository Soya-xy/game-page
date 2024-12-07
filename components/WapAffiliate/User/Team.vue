<script lang="ts" setup>
const current = ref(0)
const currentList = ref(['Today team data', 'Total team data'])
</script>

<template>
  <div class="mt-[15px] bg-color2 border-radius-0 relative">
    <BaseTabs v-model="current" :list="currentList" class="!static" />

    <div class="flex flex-wrap gap-y-[10px] items-center py-[15px]">
      <div class="w-[50%] shrink-0 text-center">
        <div class="text-color-text-2 text-[10px] mb-[2px]">
          Sign Up
        </div>
        <div class="text-color-text-1 font-semibold text-[12px]">
          0
        </div>
      </div>
      <div class="w-[50%] shrink-0 text-center">
        <div class="text-color-text-2 text-[10px] mb-[2px]">
          First Deposit
        </div>
        <div class="text-color-text-1 font-semibold text-[12px]">
          0
        </div>
      </div>
      <div class="w-[50%] shrink-0 text-center">
        <div class="text-color-text-2 text-[10px] mb-[2px]">
          Valid bet
        </div>
        <div class="text-color-text-1 font-semibold text-[12px]">
          <span class="whitespace-pre">R$0.00</span>
        </div>
      </div>
      <div class="w-[50%] shrink-0 text-center invisible select-none pointer-events-none opacity-0">
        <div class="text-color-text-2 text-[10px] mb-[2px]">
          Valid bet
        </div>
        <div class="text-color-text-1 font-semibold text-[12px]">
          <span class="whitespace-pre">R$0.00</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>
