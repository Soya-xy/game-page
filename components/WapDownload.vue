<script lang="ts" setup>
const isShow = defineModel<boolean>('show')

function setVar() {
  document.documentElement.style.setProperty('--bc-appDownloadHeight', '0px')
  isShow.value = false
}
</script>

<template>
  <div class="relative z-[10]">
    <div
      class="h-[--bc-appDownloadHeight] flex items-center justify-between w-full bg-color-linear-07 text-white px-[15px] text-[12px] whitespace-pre-wrap relative"
    >
      <button
        class="close-btn text-[--bc-transparentColor80] bg-[--bc-alphaBlack4a] rounded-br-[17px] w-[22px] h-[20px] flex items-center justify-center absolute top-0 left-0"
        @click="setVar"
      >
        <i class="inline-block h-[max-content] w-[max-content] icon-new-clean-1 text-[8px]" />
      </button>
      <p class="font-[500] flex-1">
        Download the app and get bonus
      </p>
      <div
        class="down-btn flex items-center justify-center shrink-0 h-[30px] min-w-[80px] px-[6px] bg-white border-radius-0 text-[--bc-errorColor] text-[12px] font-[500]"
      >
        <i class="inline-block h-[max-content] w-[max-content] icon-new-mobile text-[15px] mr-[2px]" /> Download
      </div>
    </div>
  </div>
</template>

<style></style>
