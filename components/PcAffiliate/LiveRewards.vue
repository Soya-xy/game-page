<script lang="ts" setup>
const containerRef = ref()
useSwiper(containerRef, {
  slidesPerView: 2,
  slidesPerGroup: 2,
  spaceBetween: 8,
  height: 100,
  grid: {
    rows: 2,
  },
  direction: 'vertical',
  autoplay: {
    delay: 2000,
  },
})
</script>

<template>
  <div>
    <div class="text-[20px] font-bold text-white mb-[10px]">
      Live Rewards
    </div>
    <div class="border-radius-0 flex items-center justify-between py-[10px] px-[20px] bg-color2">
      <div class="w-[max-content] min-w-[350px] flex items-center shrink-0">
        <div
          class="w-[85px] h-[85px] shrink-0 bg-no-repeat bg-cover bg-center"
          style="background-image: url(https://web-res-ccc.afunimg8.com/cdn-cgi/image/format=auto/C02/bonusCenter/task_weekly_icon.png?t=20231205);"
        />
        <div class="flex-1 mr-[25px] ml-[10px] text-left">
          <div class="text-[14px] text-color mb-[6px]">
            Send total commission
          </div>
          <div class="text-color-linear-20 text-[24px] font-black whitespace-pre">
            <span class="whitespace-pre">R$22,015,960.65</span>
          </div>
        </div>
      </div>
      <div class="w-[1px] h-[60px] shrink-0 bg-color5" />
      <div class="flex-1 shrink-0 h-[100px] overflow-hidden">
        <swiper-container ref="containerRef" :init="false" class="pl-[50px] flex">
          <swiper-slide v-for="i in 10" :key="i" class="w-[50%] !ml-0">
            <div class="h-[50px]">
              <div class="h-full flex items-center">
                <div
                  class="w-[30px] h-[30px] rounded-full bg-no-repeat bg-cover bg-center relative mr-[20px]"
                  style="background-image: url(https://web-res-ccc.afunimg8.com/cdn-cgi/image/format=auto/C02/userinfo/header/h_3.jpg?t=20231004);"
                >
                  <div
                    class="w-[18px] h-[20px] bg-no-repeat bg-cover bg-center absolute -right-[8px] top-[10px]"
                    style="background-image: url(https://web-res-ccc.afunimg8.com/cdn-cgi/image/format=auto/C02/vip/s/vip4.png);"
                  />
                </div>
                <div class="flex flex-wrap gap-[4px]">
                  <div class="text-white">
                    {{ i }}
                  </div>
                  <div class="text-color text-[14px]">
                    Commission <span class="text-green">R$1.04</span>
                  </div>
                </div>
              </div>
            </div>
          </swiper-slide>
        </swiper-container>
      </div>
    </div>
  </div>
</template>

<style></style>
