<script lang="ts" setup>
import { Progress } from '@/components/ui/progress'
</script>

<template>
  <div>
    <div class="bg-color2 rounded-[10px] overflow-hidden">
      <div
        class="h-[165px] px-[15px]  md:px-[36px] md:py-[15px] rounded-[inherit] bg-color3-linear font-extrabold text-white relative py-[12px] flex md:flex-row flex-col justify-start"
      >
        <Image
          src="https://web-res-ccc.afunimg8.com/cdn-cgi/image/format=auto/C02/_E/home/invite_wheel.png"
          importance="auto" class="h-full absolute bottom-0 left-[47.1%] max-lg:h-[60%] max-lg:left-[55%]" lazy=""
        />
        <div class="md:w-[50%]">
          <h4 class="text-[16px] md:text-[26px] md:gap-x-[4px] mb-[4px] flex flex-col md:flex-row items-baseline">
            Get amount
            <span
              class="whitespace-pre text-linearColor inline-block w-[max-content] text-[20px] md:text-[32px]"
            >R$94.42</span>
          </h4>

          <Progress
            :model-value="94.42" class="h-[6px] rounded-full bg-[--bc-bgColor7] mt-[8px]"
            indicator-class="main-color-btn rounded-full"
          />

          <p class="text-[12px] text-color w-[61%] mt-[8px]">
            R$5.58 more for withdrawal.
          </p>
          <button
            class="rounded-[6px] w-[max-content] min-w-[95px] main-color-btn h-[34px] text-[15px] text-font flex items-center justify-center px-[15px] mt-[8px] z-[1]"
          >
            Withdraw
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>
