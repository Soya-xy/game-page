<script setup>
import NumberFlow from '@number-flow/vue'

const value = ref(123456789)
setInterval(() => {
  value.value = value.value + Math.random() * 100
}, 5000)
</script>

<template>
  <div
    class="relative w-auto rounded-[10px] bg-no-repeat bg-cover overflow-hidden h-[120px] px-[36px] font-extrabold text-white flex items-center justify-between
    max-md:gap-y-[20px] max-md:flex-col max-md:justify-center max-md:h-[180px]"
    style="background-image: url(/images/afun/e_bg_pc.avif);"
  >
    <div class="flex relative flex-col items-center justify-between px-[15%]">
      <div class="flex items-center justify-between w-[330px] gap-x-2">
        <i-svg-wheat class="  text-white cursor-pointer scale-x-[-1]" />
        <span class="font-extrabold text-white leading-[29px] text-[28px] text-nowrap">Jackpot prize pool</span>
        <i-svg-wheat class="  text-white cursor-pointer" />
      </div>
      <Image lazy src="/images/afun/e_coin_tl.avif" class="absolute top-[-10px] w-[40px] h-[35px] left-[40px]" />
      <Image lazy src="/images/afun/e_coin_bl.avif" class="absolute top-[40px] w-[50px] h-[44px] left-0" />
      <Image lazy src="/images/afun/e_coin_tr.avif" class="absolute top-[-10px] w-[44px] h-[38px] right-[36px]" />
      <Image lazy src="/images/afun/e_coin_br.avif" class="absolute top-[40px] w-[46px] h-[40px] right-[0px]" />

      <div class=" font-extrabold leading-[21px] text-[32px] relative z-[3] mt-[20px] flex items-center justify-center">
        <NumberFlow
          :value :format="{
            style: 'currency', currency: 'USD', currencyDisplay: 'narrowSymbol',
          }" :transform-timing="{ duration: 750 }" class="text-[#dfcd6c]"
        />
      </div>
    </div>
    <button
      class="rounded-[10px] w-[max-content] bg-button-linear min-w-[110px] h-[42px] text-[15px] text-color flex items-center justify-center px-[15px] z-[3] hover:brightness-105"
    >
      Get
      it now
    </button>
  </div>
</template>
