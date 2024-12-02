<script lang="ts" setup>
// eslint-disable-next-line ts/ban-ts-comment
// @ts-expect-error
import ColorThief from 'colorthief'

const colorThief = new ColorThief()

function getColor(dom: string) {
  const img = document.getElementById(dom)

  if (img) {
    img.addEventListener('load', (e) => {
      const d = colorThief.getPalette(e.target, 10)
      const color = d[4]
      const deposit = document.getElementById(`deposit-${dom}`)
      if (deposit) {
        deposit.style.borderColor = `rgb(${color[0]}, ${color[1]}, ${color[2]})`
        deposit.style.backgroundImage = `linear-gradient(162deg, rgb(${color[0]}, ${color[1]}, ${color[2]}) -3.8%, var(--bc-buttonColor) 95.14%)`
      }
    })
  }
}

onMounted(() => {
  [1, 2, 3, 4].forEach((item) => {
    getColor(`icon-${item}`)
  })
})
</script>

<template>
  <div class="w-full">
    <div class="rounded-[10px] bg-color2 overflow-hidden">
      <div
        class="h-[180px] md:px-[50px] px-[12px] py-[15px] flex items-center bg-color3-linear justify-between md:gap-[20px] rounded-[inherit] max-xl:h-auto max-xl:flex-wrap max-lg:flex-col max-lg:items-start max-lg:justify-start"
      >
        <dl class="max-lg:flex max-lg:justify-between max-lg:items-center max-lg:w-full">
          <dt class="flex flex-col gap-y-[4px]">
            <h4 class="md:text-[20px] text-[15px] font-bold text-white">
              Great bonus for every deposit
            </h4>
            <h3 class="md:text-[38px] text-[20px] font-extrabold text-linearColor">
              Up to 50%
            </h3>
            <p class="md:text-[14px] text-[12px] font-medium text-color3">
              Refresh time
            </p>
          </dt>

          <dd class="hidden items-center gap-[15px] mt-[20px] md:flex max-lg:flex-col max-lg:mt-0">
            <button
              class="border-radius-0 w-[max-content] min-w-[154px] h-[42px] text-[15px] text-color font-semibold flex items-center justify-center px-[15px] bg-page hover:brightness-105"
            >
              Detail
            </button><button
              class="border-radius-0 w-[max-content] main-color-btn min-w-[154px] h-[42px] text-[15px] text-font font-extrabold flex items-center justify-center px-[15px] hover:brightness-105"
            >
              Deposit
            </button>
          </dd>

          <!-- 移动端Deposit -->
          <button
            class="rounded md:hidden w-[max-content] min-w-[77px] h-[32px] text-[12px] main-color-btn text-font font-extrabold flex items-center justify-center px-[15px]"
          >
            Deposit
          </button>
          <dd class="hidden items-center gap-[15px] mt-[20px]">
            <button
              class="rounded-[10px] w-[max-content] min-w-[154px] h-[42px] text-[15px] text-white font-semibold flex items-center justify-center px-[15px] bg-e-g-color-13 hover:brightness-105"
            >
              Detail
            </button>
            <button
              class="rounded-[10px]  main-color-btn min-w-[154px] h-[42px] text-[15px] text-font font-extrabold flex items-center justify-center px-[15px] hover:brightness-105"
            >
              Deposit
            </button>
          </dd>
        </dl>
        <ul class="hidden md:flex w-[485px] items-center justify-between">
          <li
            class="h-[150px] w-[107px] py-[10px] flex flex-col justify-between items-center rounded-[10px] relative"
            style="border: 1px solid rgb(89, 186, 41); background: linear-gradient(162deg, rgb(89, 186, 41) -3.8%, rgba(89, 186, 41, 0) 95.14%);"
          >
            <div class="text-[14px] font-black text-white">
              10%<span class="text-[12px] font-medium ml-[4px]">Bonus</span>
            </div>
            <img
              src="https://web-res-ccc.afunimg8.com/cdn-cgi/image/format=auto/C02/_E/home/depositBanner/box1.png"
              importance="auto" class="w-[100px] absolute left-0 right-0 bottom-[25px] mx-auto"
            >
            <div class="w-[102px] h-[22px] flex items-center justify-end relative">
              <span
                class="leading-[20px] text-center w-[92px] text-[10px] font-medium rounded-[4px] text-e-g-color-19 break-words break-all line-clamp-1"
                style="background: rgba(17, 33, 51, 0.4);"
              >1st Deposit</span>
              <div
                class="w-[19px] h-[21.5px] text-[8px] text-e-g-color-5 font-extrabold text-center pt-[4px] absolute left-0 bg-no-repeat bg-cover"
                style="background-image: url(&quot;https://web-res-ccc.afunimg8.com/cdn-cgi/image/format=auto/C02/_E/home/depositBanner/icon1.png&quot;);"
              >
                01
              </div>
            </div>
          </li>
          <li
            class="h-[150px] w-[107px] py-[10px] flex flex-col justify-between items-center rounded-[10px] relative"
            style="border: 1px solid rgb(47, 123, 222); background: linear-gradient(162deg, rgb(47, 123, 222) -3.8%, rgba(47, 123, 222, 0) 95.14%);"
          >
            <div class="text-[14px] font-black text-white">
              10%<span class="text-[12px] font-medium ml-[4px]">Bonus</span>
            </div><img
              src="https://web-res-ccc.afunimg8.com/cdn-cgi/image/format=auto/C02/_E/home/depositBanner/box2.png"
              importance="auto" class="w-[100px] absolute left-0 right-0 bottom-[25px] mx-auto"
            >
            <div class="w-[102px] h-[22px] flex items-center justify-end relative">
              <span
                class="leading-[20px] text-center w-[92px] text-[10px] font-medium rounded-[4px] text-e-g-color-19 break-words break-all line-clamp-1"
                style="background: rgba(17, 33, 51, 0.4);"
              >2nd Deposit</span>
              <div
                class="w-[19px] h-[21.5px] text-[8px] text-e-g-color-5 font-extrabold text-center pt-[4px] absolute left-0 bg-no-repeat bg-cover"
                style="background-image: url(&quot;https://web-res-ccc.afunimg8.com/cdn-cgi/image/format=auto/C02/_E/home/depositBanner/icon2.png&quot;);"
              >
                02
              </div>
            </div>
          </li>
          <li
            class="h-[150px] w-[107px] py-[10px] flex flex-col justify-between items-center rounded-[10px] relative"
            style="border: 1px solid rgb(217, 38, 38); background: linear-gradient(141deg, rgb(217, 38, 38) 1.72%, rgba(217, 38, 38, 0) 94.68%);"
          >
            <div class="text-[14px] font-black text-white">
              10%<span class="text-[12px] font-medium ml-[4px]">Bonus</span>
            </div><img
              src="https://web-res-ccc.afunimg8.com/cdn-cgi/image/format=auto/C02/_E/home/depositBanner/box3.png"
              importance="auto" class="w-[100px] absolute left-0 right-0 bottom-[25px] mx-auto"
            >
            <div class="w-[102px] h-[22px] flex items-center justify-end relative">
              <span
                class="leading-[20px] text-center w-[92px] text-[10px] font-medium rounded-[4px] text-e-g-color-19 break-words break-all line-clamp-1"
                style="background: rgba(17, 33, 51, 0.4);"
              >3rd Deposit</span>
              <div
                class="w-[19px] h-[21.5px] text-[8px] text-e-g-color-5 font-extrabold text-center pt-[4px] absolute left-0 bg-no-repeat bg-cover"
                style="background-image: url(&quot;https://web-res-ccc.afunimg8.com/cdn-cgi/image/format=auto/C02/_E/home/depositBanner/icon3.png&quot;);"
              >
                03
              </div>
            </div>
          </li>
          <li
            class="h-[150px] w-[107px] py-[10px] flex flex-col justify-between items-center rounded-[10px] relative"
            style="border: 1px solid rgb(184, 47, 222); background: linear-gradient(140deg, rgb(184, 47, 222) 2.04%, rgba(184, 47, 222, 0) 94.4%);"
          >
            <div class="text-[14px] font-black text-white">
              20%<span class="text-[12px] font-medium ml-[4px]">Bonus</span>
            </div><img
              src="https://web-res-ccc.afunimg8.com/cdn-cgi/image/format=auto/C02/_E/home/depositBanner/box4.png"
              importance="auto" class="w-[100px] absolute left-0 right-0 bottom-[25px] mx-auto"
            >
            <div class="w-[102px] h-[22px] flex items-center justify-end relative">
              <span
                class="leading-[20px] text-center w-[92px] text-[10px] font-medium rounded-[4px] text-e-g-color-19 break-words break-all line-clamp-1"
                style="background: rgba(17, 33, 51, 0.4);"
              >4th Deposit</span>
              <div
                class="w-[19px] h-[21.5px] text-[8px] text-e-g-color-5 font-extrabold text-center pt-[4px] absolute left-0 bg-no-repeat bg-cover"
                style="background-image: url(&quot;https://web-res-ccc.afunimg8.com/cdn-cgi/image/format=auto/C02/_E/home/depositBanner/icon4.png&quot;);"
              >
                04
              </div>
            </div>
          </li>
        </ul>

        <!-- 移动端Deposit -->
        <ul class="md:hidden grid grid-cols-2 gap-[10px] mt-[12px] w-full">
          <li
            v-for="item in 4" :id="`deposit-icon-${item}`" :key="item"
            class="h-[70px] rounded-[10px] px-[7px] flex items-center relative border-[1px] border-solid "
          >
            <div class="flex flex-col gap-y-[4px] relative z-[1]">
              <div class="text-[14px] font-black text-white">
                10%<span class="text-[12px] font-medium ml-[4px]">Bonus</span>
              </div>
              <div class="w-[102px] h-[22px] flex items-center justify-end relative">
                <span
                  class="leading-[20px] text-center w-[92px] text-[10px] font-medium rounded-[4px] text-color break-words break-all line-clamp-1"
                  style="background: rgba(40, 51, 38, 0.4);"
                >1st Deposit</span>
                <div
                  class="w-[20px] h-[22.63px] text-[10px] text-e-g-color-5 font-extrabold text-center pt-[3px] absolute left-0 bg-no-repeat bg-cover"
                  style="background-image: url(&quot;https://web-res-ccc.afunimg8.com/cdn-cgi/image/format=auto/C02/_E/home/depositBanner/icon1.png&quot;);"
                >
                  01
                </div>
              </div>
            </div><img
              :id="`icon-${item}`"
              :src="`https://web-res-ccc.afunimg8.com/cdn-cgi/image/format=auto/C02/_E/home/depositBanner/box${item}.png`"
              importance="auto" class="h-[40px] absolute right-[7px]" crossorigin="anonymous"
            >
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style></style>
