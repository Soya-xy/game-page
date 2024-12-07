<template>
  <div class="mt-[15px] border-radius-0 overflow-hidden">
    <div class="h-[38px] px-[15px] bg-[--bc-searchBtnColor] flex justify-between items-center">
      <div class="text-[12px] font-bold text-color">
        Uncollected commissions
      </div>
      <button class="underline  text-[12px]">
        Details
      </button>
    </div>
    <div class="bg-color2 pl-[15px] pr-[10px] py-[10px]">
      <div class="flex w-full">
        <div class="flex-1">
          <div class="flex items-center mb-[10px]">
            <div class="w-[0.5px] h-[18px] bg-[--bc-searchBtnColor] shrink-0 mx-[16px]" />
          </div>
          <div class="flex items-center">
            <div class="flex-1">
              <div class="text-[10px] capitalize text-color-text-2 mb-[4px] whitespace-nowrap">
                Exclusive Commission
              </div>
              <div class="text-color text-[12px] font-medium">
                <span class="whitespace-pre">R$0.00</span>
              </div>
            </div>
            <div class="w-[0.5px] h-[18px] bg-[--bc-searchBtnColor] shrink-0 mx-[16px]" />
          </div>
        </div>
      </div>
      <div class="w-full h-[0.5px] bg-[--bc-searchBtnColor] shrink-0 my-[10px]" />
      <div class="flex justify-between items-center">
        <div class="text-color-text-0 text-[18px] font-bold">
          <span class="whitespace-pre">R$0.00</span>
        </div>
        <button
          class="border-radius-0 font-bold text-[14px] text-font bg-active px-[15px] min-w-[120px] w-[max-content] h-[40px]  pointer-events-none"
        >
          Claim
        </button>
      </div>
    </div>
  </div>
</template>
