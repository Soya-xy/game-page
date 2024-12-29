<script setup lang="ts">
import { useRedPacket } from '~/composables/useRedPacket'

const {
  images,
  redPackets,
  isAnimating,
  startAnimation,
} = useRedPacket()

// 获取红包样式
function getPacketStyle(packet: RedPacketImage) {
  return {
    left: `calc(-55px + ${packet.left}vw)`,
    top: '-100px',
    transform: 'translate3d(0px, 0px, 0px)',
    transition: `opacity ${packet.duration}ms linear ${packet.delay}ms, transform ${packet.duration}ms linear ${packet.delay}ms`,
    opacity: packet.opacity,
  }
}

// 获取旋转样式
function getRotationStyle(packet: RedPacketImage) {
  return {
    transform: `rotate(${packet.rotation}deg)`,
  }
}
// 组件挂载后开始动画
onMounted(() => {
  startAnimation()
})
</script>

<template>
  <div class="fixed top-0 left-0 z-[3000] w-full h-full">
    <div class="red-packet-container">
      <template v-for="packet in redPackets" :key="packet.id">
        <div
          class="redpacket-img select-none pointer-events-none"
          :data-packet-id="packet.id"
          :class="[
            `z-[${packet.zIndex}]`,
            { 'animate-falling': isAnimating },
          ]"
          :style="{
            ...getPacketStyle(packet),
            '--falling-duration': `${packet.duration}ms`,
            '--falling-delay': `${packet.delay}ms`,
          }"
        >
          <div
            class="w-full h-full flex items-center justify-center pointer-events-none"
            :style="getRotationStyle(packet)"
          >
            <img
              :src="packet.type === 1 ? images.redPacket1 : images.redPacket2"
              alt="红包"
              importance="high"
              class="shrink-0 pointer-events-none"
              loading="lazy"
            >
          </div>
        </div>
      </template>

      <!-- 底部装饰 -->
      <div
        class="bottom-decoration"
        :class="{ 'animate-fade-in': isAnimating }"
      >
        <div
          class=" w-full h-full mx-auto bg-no-repeat"
          :style="{
            backgroundImage: `url(${images.bottom})`,
            backgroundSize: '1920px 492px',
          }"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.red-packet-container {
  @apply relative w-screen h-screen;
}

.redpacket-img {
  @apply fixed flex items-center justify-center;
}

.bottom-decoration {
  @apply w-full h-[492px] flex fixed bottom-0 left-0 opacity-0 overflow-hidden justify-center;
}

.animate-fade-in {
  animation: fadeIn 1s ease-in forwards;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.animate-falling {
  animation: falling var(--falling-duration) linear var(--falling-delay) forwards;
  will-change: transform;
}

@keyframes falling {
  from {
    transform: translate3d(0px, 0px, 0px) rotate(0deg);
  }
  to {
    transform: translate3d(0px, 120vh, 0px) rotate(360deg);
  }
}
</style>
