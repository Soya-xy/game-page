<script setup lang="ts">
const router = useRouter()
</script>

<template>
  <div
    class="md:hidden sticky flex items-center text-white w-full h-[56px] top-0 z-[20] shrink-0 bg-[--bc-color-3]"
    style="transform: translateZ(0px);"
  >
    <div class="flex-1 flex items-center">
      <div class="pl-[15px] shrink-0" />
      <div class="text-[16px] font-bold">
        Bets History
      </div>
    </div><button class="h-full flex ite  ms-center px-[15px]" @click="router.back()">
      <i class="inline-block h-[max-content] w-[max-content] icon-new-clean-3 text-[--bc-color20] text-[16px]" />
    </button>
  </div>
  <div class="flex flex-col flex-[1] px-[15px] md:px-[40px] py-[30px] overflow-hidden">
    <div class="grid grid-cols-2 gap-[10px]">
      <div class="h-[46px] rounded-sm">
        <div class="text-[15px] relative rounded-sm bg-[--bc-bgColor9] font-medium" show-now-button="false">
          <BaseDatePicker />
        </div>
      </div>
      <div
        class="rounded-sm relative overflow-visible  text-color-text-1 shrink-0 z-10 h-[46px] bg-[--bc-bgColor9] text-[14px]"
        unless="true"
      >
        <div class="h-full flex items-center justify-between px-[12px] cursor-pointer">
          <div class="select-show-div flex items-center text-color-text-1 font-medium">
            <span class="flex items-center">All
              games</span>
          </div>
          <div class="flex items-center">
            <button
              class="text-[12px] transition-all duration-200 flex items-center select-btn select-btn -rotate-[90deg] text-[--bc-color20]"
            >
              <i class="inline-block h-[max-content] w-[max-content] icon-new-back cursor-pointer" />
            </button>
          </div>
        </div>
        <ul
          class="bg-color-4 rounded-sm absolute z-[2] transition-[height] overflow-hidden box-shadow-02 w-full left-0 h-0"
          style="height: 0px; bottom: unset; top: calc(51px);"
        >
          <li
            class="flex items-center justify-between px-[12px] relative cursor-pointer shrink-0 ul-show-text bg-[--bc-searchBtnColor] text-white font-bold min-h-[46px] h-[46px]"
          >
            <div class="ul-div flex items-center">
              <span class="ul-span flex items-center">All games</span>
            </div><button class="absolute inset-y-0 right-[12px] flex items-center" />
          </li>
          <li
            class="flex items-center justify-between px-[12px] relative cursor-pointer shrink-0 ul-text min-h-[46px] h-[46px]"
          >
            <div class="ul-div flex items-center">
              <span class="ul-span flex items-center">Original</span>
            </div>
          </li>
          <li
            class="flex items-center justify-between px-[12px] relative cursor-pointer shrink-0 ul-text min-h-[46px] h-[46px]"
          >
            <div class="ul-div flex items-center">
              <span class="ul-span flex items-center">Slots</span>
            </div>
          </li>
          <li
            class="flex items-center justify-between px-[12px] relative cursor-pointer shrink-0 ul-text min-h-[46px] h-[46px]"
          >
            <div class="ul-div flex items-center">
              <span class="ul-span flex items-center">Live</span>
            </div>
          </li>
          <li
            class="flex items-center justify-between px-[12px] relative cursor-pointer shrink-0 ul-text min-h-[46px] h-[46px]"
          >
            <div class="ul-div flex items-center">
              <span class="ul-span flex items-center">Casual</span>
            </div>
          </li>
          <li
            class="flex items-center justify-between px-[12px] relative cursor-pointer shrink-0 ul-text min-h-[46px] h-[46px]"
          >
            <div class="ul-div flex items-center">
              <span class="ul-span flex items-center">Shows</span>
            </div>
          </li>
          <li
            class="flex items-center justify-between px-[12px] relative cursor-pointer shrink-0 ul-text min-h-[46px] h-[46px]"
          >
            <div class="ul-div flex items-center">
              <span class="ul-span flex items-center">Sports</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="flex flex-col flex-[1] overflow-hidden rounded-sm bg-[--bc-color-3] pb-[10px] px-[10px] mt-[10px]">
      <div class="flex flex-col flex-[1] overflow-y-auto">
        <div class="v3-infinite-loading">
          <div style="display: none;">
            <div class="w-full flex items-center justify-center relative infinite-loading h-[400px]">
              <div class="w-[max-content] h-[max-content] absolute left-0 right-0 top-0 bottom-0 m-auto">
                <svg width="20px" height="20px" viewBox="0 0 20 20" class="e-loading-10">
                  <circle cx="10" cy="10" r="8" stroke-width="3" fill="none" />
                  <circle
                    cx="10" cy="10" r="8" stroke-width="3" fill="none" stroke-linecap="round"
                    stroke-dasharray="50.26548245743669" stroke-dashoffset="21.61415745669778"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div class="flex flex-col items-center justify-center" style="margin: 127px auto;">
            <BaseEmpty />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
