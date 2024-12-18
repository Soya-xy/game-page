<script setup lang="ts">
const isSelect = ref<boolean>(false)
</script>

<template>
  <div class="w-full md:w-[495px] h-full px-[15px] transform-cpu">
    <div class="flex flex-col gap-y-[10px] h-full overflow-hidden relative bg-[--bc-bgColor] pb-[20px] w-full">
      <div class="text-white px-[15px] bg-[--bc-color-3]">
        <div class="h-[55px] flex items-center justify-between text-[16px] font-bold">
          Withdraw
        </div>
      </div>
      <div
        v-if="isSelect"
        class="flex flex-col flex-1 gap-y-[10px] overflow-y-auto overflow-x-hidden px-[15px] mt-[6px]"
      >
        <section class="flex flex-col gap-y-[10px]">
          <div class="p-[8px] flex items-center gap-x-[8px] bg-[--bc-color-3] rounded-xs">
            <Image
              src="https://web-res-ccc.afunimg8.com/cdn-cgi/image/format=auto/C02/deposit/country/BRL.svg?t20241112"
              alt="" importance="auto" class="h-[36px] w-[36px] shrink-0"
            />
            <div class="text-[10px] flex-1">
              <p class="text-[--bc-textColor] flex items-start justify-between relative">
                Payment methods
                for the region
              </p>
              <div class="text-[12px] font-bold text-white flex items-center gap-x-[10px] mt-[4px]">
                Brazil(Brasil)-BRL
              </div>
            </div>
          </div>
        </section>
        <ul class="flex flex-col gap-y-[10px] login-scale">
          <li @click="isSelect = false">
            <h3 class="text-[12px] text-white mb-[4px]">
              Recommended Deposit
            </h3>
            <ul class="grid grid-cols-2 gap-x-[7px] gap-y-[6px]">
              <li
                class="h-[90px] flex flex-col items-center justify-center gap-y-[6px] bg-[--bc-searchBtnColor] rounded-xs relative"
              >
                <Image
                  src="https://web-res-ccc.afunimg8.com/C02/deposit/pix.svg?t=20241014"
                  alt="brapay" importance="auto" class="!h-[50px]"
                />
                <div class="text-[10px] font-medium text-white">
                  PIX
                </div>
                <div
                  class="text-[10px] text-color-white font-semibold rounded-[3px] bg-linear-color-7 min-w-[26px] px-[2px] leading-[14px] text-center absolute left-0 top-0"
                >
                  HOT
                </div>
              </li>
            </ul>
          </li>
          <li @click="isSelect = false">
            <h3 class="text-[12px] text-white mb-[4px]">
              All Deposit Methods
            </h3>
            <ul class="grid grid-cols-2 gap-x-[7px] gap-y-[6px]">
              <li
                class="h-[90px] flex flex-col items-center justify-center gap-y-[6px] bg-[--bc-searchBtnColor] rounded-xs relative"
              >
                <Image
                  src="https://web-res-ccc.afunimg8.com/C02/deposit/pix.svg?t=20241014"
                  alt="brapay" importance="auto" class="!h-[50px]"
                />
                <div class="text-[10px] font-medium text-white">
                  PIX
                </div>
              </li>
              <li
                class="h-[90px] flex flex-col items-center justify-center gap-y-[6px] bg-[--bc-searchBtnColor] rounded-xs relative"
              >
                <Image
                  src="https://img.engames.com/cdn-cgi/image/format=auto/afun/1733218768717573039.png"
                  alt="" importance="auto" class="!h-[50px]"
                />
                <div class="text-[10px] font-medium text-white">
                  Paybet
                </div>
              </li>
              <li
                class="h-[90px] flex flex-col items-center justify-center gap-y-[6px] bg-[--bc-searchBtnColor] rounded-xs relative"
              >
                <Image
                  src="https://web-res-ccc.afunimg8.com/C02/deposit/usdt.svg?t=20241014"
                  alt="usdtPay" importance="auto" class="!h-[50px]"
                />
                <div class="text-[10px] font-medium text-white">
                  USDT
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div v-else class="flex flex-col flex-1 gap-y-[10px] overflow-y-auto overflow-x-hidden px-[15px]">
        <section>
          <h3 class="text-[12px] text-white mb-[4px]">
            Choose Withdrawal Method
          </h3>
          <div
            class="h-[44px] flex items-center justify-between gap-x-[30px] px-[8px] relative bg-[--bc-bgColor2] rounded-xs"
          >
            <div
              class="text-[8px] text-color-white font-semibold rounded-[2px] bg-linear-color-7 min-w-[22px] px-[3px] leading-[10px] text-center absolute left-0 top-0"
            >
              HOT
            </div>
            <div class="flex items-center justify-start">
              <div class="mr-[6px]">
                <Image
                  src="https://web-res-ccc.afunimg8.com/C02/deposit/pix.svg?t=20241014" alt=""
                  importance="auto" class="!h-[30px]"
                />
              </div><span class="text-[12px] font-bold text-white inline-block">Pix</span>
            </div><button class="text-[12px] font-medium text-[--bc-activeColor3]" @click="isSelect = true">
              Change
            </button>
          </div>
        </section>
        <div class="flex flex-col gap-[10px]">
          <section>
            <div class="text-[12px] mb-[2px]">
              PIX Key Type
            </div>
            <BaseInput />
          </section>
          <section>
            <div class="text-[12px] mb-[2px]">
              Account Holder Name
            </div>
            <BaseInput />
          </section>
          <section>
            <div
              class="min-h-[22px] flex gap-x-[12px] items-center justify-between flex-wrap text-[12px] text-[--bc-textColor] mb-[6px]"
            >
              <div>
                <span>Available</span><span
                  class="whitespace-pre text-white font-bold ml-[4px]"
                >R$0.01</span>
              </div>
              <div class="flex items-center">
                Locked funds <span
                  class="whitespace-pre text-white font-semibold ml-[4px]"
                >R$0.01</span><i
                  class="inline-block h-[max-content] w-[max-content] icon-new-wenhao cursor-pointer text-[--bc-color20] text-[18px] ml-[10px]"
                />
              </div>
            </div>
            <BaseInput />
          </section>
          <ul class="px-[8px] bg-[--bc-bgColor2] rounded-xs text-[12px] text-[--bc-textColor]">
            <li class="h-[36px] flex items-center justify-between">
              Total withdrawal amount: <div
                class="text-white"
              >
                -
              </div>
            </li>
            <li class="h-[36px] flex items-center justify-between">
              Tax : <div class="text-white">
                -
              </div>
            </li>
            <li class="h-[36px] flex items-center justify-between">
              Withdrawal Amount: <div
                class="text-white"
              >
                -
              </div>
            </li>
          </ul><button
            class="flex items-center min-h-[40px] justify-center w-full bg-[--bc-activeColor] rounded-xs text-[13px] font-bold text-[--bc-fontColor]"
          >
            Withdraw
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
