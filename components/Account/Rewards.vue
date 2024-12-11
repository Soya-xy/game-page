<script lang="ts" setup>

</script>

<template>
  <div class="flex flex-col h-full w-full overflow-hidden text-[--bc-yellowColor] rounded-[10px] bg-color-linear-39">
    <div class="shrink-0 overflow-hidden pl-[3.73vw] bg-color-linear-25">
      <div class="relative h-[44px] shrink-0 text-[15px] text-white flex items-center font-bold">
        Rewards rain <button class="absolute z-[1] right-[40px] h-full pl-[10px] flex justify-center items-center">
          <i class="inline-block h-[max-content] w-[max-content] icon-new-wenhao text-[--bc-yellowColor] text-[20px]" />
        </button><button class="absolute z-[1] right-[4px] h-full top-0 bottom-0 m-auto px-[10px]">
          <i
            class="inline-block h-[max-content] w-[max-content] icon-new-clean-3 text-[--bc-yellowColor] text-[15px]"
          />
        </button>
      </div>
    </div>
    <div class="px-[5.33vw] text-[12px] mb-[10px] flex-1 flex flex-col items-center overflow-hidden">
      <div class="flex flex-col gap-[10px] flex-1 overflow-y-auto w-full overflow-x-hidden">
        <div class="text-center flex flex-col mt-[10px] items-center justify-center">
          <span class="whitespace-pre text-color-activity-9 text-[32px] font-[900] leading-[1]">R$100,000.00</span>
          <p class="text-center leading-[1]">
            Per time
          </p>
        </div>
        <div class="flex flex-col gap-[10px] w-full shrink-0">
          <div class="flex flex-col border-radius-0 overflow-hidden shrink-0 w-full" style="order: -1;">
            <div class="bg-[--bc-alphaBlack1a] px-[8px] py-[6px] w-full leading-[1.2]">
              Next Event:
            </div>
            <div
              class="bg-[--bc-yellowColor] grid grid-cols-3  gap-y-[6px] py-[10px] w-full
              [&>p:not(:nth-child(3n+3))]:border-r-[1px]
              [&>p:not(:nth-child(3n+3))]:border-r-[--bc-buttonColor2]
              [&>p:not(:nth-child(3n+3))]:border-solid
              "
            >
              <p class="text-center text-white h-[18px] flex items-center justify-center">
                12:00-12:59
              </p>
              <p class="text-center text-white h-[18px] flex items-center justify-center">
                15:00-15:59
              </p>
              <p class="text-center text-white h-[18px] flex items-center justify-center">
                18:00-18:59
              </p>
              <p class="text-center text-white h-[18px] flex items-center justify-center">
                21:00-21:59
              </p>
            </div>
          </div>
          <div class="flex flex-col border-radius-0 overflow-hidden shrink-0 w-full" style="order: 1;">
            <div class="bg-[--bc-alphaBlack1a] px-[8px] py-[6px] w-full leading-[1.2]">
              Extra Rain Event: (No. 1~7, Every Friday, Saturday and Sunday.)
            </div>
            <div
              class="bg-[--bc-yellowColor] grid grid-cols-3  gap-y-[6px] py-[10px] w-full
              [&>p:not(:nth-child(3n+3))]:border-r-[1px]
              [&>p:not(:nth-child(3n+3))]:border-r-[--bc-buttonColor2]
              [&>p:not(:nth-child(3n+3))]:border-solid
              "
            >
              <p class="text-center text-white h-[18px] flex items-center justify-center">
                10:00-10:59
              </p>
              <p class="text-center text-white h-[18px] flex items-center justify-center">
                23:00-23:59
              </p>
            </div>
          </div>
        </div>
        <div class="flex flex-col items-start justify-start w-full mb-[12px]">
          <p class="text-[11px] relative">
            ● One deposit, lifetime rewards.
          </p>
          <p class="text-[11px] relative">
            ● Rewards per round:R$100,000
          </p>
          <p class="text-[11px] relative">
            ● Maximum rewards:R$7,777/pax
          </p>
        </div>
      </div>
    </div>
    <div class="px-[20px] pb-[20px] flex">
      <button class="bg-[--bc-yellowColor] text-white flex-1 h-[40px] border-radius-0 text-[13px] font-bold">
        Deposit and participate
      </button>
    </div>
  </div>
</template>

<style></style>
