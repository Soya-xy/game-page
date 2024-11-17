<script lang="ts" setup>
const containerRef = ref(null)
const games = ref(Array.from({ length: 20 }))
useSwiper(containerRef, {
  // effect: 'creative',
  loop: true,
  slidesPerView: 'auto',
  spaceBetween: 12,
  autoplay: {
    delay: 1000,
    disableOnInteraction: false,
  },
})
</script>

<template>
  <div>
    <BaseTitle name="Recent Big Wins" icon />
    <div>
      <ClientOnly>
        <swiper-container ref="containerRef" :init="false" class="w-full flex">
          <swiper-slide v-for="(game, index) in games" :key="index" class="w-auto">
            <div class="w-[57px] h-[75px]">
              <Image src="https://avatars.githubusercontent.com/u/56671014?s=40&v=4" lazy class="rounded" />
            </div>
            <div class="text-center text-sm leading-[1rem] mt-[2px]">
              <p class="text-white">
                123
              </p>
              <p class="text-active">
                123
              </p>
            </div>
          </swiper-slide>
        </swiper-container>
      </ClientOnly>
    </div>
  </div>
</template>
