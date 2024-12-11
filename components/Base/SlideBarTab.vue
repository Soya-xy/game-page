<script lang="ts" setup>
</script>

<template>
  <div class="w-full grid grid-cols-3 items-center gap-x-[5px]">
    <div class="h-[40px] text-white text-[14px] font-semibold bg-tab cursor-pointer rounded-[10px] overflow-hidden" @click="routerPush('/gametag/hot')">
      <div class="h-full flex items-center relative  justify-center bg-linear-3">
        <div class="w-[40px] h-[40px] flex items-center justify-center">
          <i
            class="inline-block h-[max-content] w-[max-content] icon-n-recommend cursor-pointer text-[22px] text-white "
          />
        </div>
      </div>
    </div>
    <div
      class="h-[40px] text-white text-[14px] font-semibold bg-tab cursor-pointer rounded-[10px] overflow-hidden opacity-40 pointer-events-none"
    >
      <div class="h-full flex items-center relative  justify-center">
        <div class="w-[40px] h-[40px] flex items-center justify-center">
          <i
            class="inline-block h-[max-content] w-[max-content] icon-n-favorites cursor-pointer text-[22px] text-white "
          />
        </div>
      </div>
    </div>
    <div
      class="h-[40px] text-white text-[14px] font-semibold bg-tab cursor-pointer rounded-[10px] overflow-hidden opacity-40 pointer-events-none"
    >
      <div class="h-full flex items-center relative  justify-center">
        <div class="w-[40px] h-[40px] flex items-center justify-center">
          <i
            class="inline-block h-[max-content] w-[max-content] icon-n-recent cursor-pointer text-[22px] text-white "
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>
