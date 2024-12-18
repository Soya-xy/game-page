<script setup lang="ts">
const numCurrent = ref<number>(0)
const numList = ref([
  {
    value: '10',
  },
  {
    value: '5,000',
  },
  {
    value: '10',
  },
  {
    value: '5,000',
  },
  {
    value: '10',
  },
  {
    value: '5,000',
  },
])
const isSelect = ref<boolean>(false)
</script>

<template>
  <div class="w-full md:w-[495px]  h-full px-[15px] transform-cpu">
    <div class="flex flex-col h-full relative overflow-hidden bg-[--bc-bgColor] pb-[20px] w-full">
      <div class="text-white px-[15px] bg-[--bc-color-3]">
        <div class="h-[55px] flex items-center justify-between text-[16px] font-bold">
          Deposit
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
                Payment methods for the region
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
                  src="https://web-res-ccc.afunimg8.com/C02/deposit/pix.svg?t=20241014" alt="brapay"
                  importance="auto" class="!h-[50px]"
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
                  src="https://web-res-ccc.afunimg8.com/C02/deposit/pix.svg?t=20241014" alt="brapay"
                  importance="auto" class="!h-[50px]"
                />
                <div class="text-[10px] font-medium text-white">
                  PIX
                </div>
              </li>
              <li
                class="h-[90px] flex flex-col items-center justify-center gap-y-[6px] bg-[--bc-searchBtnColor] rounded-xs relative"
              >
                <Image
                  src="https://img.engames.com/cdn-cgi/image/format=auto/afun/1733218768717573039.png" alt=""
                  importance="auto" class="!h-[50px]"
                />
                <div class="text-[10px] font-medium text-white">
                  Paybet
                </div>
              </li>
              <li
                class="h-[90px] flex flex-col items-center justify-center gap-y-[6px] bg-[--bc-searchBtnColor] rounded-xs relative"
              >
                <Image
                  src="https://web-res-ccc.afunimg8.com/C02/deposit/usdt.svg?t=20241014" alt="usdtPay"
                  importance="auto" class="!h-[50px]"
                />
                <div class="text-[10px] font-medium text-white">
                  USDT
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div v-else class="flex flex-col flex-1 gap-y-[10px] overflow-y-auto overflow-x-hidden px-[15px] mt-[6px]">
        <section class="flex flex-col gap-y-[10px]" />
        <section>
          <h3 class="text-[12px] text-white mb-[4px]">
            Deposit methods
          </h3>
          <div
            class="h-[44px] flex items-center justify-between gap-x-[30px] px-[8px] relative bg-[--bc-bgColor2] rounded-sm"
          >
            <div
              class="text-[8px] text-color-white font-semibold rounded-[2px] bg-linear-color-7 min-w-[22px] px-[3px] leading-[10px] text-center absolute left-0 top-0"
            >
              HOT
            </div>
            <div class="flex items-center justify-start">
              <div class="mr-[6px]">
                <img
                  src="https://web-res-ccc.afunimg8.com/C02/deposit/pix.svg?t=20241014" alt="brapay"
                  importance="auto" class="h-[30px]" lazy=""
                >
              </div>
              <div class="flex-1 overflow-hidden">
                <span class="text-[12px] font-bold text-white inline-block">PIX</span>
                <p class="text-[10px] text-[--bc-bgColor10] break-words break-all line-clamp-1">
                  Scan code to pay
                </p>
              </div>
            </div><button class="text-[12px] font-medium text-[--bc-activeColor3] shrink-0" @click="isSelect = true">
              Change
            </button>
          </div>
        </section>
        <div class="flex flex-col gap-[10px] login-scale">
          <section>
            <div class="text-[12px] text-[--bc-textColor] mb-[2px]">
              <span class="whitespace-pre">10</span> - <span class="whitespace-pre">10,000</span><span
                class="ml-[4px]"
              >BRL</span>
            </div>
            <div>
              <BaseInput />
            </div>
          </section>
          <div class="grid grid-cols-3 gap-y-[6px] gap-x-[6px]">
            <button
              v-for="(item, index) in numList" :key="index"
              :class="{ 'border-[--bc-border-1]': numCurrent === index }"
              class="rounded-sm font-bold text-white border-solid relative h-[52px] text-[12px] md:text-[18px] border-[1px] border-[--bc-bgColor5]"
              @click="numCurrent = index"
            >
              R$
              {{ item.value }}
              <div
                class="text-color-white font-[600] bg-linear-color-7 absolute top-[-1px] right-[-1px] leading-[18px] text-[12px] rounded-bl-[6px] rounded-tr-[6px] min-w-[34px] px-[4px]"
              >
                HOT
              </div>
            </button>
          </div>
          <section>
            <div class="text-[12px] mb-[2px]">
              CPF
            </div>
            <BaseInput />
            <p class="text-[12px] mt-[2px]">
              Deposits and withdrawals must use the same CPF, otherwise
              withdrawals cannot be processed smoothly.
            </p>
          </section><button
            class="flex items-center min-h-[40px] justify-center w-full bg-[--bc-activeColor3] rounded-sm text-[13px] font-bold text-[--bc-fontColor]"
          >
            Deposit
          </button>
          <div
            class="text-white text-[12px] py-[10px] pl-[6px] pr-[4px] bg-[--bc-bgColor11] rounded-sm break-all break-words"
          >
            <p>
              1. Deposits and withdrawals must be made with the same guarantee fund account. Please enter real
              information.
            </p>
            <p><br></p>
            <p>2. The linked CPF account cannot be changed. Please choose carefully.</p>
            <p><br></p>
            <p>
              3. Please use the linked CPF to top up. Unlinked accounts will fail, and the user will be
              responsible. Please check the information before trading.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
