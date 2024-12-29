<script lang="ts" setup>

</script>

<template>
  <div class="flex-[1] px-[40px] pt-[20px] overflow-auto">
    <ul class="flex flex-wrap gap-[10px] mb-[30px]">
      <li
        v-for="item in 7" :key="item"
        class="check-in-item border-radius-0 text-[12px] p-[10px] text-center leading-[19px] relative"
        :class="{ 'flex-1': item === 7 }"
      >
        <div class="h-[50px] relative text-[0px] mb-[6px] flex items-center justify-center">
          <img
            src="https://web-res-ccc.afunimg8.com/cdn-cgi/image/format=auto/dev_skin/C02/wallet/currency/BRL.png"
            alt="" importance="auto"
            class="w-[20px] h-[20px] text-[10px] font-bold flex items-center justify-center shrink-0"
            style="transform: scale(2.4); margin-left: 14.5px; margin-right: 14.5px;"
          >
        </div>
        <div class="font-bold text-white bg-color2 rounded-[100px] max-w-[80px] mx-auto">
          +
          <span class="whitespace-pre">1.50</span>
        </div>
        <div class="leading-[1] mt-[6px] flex items-center justify-center">
          <span v-if="item === 1" class="text-active">Today</span>
          <span v-else class="text-color">
            Day {{ item }}
          </span>
        </div>
        <div class="check-in-animate-container">
          <img
            v-for="star in 5" :key="star"
            :src="`https://web-res-ccc.afunimg8.com/cdn-cgi/image/format=auto/C02/checkin/star-${star}.png`" alt=""
            importance="auto"
          >
        </div>
      </li>
    </ul>
    <button
      class="flex items-center min-h-[46px] justify-center w-full uppercase main-color-btn text-font border-radius-0 text-[14px] font-bold "
    >
      Check
      In
    </button>
    <div class="mt-[10px] text-[14px] text-color">
      <p>Conditions:</p>
      <ul class="mt-[2px] list-disc list-outside ml-[16px]">
        <li>Deposit <span class="whitespace-pre">R$20.00</span></li>
      </ul>
    </div>
    <div class="border-solid border-[1px] border-[--bc-bgColor9] border-radius-0 p-[10px] mt-[10px]">
      <div class="mb-[10px] text-[16px] font-[600] text-color">
        Rules
      </div>
    </div>
  </div>
</template>

<style scoped>
.check-in-item {
  height: 118px;
  width: calc(25% - 7.5px);
}

.check-in-animate-container {
  height: 100%;
  inset: 0;
  margin: auto;
  position: absolute;
  width: 100%;
}

.check-in-animate-container.click img:first-child {
  animation: starMovePc1 0.8s forwards;
}

.check-in-animate-container.click img:nth-child(2) {
  animation: starMovePc2 0.8s 50ms forwards;
}

.check-in-animate-container.click img:nth-child(3) {
  animation: starMovePc3 0.75s 80ms forwards;
}

.check-in-animate-container.click img:nth-child(4) {
  animation: starMovePc4 0.5s 0.2s forwards;
}

.check-in-animate-container.click img:nth-child(5) {
  animation: starMovePc5 0.7s 0.12s forwards;
}

.check-in-animate-container img {
  height: 0;
  inset: 0;
  margin: auto;
  opacity: 1;
  position: absolute;
  width: 0;
}

@keyframes starMovePc1 {
  0% {
    height: 0;
    opacity: 0;

    transform: translateZ(0);
    width: 0;
  }

  2% {
    height: 18px;
    opacity: 0.1;

    transform: translateZ(0);
    width: 18px;
  }

  40% {
    height: 18px;
    opacity: 1;
    -webkit-transform: translate3d(18px, -40px, 0);
    -moz-transform: translate3d(18px, -40px, 0);
    transform: translate3d(18px, -40px, 0);
    width: 18px;
  }

  to {
    height: 18px;
    opacity: 0;
    -webkit-transform: translate3d(18px, -40px, 0);
    -moz-transform: translate3d(18px, -40px, 0);
    transform: translate3d(18px, -40px, 0);
    width: 18px;
  }
}

@keyframes starMovePc2 {
  0% {
    height: 0;
    opacity: 0;

    transform: translateZ(0);
    width: 0;
  }

  2% {
    height: 18px;
    opacity: 0.1;

    transform: translateZ(0);
    width: 18px;
  }

  40% {
    height: 18px;
    opacity: 1;
    -webkit-transform: translate3d(-32px, -30px, 0);
    -moz-transform: translate3d(-32px, -30px, 0);
    transform: translate3d(-32px, -30px, 0);
    width: 18px;
  }

  to {
    height: 18px;
    opacity: 0;
    -webkit-transform: translate3d(-32px, -30px, 0);
    -moz-transform: translate3d(-32px, -30px, 0);
    transform: translate3d(-32px, -30px, 0);
    width: 18px;
  }
}

@keyframes starMovePc3 {
  0% {
    height: 0;
    opacity: 0;

    transform: translateZ(0);
    width: 0;
  }

  2% {
    height: 20px;
    opacity: 0.1;

    transform: translateZ(0);
    width: 20px;
  }

  40% {
    height: 20px;
    opacity: 1;
    -webkit-transform: translate3d(30px, -24px, 0);
    -moz-transform: translate3d(30px, -24px, 0);
    transform: translate3d(30px, -24px, 0);
    width: 20px;
  }

  to {
    height: 14px;
    opacity: 0;
    -webkit-transform: translate3d(30px, -24px, 0);
    -moz-transform: translate3d(30px, -24px, 0);
    transform: translate3d(30px, -24px, 0);
    width: 14px;
  }
}

@keyframes starMovePc4 {
  0% {
    height: 0;
    opacity: 0;

    transform: translateZ(0);
    width: 0;
  }

  2% {
    height: 24px;
    opacity: 0.1;

    transform: translateZ(0);
    width: 24px;
  }

  40% {
    height: 24px;
    opacity: 1;
    -webkit-transform: translate3d(-25px, 30px, 0);
    -moz-transform: translate3d(-25px, 30px, 0);
    transform: translate3d(-25px, 30px, 0);
    width: 24px;
  }

  to {
    height: 18px;
    opacity: 0;
    -webkit-transform: translate3d(-25px, 30px, 0);
    -moz-transform: translate3d(-25px, 30px, 0);
    transform: translate3d(-25px, 30px, 0);
    width: 18px;
  }
}

@keyframes starMovePc5 {
  0% {
    height: 0;
    opacity: 0;

    transform: translateZ(0);
    width: 0;
  }

  2% {
    height: 24px;
    opacity: 0.1;

    transform: translateZ(0);
    width: 24px;
  }

  40% {
    height: 24px;
    opacity: 1;

    transform: translate3d(30px, 30px, 0);
    width: 24px;
  }

  to {
    height: 16px;
    opacity: 0;

    transform: translate3d(30px, 30px, 0);
    width: 16px;
  }
}
</style>
