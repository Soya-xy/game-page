<script setup lang="ts">
import Empty from '../Base/Empty.vue'
</script>

<template>
  <div>
    <div class="flex gap-[10px] px-[15px] md:px-[30px] shrink-0 mt-[10px] mb-[10px]">
      <div
        class="select-bg rounded-sm relative overflow-visible text-[12px] text-[--bc-textColor] shrink-0 bg-[--bc-bgColor9] z-10 h-[46px] flex-1"
      >
        <div class="h-full flex items-center justify-between px-[12px] cursor-pointer">
          <div class="select-show-div flex items-center text-[--bc-textColor] font-medium">
            <span class="select-show-span flex items-center">Today</span>
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
          style="height: 0px; bottom: unset; top: calc(45px);"
        >
          <li
            class="flex items-center justify-between px-[12px] relative cursor-pointer shrink-0 ul-show-text bg-color-btn-1 text-color-text-0 font-bold min-h-[40px] h-[40px]"
          >
            <div class="ul-div flex items-center">
              <span class="ul-span flex items-center">Today</span>
            </div><button class="absolute inset-y-0 right-[12px] flex items-center" />
          </li>
          <li
            class="flex items-center justify-between px-[12px] relative cursor-pointer shrink-0 ul-text min-h-[40px] h-[40px]"
          >
            <div class="ul-div flex items-center">
              <span class="ul-span flex items-center">Yesterday</span>
            </div>
          </li>
          <li
            class="flex items-center justify-between px-[12px] relative cursor-pointer shrink-0 ul-text min-h-[40px] h-[40px]"
          >
            <div class="ul-div flex items-center">
              <span class="ul-span flex items-center">Last 3 days</span>
            </div>
          </li>
          <li
            class="flex items-center justify-between px-[12px] relative cursor-pointer shrink-0 ul-text min-h-[40px] h-[40px]"
          >
            <div class="ul-div flex items-center">
              <span class="ul-span flex items-center">Last 7 days</span>
            </div>
          </li>
          <li
            class="flex items-center justify-between px-[12px] relative cursor-pointer shrink-0 ul-text min-h-[40px] h-[40px]"
          >
            <div class="ul-div flex items-center">
              <span class="ul-span flex items-center">Last 15 days</span>
            </div>
          </li>
          <li
            class="flex items-center justify-between px-[12px] relative cursor-pointer shrink-0 ul-text min-h-[40px] h-[40px]"
          >
            <div class="ul-div flex items-center">
              <span class="ul-span flex items-center">Last 30 days</span>
            </div>
          </li>
        </ul>
      </div>
      <div
        class="select-bg rounded-sm relative overflow-visible text-[12px] text-[--bc-textColor] shrink-0  bg-[--bc-bgColor9] z-10 h-[46px] flex-1"
      >
        <div class="h-full flex items-center justify-between px-[12px] cursor-pointer">
          <div class="select-show-div flex items-center text-[--bc-textColor] font-medium">
            <span class="select-show-span flex items-center">Deposit</span>
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
          style="height: 0px; bottom: unset; top: calc(45px);"
        >
          <li
            class="flex items-center justify-between px-[12px] relative cursor-pointer shrink-0 ul-show-text bg-color-btn-1 text-color-text-0 font-bold min-h-[40px] h-[40px]"
          >
            <div class="ul-div flex items-center">
              <span class="ul-span flex items-center">Deposit</span>
            </div><button class="absolute inset-y-0 right-[12px] flex items-center" />
          </li>
          <li
            class="flex items-center justify-between px-[12px] relative cursor-pointer shrink-0 ul-text min-h-[40px] h-[40px]"
          >
            <div class="ul-div flex items-center">
              <span class="ul-span flex items-center">Withdraw</span>
            </div>
          </li>
          <li
            class="flex items-center justify-between px-[12px] relative cursor-pointer shrink-0 ul-text min-h-[40px] h-[40px]"
          >
            <div class="ul-div flex items-center">
              <span class="ul-span flex items-center">Gift</span>
            </div>
          </li>
        </ul>
      </div>
      <div
        class="select-bg rounded-sm relative overflow-visible text-[12px] text-[--bc-textColor] shrink-0 z-10 h-[40px] bg-[--bc-bgColor9] z-10 h-[46px] flex-1"
      >
        <div class="h-full flex items-center justify-between px-[12px] cursor-pointer">
          <div class="select-show-div flex items-center text-[--bc-textColor] font-medium">
            <span class="select-show-span flex items-center">All
              State</span>
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
          style="height: 0px; bottom: unset; top: calc(45px);"
        >
          <li
            class="flex items-center justify-between px-[12px] relative cursor-pointer shrink-0 ul-show-text bg-color-btn-1 text-color-text-0 font-bold min-h-[40px] h-[40px]"
          >
            <div class="ul-div flex items-center">
              <span class="ul-span flex items-center">All State</span>
            </div><button class="absolute inset-y-0 right-[12px] flex items-center" />
          </li>
          <li
            class="flex items-center justify-between px-[12px] relative cursor-pointer shrink-0 ul-text min-h-[40px] h-[40px]"
          >
            <div class="ul-div flex items-center">
              <span class="ul-span flex items-center">Processing</span>
            </div>
          </li>
          <li
            class="flex items-center justify-between px-[12px] relative cursor-pointer shrink-0 ul-text min-h-[40px] h-[40px]"
          >
            <div class="ul-div flex items-center">
              <span class="ul-span flex items-center">Successful</span>
            </div>
          </li>
          <li
            class="flex items-center justify-between px-[12px] relative cursor-pointer shrink-0 ul-text min-h-[40px] h-[40px]"
          >
            <div class="ul-div flex items-center">
              <span class="ul-span flex items-center">Failed</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="flex flex-col flex-[1] px-[30px] pb-[30px] overflow-hidden">
      <div class="flex flex-col flex-[1] bg-color-3 overflow-hidden rounded-sm">
        <div class="flex flex-col flex-[1] overflow-y-auto overscroll-contain">
          <div class="v3-infinite-loading">
            <div style="display: none;">
              <div class="w-full flex items-center justify-center relative infinite-loading h-[400px]">
                <div class="w-[max-content] h-[max-content] absolute left-0 right-0 top-0 bottom-0 m-auto">
                  <svg width="20px" height="20px" viewBox="0 0 20 20" class="e-loading-10">
                    <circle cx="10" cy="10" r="8" stroke-width="3" fill="none" />
                    <circle
                      cx="10" cy="10" r="8" stroke-width="3" fill="none" stroke-linecap="round"
                      stroke-dasharray="50.26548245743669" stroke-dashoffset="22.619467105846507"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <Empty />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
