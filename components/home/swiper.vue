<script setup lang="ts">
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'
import Autoplay from 'embla-carousel-autoplay'
</script>

<template>
  <Carousel
    class="relative w-full max-w-sm" :opts="{
      loop: true,
    }" :plugins="[
      Autoplay({
        delay: 1000,
        stopOnInteraction: false,
        stopOnMouseEnter: true,
      }),
    ]"
  >
    <CarouselContent>
      <CarouselItem v-for="(_, index) in 5" :key="index" class="md:basis-1/2 lg:basis-1/3">
        <div class="p-1">
          <span class="text-3xl font-semibold">{{ index + 1 }}</span>
        </div>
      </CarouselItem>
    </CarouselContent>
  </Carousel>
</template>
