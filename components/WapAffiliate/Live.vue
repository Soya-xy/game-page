<script lang="ts" setup>
const containerRef = ref()
useSwiper(containerRef, {
  slidesPerView: 2,
  slidesPerGroup: 2,
  spaceBetween: 8,
  height: 40,
  direction: 'vertical',
  autoplay: {
    delay: 2000,
  },
})
</script>

<template>
  <div>
    <div class="text-[15px] font-bold text-white mb-[10px]">
      Live Rewards
    </div>
    <div class="flex flex-col items-center gap-x-[4px] gap-y-[10px] px-[15px] py-[10px] bg-color2 rounded-[6px]">
      <div class="flex items-center shrink-0 justify-start w-full">
        <div
          class="w-[33px] h-[33px] shrink-0 bg-no-repeat bg-cover bg-center"
          style="background-image: url(https://web-res-ccc.afunimg8.com/cdn-cgi/image/format=auto/C02/bonusCenter/task_weekly_icon.png?t=20231205);"
        />
        <div class="flex-1 mr-[25px] ml-[10px] text-left flex gap-2">
          <div class="text-[10px] text-color mb-[6px]">
            Send total commission
          </div>
          <div class="text-color-linear-20 text-[12px] font-black whitespace-pre">
            <span class="whitespace-pre">R$22,015,960.65</span>
          </div>
        </div>
      </div>
      <div class="w-full h-[1px] shrink-0 bg-color5" />
      <div class="shrink-0 overflow-hidden w-full h-[40px]">
        <swiper-container ref="containerRef" :init="false" class="flex justify-start w-full">
          <swiper-slide v-for="i in 10" :key="i">
            <div class="h-[15px]">
              <div class="h-[15px] flex items-center">
                <div
                  class="w-[17px] h-[17px] rounded-full bg-no-repeat bg-cover bg-center relative mr-[20px]"
                  style="background-image: url(https://web-res-ccc.afunimg8.com/cdn-cgi/image/format=auto/C02/userinfo/header/h_3.jpg?t=20231004);"
                >
                  <div
                    class="w-[8px] h-[8px] bg-no-repeat bg-cover bg-center absolute -right-[8px] top-[10px]"
                    style="background-image: url(https://web-res-ccc.afunimg8.com/cdn-cgi/image/format=auto/C02/vip/s/vip4.png);"
                  />
                </div>
                <div class="flex flex-wrap gap-[4px] text-[10px]">
                  <div class="text-white">
                    {{ i }}
                  </div>
                  <div class="text-color">
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
