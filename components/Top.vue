<script lang="ts" setup>
const isShow = defineProp<boolean>()
const top = defineEmit()
</script>

<template>
  <div class="fixed z-[120] top-[50vh] flex flex-col opacity-1 items-end right-0" :class="{ 'opacity-0': !isShow }">
    <div
      class="flex flex-col transition-all duration-200 items-center justify-center w-[50px] mr-[20px] h-[50px] border-radius-1 bg-[--bc-bgColor9] mb-[10px] font-semibold text-white pointer-events-auto opacity-100 cursor-pointer hover:bg-[--bc-searchBtnColor]"
      @click="top"
    >
      <i
        class="inline-block h-[max-content] w-[max-content] icon-new-arrow cursor-pointer text-[20px] text-active -rotate-[90deg]"
      />
      TOP
    </div>
    <div
      class="flex items-center transition-all duration-300 justify-center mr-[20px] mb-[10px] pointer-events-auto opacity-100 cursor-pointer"
    >
      <div class="w-[50px] h-[50px] flex items-center justify-center border-radius-1 bg-[--bc-activeColor]">
        <i
          class="inline-block h-[max-content] w-[max-content] icon-new-live-support cursor-pointer text-font text-[26px]"
        />
      </div>
    </div>
  </div>
</template>

<style></style>
