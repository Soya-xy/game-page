<script lang="ts" setup>
import { ChevronLeft, ChevronRight } from 'lucide-vue-next'

const info = {
  src: 'https://web-res-aaa.afunimg5.com/cdn-cgi/image/f=auto,w=110.33,dpr=2,q=80/newres/gameicon_en6010/008/100802058.jpg',
  rtp: 96.55,
  name: 'Money Coming',
  great: 10000,
  isHot: true,
}
const title = defineProp('', true)
const haveMore = defineProp<boolean>(undefined, false)
const containerRef = ref()
const games = ref(Array.from({ length: 20 }))

const swiper = useSwiper(containerRef, {
  slidesPerView: 3,
  slidesPerGroup: 3,
  spaceBetween: 8,
  breakpoints: {
    320: {
      slidesPerView: 3,
      slidesPerGroup: 3,
    },
    480: {
      slidesPerView: 3,
      spaceBetween: 3,
    },
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

const progress = ref(0)
function next(type: 'up' | 'down') {
  if (type === 'up') {
    swiper.prev()
  }
  else {
    swiper.next()
  }
  progress.value = swiper.instance.value?.progress || 0
}
</script>

<template>
  <div>
    <BaseTitle :name="title">
      <template #action>
        <div class="flex items-center gap-2 h-full  ">
          <div
            v-if="haveMore"
            class="
              h-[32px] px-2 font-bold
              text-sm text-primary cursor-pointer
              bg-page rounded-[8px] flex justify-center items-center
            "
          >
            <span>More</span>
            <i class="i-mdi-chevron-right font-bold" />
          </div>
          <div class="flex items-center gap-2">
            <Button
              :disabled="progress === 0" class="bg-page w-[30px] h-[32px] rounded-[8px] hover:bg-page text-white"
              @click="next('up')"
            >
              <ChevronLeft class="h-4 w-4" />
            </Button>
            <Button
              :disabled="progress === 1" class="bg-page w-[30px] h-[32px] rounded-[8px] hover:bg-page text-white"
              @click="next('down')"
            >
              <ChevronRight class="h-4 w-4" />
            </Button>
          </div>
        </div>
      </template>
    </BaseTitle>
    <ClientOnly>
      <swiper-container ref="containerRef" class="w-full flex h-full">
        <swiper-slide v-for="(game, index) in games" :key="index" class="flex-shrink-0">
          <BaseGameCard :key="index" :info />
        </swiper-slide>
      </swiper-container>
    </ClientOnly>
  </div>
</template>

<style></style>
