<script lang="ts" setup>

</script>

<template>
  <div class="border-radius-0 bg-color2 mt-[8px] p-[10px]">
    <div class="flex items-center justify-start text-[12px] relative">
      <div class="flex-1 flex items-center justify-center shrink-0">
        <Image
          src="https://web-res-ccc.afunimg8.com/cdn-cgi/image/format=auto/dev_skin/C02/wallet/currency/BRL.png"
          alt="" class="w-[20px] h-[20px] shrink-0 mr-[6px]"
        />
        <div class="flex flex-col items-center justify-center">
          <div class="text-[10px] mb-[2px]">
            Balance
          </div>
          <div class="text-white font-bold">
            <span class="whitespace-pre">0.07</span>
          </div>
        </div>
      </div>
      <div class="w-[1px] h-[20px] bg-color5 shrink-0" />
      <div class="flex-1 flex flex-col items-center justify-center">
        <div class="text-[10px] mb-[2px]">
          Cash
        </div>
        <div class="font-bold text-white">
          <span class="whitespace-pre">{{ toCurrency(0.07) }}</span>
        </div>
      </div>
      <div class="w-[1px] h-[20px] bg-color5 shrink-0" />
      <div class="flex-1 flex flex-col items-center justify-center">
        <div class="text-[10px] mb-[2px]">
          Rewards
        </div>
        <div class="font-bold text-white">
          <span class="whitespace-pre">R$0.00</span>
        </div>
      </div>
    </div>
    <div class="w-full h-[1px] bg-[--bc-bgColor9] shrink-0 my-[10px]" />
    <div class="flex space-x-[4px] pb-[5px]">
      <button class="flex-1 flex flex-col items-center justify-center" @click="routerPush('/transaction')">
        <i
          class="inline-block h-[max-content] w-[max-content] icon-new-transaction-history text-[20px] mb-[4px] text-color"
        />
        <span class="text-white">Transaction</span>
      </button><button class="flex-1 flex flex-col items-center justify-center" @click="routerPush('/history')">
        <i class="inline-block h-[max-content] w-[max-content] icon-new-bet-history text-[20px] mb-[4px] text-color" />
        <span class="text-white">History</span>
      </button>
    </div>
  </div>
</template>

<style></style>
