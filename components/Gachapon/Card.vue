<script lang="ts" setup>
import { Motion } from 'motion-v'

const show = defineModel<boolean>('show')
const result = defineProp<any>('result')
const cardVariants = {
  // 定义卡片旋转的不同状态
  initial: {
    rotateY: 0,
    scale: 0,
  },
  animate: {
    rotateY: 360 * 3,
    scale: 1,
  },
}

const innerVariants = {
  // 定义卡片内部旋转的不同状态
  initial: { rotateY: 0, opacity: 0 },
  animate: { rotateY: 360 * 3, opacity: 1 },
}

function close() {
  show.value = false
}
</script>

<template>
  <div v-if="show" class="relative">
    <Motion
      class="fixed inset-0 z-20 flex justify-center items-center bg-[--bc-alphaBlackB3]"
      :initial="{ scale: 0, opacity: 0 }" :animate="{ scale: 1, opacity: 1 }" :transition="{
        type: 'spring',
        stiffness: 260,
        damping: 20,
        delay: 0.3,
      }" @click="close"
    />
    <div class="fixed top-1/2 left-1/2 z-[21] -translate-x-1/2 -translate-y-1/2">
      <Motion
        class="w-[240px] h-[320px] perspective-1000" :variants="cardVariants" initial="initial" animate="animate"
        :transition="{ duration: 1, ease: 'easeInOut' }"
      >
        <Motion
          class="w-full h-full relative transform-style-3d" :variants="innerVariants" initial="initial"
          animate="animate" :transition="{ duration: 1, ease: 'easeInOut' }"
        >
          <div class="absolute w-full h-full flex justify-center items-center text-xl text-white">
            <Image :src="result.imageUrl" preload />
          </div>
          <div class="absolute w-full h-full justify-center flex items-center text-xl text-white transform rotateY-180">
            <Image :src="result.imageUrl" preload />
          </div>
        </Motion>
      </Motion>
      <Motion
        :initial="{ opacity: 0 }" :animate="{ opacity: 1 }" :transition="{ duration: 1.5, ease: 'easeInOut' }"
        as-child
      >
        <button
          class=" px-[20px] h-[40px] text-[--bc-textColor3] bg-color-linear-24 border-radius-0 text-[14px] font-bold mx-auto  min-w-[200px] w-full relative z-[13] mt-3"
          @click="close"
        >
          Claim
        </button>
      </Motion>
    </div>
  </div>
</template>

<style>
.perspective-1000 {
  perspective: 1000px;
}
</style>
