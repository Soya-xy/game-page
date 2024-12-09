<script lang="ts" setup>
import { ChevronLeft, ChevronRight } from 'lucide-vue-next'
import { asyncSportsData } from '~/api/home'

const { data } = await asyncSportsData()

const title = defineProp('')
const containerRef = ref()

const swiper = useSwiper(containerRef, {
  slidesPerView: 1,
  slidesPerGroup: 1,
  spaceBetween: 8,
  breakpoints: {
    700: {
      slidesPerView: 1,
      slidesPerGroup: 1,
    },
    720: {
      slidesPerView: 2,
      slidesPerGroup: 2,
    },
    1280: {
      slidesPerView: 3,
      slidesPerGroup: 3,
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
        <swiper-slide v-for="(game, index) in data" :key="index" class="flex-shrink-0">
          <BaseFootball :key="index" :info="game" />
        </swiper-slide>
      </swiper-container>
    </ClientOnly>
  </div>
</template>

<style></style>
