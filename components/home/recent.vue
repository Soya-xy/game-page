<script lang="ts" setup>
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'
import Autoplay from 'embla-carousel-autoplay'
</script>

<template>
  <div>
    <BaseTitle name="Recent Big Wins" icon />
    <div>
      <Carousel
        class="w-ful" :opts="{
          loop: true,
        }" :plugins="[
          Autoplay({
            delay: 50000,
            stopOnInteraction: false,
            stopOnMouseEnter: true,
          }),
        ]"
      >
        <CarouselContent class="w-full">
          <CarouselItem v-for="(_, index) in 20" :key="index" class="basis-[57px]">
            <div class="p-1">
              <span class="text-3xl font-semibold">{{ index + 1 }}</span>
            </div>
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </div>
  </div>
</template>

<style></style>
