<script lang="ts" setup>
import { asyncHomeBigWins } from '~/api/home'
import { replaceMiddle } from '~/lib/utils'

const containerRef = ref()
useSwiper(containerRef, {
  loop: true,
  slidesPerView: 'auto',
  spaceBetween: 12,
  freeMode: true,
  speed: 1000,
  autoplay: {
    delay: 0,
    stopOnLastSlide: false,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },
  injectStyles: [
    `
    .swiper-free-mode .swiper-wrapper {
      transition-timing-function: linear;
    }
  `,
  ],
})
const { data: games } = await asyncHomeBigWins()
</script>

<template>
  <div>
    <BaseTitle name="Recent Big Wins" icon />
    <div>
      <ClientOnly>
        <swiper-container ref="containerRef" :init="false" class="w-full flex ">
          <swiper-slide v-for="(game, index) in games" :key="index" class="w-auto flex flex-col items-center">
            <div class="w-[57px] h-[75px]">
              <Image :src="game.gameImageUrl" loading="lazy" class="rounded" />
            </div>
            <div class="text-center text-[10px] mt-[2px]  flex flex-col items-center">
              <span class="text-color font-[600]">
                {{ replaceMiddle(game.gameName) }}
              </span>
              <span class="text-green  font-[800]">
                ${{ (game.winAmount || 0).toFixed(2).toLocaleString() }}
              </span>
            </div>
          </swiper-slide>
        </swiper-container>
      </ClientOnly>
    </div>
  </div>
</template>
