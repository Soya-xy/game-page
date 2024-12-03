<script lang="ts" setup>
import { replaceMiddle } from '~/lib/utils'

const containerRef = ref()
const games = ref(Array.from({ length: 20 }))
useSwiper(containerRef, {
  loop: true,
  slidesPerView: 'auto',
  spaceBetween: 12,
  autoplay: {
    delay: 700,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },
  injectStyles: [
    `.swiper-wrapper {
      transition-timing-function: cubic-bezier(.42,0,.58,1);
    }
  `,
  ],
})
</script>

<template>
  <div>
    <BaseTitle name="Recent Big Wins" icon />
    <div>
      <ClientOnly>
        <swiper-container ref="containerRef" :init="false" class="w-full flex ">
          <swiper-slide v-for="(game, index) in games" :key="index" class="w-auto flex flex-col items-center">
            <div class="w-[57px] h-[75px]">
              <Image src="https://avatars.githubusercontent.com/u/56671014?s=40&v=4" loading="lazy" class="rounded" />
            </div>
            <div class="text-center text-[10px] mt-[2px]  flex flex-col items-center">
              <span class="text-color font-[600]">
                {{ replaceMiddle('123') }}
              </span>
              <span class="text-green  font-[800]">
                ${{ (1234.12).toLocaleString() }}
              </span>
            </div>
          </swiper-slide>
        </swiper-container>
      </ClientOnly>
    </div>
  </div>
</template>
