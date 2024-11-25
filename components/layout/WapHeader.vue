<script lang="ts" setup>

</script>

<template>
  <div class="h-[48px] relative z-[100] flex items-center justify-between px-[10px] bg-header">
    <div class="flex items-center gap-[8px] h-full">
      <Image src="/images/logo.avif" class="!h-[30px]" />
    </div>
    <div class="flex items-center h-full text-[12px]">
      <div class="flex items-center gap-[5px]">
        <button
          class="h-[35px] min-w-[62px] font-extrabold flex items-center justify-center bg-button px-[10px] rounded-[10px] text-white"
        >
          Sign In
        </button>
        <button
          class="px-[10px] h-[35px] min-w-[62px] font-extrabold text-font rounded-[10px] main-color-btn flex items-center justify-center"
        >
          Sign Up
        </button>
        <div class="w-[34px] h-[34px] flex items-center justify-center relative bg-button rounded-[10px]">
          <i class="inline-block h-[max-content] w-[max-content] icon-n-lang text-[20px]" />
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>
