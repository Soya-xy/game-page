<script lang="ts" setup>
import { addBrowser, asyncBannerList } from '~/api/banner'

defineOptions({
  inheritAttrs: false,
})

const store = useUserStore()
const { token } = storeToRefs(store)
const containerRef = ref()
useSwiper(containerRef, {
  slidesPerView: 1,
  spaceBetween: 13,
  pagination: {
    el: '.my-pagination',
    type: 'custom',
    clickable: true,
    renderCustom(_swiper, current, total) {
      return Array.from({ length: total }).map((_, index) => {
        return `<span class="my-bullet relative rounded-full h-[6px]
        ${(index + 1) === current ? 'my-bullet-active' : ''}
        ${(index + 1) === current ? 'my-bullet-animation' : ''}
        ${(index + 1) === current ? '!w-[56px]' : ''}
        ${(index + 1) !== current ? 'w-[6px]' : ''}
          "></span>`
      }).join('')
    },
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
      slidesPerGroup: 1,
    },
    720: {
      slidesPerView: 2,
      slidesPerGroup: 2,
    },
    1024: {
      slidesPerView: 3,
      slidesPerGroup: 3,
    },
  },
  autoplay: {
    delay: 3000,
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
const { data: games } = await asyncBannerList()

const eventHandler = useTrack((id: number) => {
  addBrowser(id)
})
</script>

<template>
  <div v-show="token" class="min-h-[125px] flex flex-col gap-y-[12px]">
    <ClientOnly>
      <swiper-container ref="containerRef" :init="false" class="w-full h-full">
        <swiper-slide v-for="(game, index) in games" :key="index" class="w-auto h-[41.315%]">
          <div class="bg-no-repeat bg-cover rounded-[10px] cursor-pointer" @click="() => eventHandler(game.id)">
            <Image
              :src="game.picUrl"
              loading="lazy" class="rounded w-full !h-auto"
              :alt="game.title"
            />
          </div>
        </swiper-slide>
      </swiper-container>
      <div class="my-pagination flex justify-center items-center gap-[4px]" />
    </ClientOnly>
  </div>
  <HomeBanner v-show="!token" />
</template>
