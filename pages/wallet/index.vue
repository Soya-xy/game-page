<script setup lang="ts">
const route = useRoute()
const tab = computed(() => (Number(route.query.type) || 0))
const tabList = ref([
  {
    label: 'Balance',
    icon: 'icon-wallet',
  },
  {
    label: 'Deposit',
    icon: 'icon-new-deposit',
  },
  {
    label: 'Withdraw',
    icon: 'icon-new-withdraw',
  },
])
const { isPc } = useDevice()
watch(isPc, (newVal) => {
  if (newVal === false) {
    routerPush('/')
  }
})
</script>

<template>
  <div class="container @container">
    <div class="text-[20px] font-bold mb-[20px] text-white">
      Wallet
    </div>
    <div class="flex">
      <div
        class="shrink-0 bg-[--bc-bgColor2] max-w-[300px] min-w-[max-content] flex-1 p-[10px] space-y-[10px] h-[max-content] rounded-md"
      >
        <div
          v-for="(item, index) in tabList" :key="index" :class="{ 'text-white': index === tab }"
          class="h-[46px] px-[15px] flex items-center hover:text-white rounded-sm cursor-pointer bg-color-2"
          @click="routerReplace(`/wallet?type=${index}`)"
        >
          <i
            :class="[item.icon, { 'text-white': index === tab }]"
            class="inline-block h-[max-content] w-[max-content] cursor-pointer text-[20px] hover-icon"
          /><span
            class="ml-[10px]"
          >{{ item.label }}</span>
        </div>
      </div>
      <!-- Balance -->
      <div v-if="tab === 0" class="ml-[20px] flex-[5] h-[600px] overflow-y-auto">
        <div class="bg-[--bc-bgColor2] py-[14px] px-[30px] flex items-center justify-between rounded-md">
          <div class="flex items-center justify-center relative flex-1">
            <div class="flex-1 flex items-center justify-start shrink-0">
              <img
                src="https://web-res-ccc.afunimg8.com/cdn-cgi/image/format=auto/dev_skin/C02/wallet/currency/BRL.png"
                alt="" importance="auto" class="w-[20px] h-[20px] shrink-0 mr-[6px]" lazy=""
              >
              <div class="flex flex-col items-start justify-center">
                <div class="text-[14px] mb-[8px]">
                  Total Balance
                </div>
                <div class="text-white text-[16px] font-bold">
                  <span class="text-[--bc-greenColor] mr-[4px]">R$</span><span class="whitespace-pre">0.00</span>
                </div>
                <div class="text-[12px] text-[--bc-color20]">
                  Funds are very safe
                </div>
              </div>
            </div>
            <div class="w-[1px] h-[40px] mr-[20px] bg-[--bc-bgColor5] shrink-0" />
            <div class="flex-1 flex flex-col items-start justify-center shrink-0">
              <div class="text-[14px] mb-[8px]">
                Cash
              </div>
              <div class="text-[16px] text-white font-bold">
                <span class="text-[--bc-greenColor] mr-[4px]">R$</span><span class="whitespace-pre">0.00</span>
              </div>
              <div class="invisible text-[12px] text-[--bc-color20]">
                Bet <span class="text-color-text-1">R$0.00</span> to withdraw
              </div>
            </div>
            <div class="w-[1px] h-[40px] mr-[20px] bg-[--bc-bgColor5] shrink-0" />
            <div class="flex-1 flex flex-col items-start justify-center shrink-0">
              <div class="text-[14px] mb-[8px]">
                Rewards
              </div>
              <div class="text-[16px] text-white font-bold">
                <span class="text-[--bc-greenColor] mr-[4px]">R$</span><span class="whitespace-pre">0.21</span>
              </div>
              <div class="text-[12px] text-[--bc-color20] invisible">
                Bet <span class="text-color-text-1">R$0.00</span> to withdraw
              </div>
            </div>
          </div>
          <div
            class="flex ml-[20px] h-[60px] w-[max-content] px-[16px] justify-center flex-col items-center shrink-0 bg-color-linear-13 rounded-sm overflow-hidden relative"
          >
            <p class="text-[20px] text-white text-left font-bold relative w-full">
              <span>Rewards Games</span>
            </p>
            <div class="text-white flex items-center justify-center cursor-pointer text-[14px] font-medium">
              <span class="join-text">Play Now</span><i
                class="inline-block h-[max-content] w-[max-content] icon-new-arrow cursor-pointer text-[16px]"
              />
            </div>
          </div>
        </div>
        <div class="bg-[--bc-bgColor2] mt-[10px] rounded-md px-[30px] py-[20px]">
          <ul class="list-inside list-disc leading-[2]">
            <li>AFUN is a formal online gambling platform. </li>
            <li>We accept government supervision, so we have higher credibility and better safety.</li>
            <li>
              Please bet with peace of mind, your funds will be guaranteed the highest level from beginning to end.
            </li>
          </ul>
        </div>
      </div>
      <!-- Deposit -->
      <div v-else-if="tab === 1" class="ml-[20px] py-[20px] h-[700px] w-full bg-[--bc-bgColor2] rounded-md">
        <div class="w-full h-full ml-[15px]">
          <BaseDepositPage />
        </div>
      </div>
      <!-- Withdraw -->
      <div v-else-if="tab === 2" class="ml-[20px] py-[20px] h-[700px] w-full bg-[--bc-bgColor2] rounded-md">
        <div class="w-full h-full ml-[15px]">
          <BaseWithdrawPage />
        </div>
      </div>
    </div>
  </div>
</template>
