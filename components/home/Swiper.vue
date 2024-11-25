<script lang="ts" setup>
const containerRef = ref()
const games = ref(Array.from({ length: 20 }))
useSwiper(containerRef, {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 13,
  pagination: {
    el: '.my-pagination',
    type: 'custom',
    clickable: true,
    renderCustom(swiper, current, total) {
      return Array.from({ length: total }).map((_, index) => {
        return `<span class="my-bullet relative rounded-full h-[6px] w-[6px]
        ${index === current ? 'my-bullet-active' : ''}
        ${index === current ? 'my-bullet-animation' : ''}
        ${index === current ? '!w-[56px]' : ''}
        ${index !== current ? 'w-[6px]' : ''}
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
</script>

<template>
  <div class="min-h-[125px] flex flex-col gap-y-[12px]">
    <ClientOnly>
      <swiper-container ref="containerRef" :init="false" class="w-full h-full">
        <swiper-slide v-for="(game, index) in games" :key="index" class="w-auto h-[41.315%]">
          <div class="bg-no-repeat bg-cover rounded-[10px] cursor-pointer">
            <Image
              src="https://buck.engames.com/cdn-cgi/image/f=auto,w=343,dpr=3,q=80/buck/AfunGlobal/NEW/EN20241026-11.png"
              loading="lazy" class="rounded w-full"
            />
          </div>
        </swiper-slide>
      </swiper-container>
      <div class="my-pagination flex justify-center items-center gap-[4px]" />
    </ClientOnly>
  </div>
</template>
