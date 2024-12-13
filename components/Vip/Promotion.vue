<script lang="ts" setup>

</script>

<template>
  <div class="md:mb-[40px] mb-[25px] w-full bg-[--bc-color-3] md:bg-transparent p-[15px]">
    <h3 class="md:text-[20px] text-[16px] md:px-[20px] font-bold text-white md:mb-[20px] mb-[10px]">
      More
    </h3>
    <div class="md:p-[20px] bg-[--bc-color-3] border-radius-1">
      <p class="mb-[10px] md:text-[14px] text-[12px] text-color">
        Please see our promotions for more details.
      </p>
      <button
        class="bg-active text-font w-[max-content] px-[25px] text-[12px] font-bold h-[40px] border-radius-0 min-w-[130px]"
        @click="routerPush('/promotion')"
      >
        Promotions
      </button>
    </div>
  </div>
</template>

<style></style>
