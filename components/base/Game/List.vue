<script lang="ts" setup>
const info = {
  src: 'https://web-res-aaa.afunimg5.com/cdn-cgi/image/f=auto,w=110.33,dpr=2,q=80/newres/gameicon_en6010/008/100802058.jpg',
  rtp: 96.55,
  name: 'Money Coming',
  great: 10000,
  isHot: true,
}
const title = defineProp('')
const containerRef = templateRef('containerRef')
const games = ref(Array.from({ length: 20 }))
const page = ref(1)

const swiper = useSwiper(containerRef, {
  slidesPerView: 1,
  slidesPerGroup: 1,
  spaceBetween: 8,
  breakpoints: {
    640: {
      slidesPerView: 3,
      slidesPerGroup: 3,
    },
    700: {
      slidesPerView: 4,
      slidesPerGroup: 4,
    },
    864: {
      slidesPerView: 5,
      slidesPerGroup: 5,
    },
    1024: {
      slidesPerView: 6,
      slidesPerGroup: 6,
    },
    1280: {
      slidesPerView: 8,
      slidesPerGroup: 8,
    },
  },
})
</script>

<template>
  <div>
    <BaseTitle :name="title">
      <template #action>
        <div class="flex items-center gap-2 h-full  ">
          <div
            class="
              h-[32px] px-2 font-bold
              text-sm text-primary cursor-pointer
              bg-page rounded-[8px] flex justify-center items-center
            "
          >
            <span>More</span>
            <i class="i-mdi-chevron-right font-bold" />
          </div>
          <BasePage v-model="page" :total="20" :size="5" @prev="swiper.prev()" @next="swiper.next()" />
        </div>
      </template>
    </BaseTitle>
    <ClientOnly>
      <swiper-container ref="containerRef" :init="false" class="w-full flex h-full">
        <swiper-slide v-for="(game, index) in games" :key="index" class="flex-shrink-0">
          <BaseGameCard :info />
        </swiper-slide>
      </swiper-container>
    </ClientOnly>
  </div>
</template>

<style></style>
