<script lang="ts" setup>
const search = ref('')
</script>

<template>
  <div class=" pb-[16px] flex justify-between items-center">
    <div class="text-white font-bold text-[20px]">
      Bonus
    </div>
    <div class="w-[600px] max-w-[100%]">
      <div
        class=" w-full border-radius-0 flex items-center shrink-0 border-[--bc-bgColor5] border border-solid relative h-[46px]  text-[14px] px-[16px] gap-[8px]  !pr-0 bg-[--bc-searchColor] hover:border-[--bc-activeColor]"
      >
        <div class="h-full flex items-center flex-1 shrink-0 relative overflow-hidden">
          <input
            v-model="search"
            class="h-full flex-1 min-w-[60px] text-white placeholder:font-normal bg-transparent"
            placeholder="Enter bonus code"
          >
        </div>
        <button v-if="search.length > 0" class="text-[12px] flex items-center justify-center text-white" @click="() => search = ''">
          <i class="inline-block h-[max-content] w-[max-content] icon-new-clean-1 cursor-pointer" />
        </button>
        <button
          class="bg-[--bc-searchBtnColor] text-[12px] text-white font-bold h-full px-[10px] border-radius-0 shrink-0"
        >
          <i class="inline-block h-[max-content] w-[max-content] icon-new-bonus-gift cursor-pointer mr-[4px]" />
          Redeem Bonus Code
        </button>
      </div>
    </div>
  </div>
</template>
