<script lang="ts" setup>

</script>

<template>
  <div>
    <div class="bg-color2 space-y-[20px] py-[10px] px-[12px] rounded-[10px] font-semibold cursor-pointer text-white">
      <div class="flex items-center justify-between">
        <div class="flex items-center overflow-hidden">
          <div>
            FIFA
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" width="6" height="6" viewBox="0 0 6 6" fill="none" class="mx-[6px]">
            <circle cx="3.14746" cy="2.7207" r="2.5" fill="white" />
          </svg>
          <div class="truncate">
            League 1
          </div>
        </div>
        <div
          class="bg-noActive h-[24px] min-w-[48px] whitespace-nowrap shrink-0 px-[6px] text-active font-normal flex items-center justify-center gap-x-[4px] rounded-[10px]"
        >
          <i
            class="inline-block h-[max-content] w-[max-content] icon-new-play cursor-pointer text-active text-[12px]"
          />
          Live
        </div>
      </div>
      <div class="flex items-center justify-between h-[90px]">
        <div class="flex-1 flex flex-col items-center h-full justify-start gap-y-[4px]">
          <Image
            src="https://web-res-ccc.afunimg8.com/C02/_E/home/sport/sports_type_300.svg" alt="" importance="auto"
            class="h-[50px]" lazy=""
          />
          <div class="text-center break-words break-all line-clamp-2">
            Stade de Reims
          </div>
        </div>
        <div class="px-[20px] flex flex-col items-center justify-center  gap-y-[8px]">
          <div class="text-[24px]">
            <span>0</span> : <span>0</span>
          </div>
          <div class="text-color font-normal">
            1st period
          </div>
        </div>
        <div class="flex-1 flex flex-col items-center justify-start gap-y-[4px] h-full">
          <Image
            src="https://web-res-ccc.afunimg8.com/C02/_E/home/sport/sports_type_300.svg" alt="" importance="auto"
            class="h-[50px]" lazy=""
          />
          <div class="text-center break-words break-all line-clamp-2">
            FC Lorient
          </div>
        </div>
      </div>
      <div class="flex gap-x-[5px]">
        <button class="flex-1 h-[40px] rounded-[10px] flex items-center justify-center gap-x-[8px] bg-[#FC3C3C1a]">
          1 <div class="text-[12px] text-[#FC3C3C]">
            2.7
          </div>
        </button><button
          class="flex-1 h-[40px] rounded-[10px] flex items-center justify-center gap-x-[8px] bg-[#FC3C3C1a]"
        >
          Draw
          <div class="text-[12px] text-[#FC3C3C]">
            2.45
          </div>
        </button><button
          class="flex-1 h-[40px] rounded-[10px] flex items-center justify-center gap-x-[8px] bg-[#FC3C3C1a]"
        >
          2 <div class="text-[12px] text-[#FC3C3C]">
            3.05
          </div>
        </button><button class="flex-1 h-[40px] rounded-[10px] flex items-center justify-center bg-page">
          +1
        </button>
      </div>
    </div>
  </div>
</template>

<style></style>
