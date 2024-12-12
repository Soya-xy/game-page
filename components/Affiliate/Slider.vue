<script lang="ts" setup>
const noRules = defineProp<boolean>(false)
const showRules = ref(false)
</script>

<template>
  <div class="flex flex-row w-full items-center mb-[15px]">
    <div class="text-[12px] flex-1 flex items-center">
      <div
        class="w-[33px] h-[33px] mr-[10px] bg-no-repeat bg-center"
        style="background-image: url(https://web-res-ccc.afunimg8.com/cdn-cgi/image/format=auto/C02/bonusCenter/task_weekly_icon.png?t=20231205); background-size: 100%;"
      />
      <div>
        <div class="mb-[4px]">
          Recommended <span class="text-white">&gt; 100</span>
          <i
            class="inline-block h-[max-content] w-[max-content] icon-new-personal text-[10px] text-color ml-[4px]"
          />
        </div>
        <div>Commission <span class="text-white">&gt; R$5,000 / Month</span></div>
      </div>
    </div>
    <div class="relative  bg-[--bc-bgColor9] h-[6px] w-[60px] rounded-tl-[3px] rounded-bl-[3px]">
      <PcAffiliateSlider />
    </div>
  </div>
  <div class="flex flex-col relative">
    <div class="flex flex-col">
      <div
        class="shrink-0 h-[max-content] w-full bg-no-repeat border-radius-0 overflow-hidden"
        style="background-size: 100%; background-position: center bottom; background-image: url(https://web-res-ccc.afunimg8.com/cdn-cgi/image/format=auto/C02/C0E/referAndEarn/proxy.jpg?20241031);"
      >
        <template v-if="!noRules">
          <div class="flex items-center justify-between shrink-0 w-full px-[10px] pt-[7px]">
            <p class="text-[10px] font-bold">
              Unlimited development of subordinates
            </p>
            <p class="text-[--bc-color20] underline text-[10px] cursor-pointer" @click="showRules = true">
              Rules
            </p>
          </div>
        </template>
        <div class="w-full h-0 pb-[57.78%]" />
      </div>
      <ul class="text-[10px] mt-[10px] list-inside list-decimal">
        <li class="mb-[10px]">
          Every time your recommended player places a bet, wins or loses, you will receive a different commission
          percentage.
        </li>
        <li>The system calculates commission every <span class="text-white">3 minutes</span>.</li>
      </ul>
    </div>
  </div>

  <BaseDrawer v-model:open="showRules" direction="right" content-class="z-[999] h-[100vh]" overlay-class="z-[999]" header-class="bg-transparent">
    <template #title>
      Rules
    </template>
    <AffiliateTop />
    <AffiliateFriends />
    <AffiliateRules />
  </BaseDrawer>
</template>

<style>

</style>
