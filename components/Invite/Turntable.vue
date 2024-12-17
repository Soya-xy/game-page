<script lang="ts" setup>
import { Vue3Lottie } from 'vue3-lottie'

// 发出结束事件
const emit = defineEmits(['spinEnd'])

const inviteWheel = ref({
  buttonBg: `url(https://web-res-ccc.afunimg8.com/cdn-cgi/image/format=auto/C02/_E/activity/inviteWheel2/button${Math.floor(Math.random() * 4)}.png)`,
  border: `url(https://web-res-ccc.afunimg8.com/cdn-cgi/image/format=auto/C02/_E/activity/inviteWheel2/base.png)`,
  light: `url(https://web-res-ccc.afunimg8.com/cdn-cgi/image/format=auto/C02/_E/activity/inviteWheel2/light1.png)`,
  dark: `url(https://web-res-ccc.afunimg8.com/cdn-cgi/image/format=auto/C02/_E/activity/inviteWheel2/light2.png)`,
  spin: `url(https://web-res-ccc.afunimg8.com/cdn-cgi/image/format=auto/C02/_E/activity/inviteWheel2/spin.png?t=20241126)`,
})

const drawList = ref([
  {
    value: '???',
    img: 'https://web-res-ccc.afunimg8.com/cdn-cgi/image/format=auto/C02/inviteWheel/award1.png?20240911',
  },
  {
    value: '???',
    img: 'https://web-res-ccc.afunimg8.com/cdn-cgi/image/format=auto/dev_skin/C02/wallet/currency/BRL.png',
  },
  {
    img: 'https://web-res-ccc.afunimg8.com/cdn-cgi/image/format=auto/C02/inviteWheel/award3.png?20240911',
  },
  {
    value: '10',
  },
  {
    value: '50',
  },
  {
    value: '20',
  },
  {
    value: '80',
  },
  {
    value: '30',
  },
])

const nowRotate = ref(0)
const isAnimating = ref(false)
const targetAngle = ref(0)
const animationStart = ref(0)
const playCount = ref(0)
const disangle = ref(10)
const isSlowDown = ref(false)
const windowAnimation = ref<any>(null)
const targetIndex = ref(0)
const isSpinning = ref(false)
const totalRotations = ref(0)// Speed configuration for smooth deceleration
const speedConfig = Array.from({ length: 200 }, (_, i) => ({
  duration: 360 + i * 3,
  speed: Math.max(0.9, 10 - (i * 0.05)),
}))

// 计算目标角度
function calculateTargetAngle(index: number) {
  const singleSlice = 360 / 8 // 每个奖品占45度
  // 计算基础角度，从270度开始，确保在0-360之间
  const baseAngle = (270 - (index * singleSlice) + 360) % 360
  return baseAngle
}

function updateAnimation() {
  playCount.value++

  if (!isSlowDown.value) {
    const remainingAngle = targetAngle.value - (totalRotations.value * 360 + nowRotate.value)
    if (remainingAngle < 720) {
      isSlowDown.value = true
      const timeElapsed = new Date().getTime() - animationStart.value
      const avgSpeed = timeElapsed / playCount.value
      const decelerationSteps = Math.min(Math.max(Math.ceil(720 / avgSpeed), 30), 199)
      disangle.value = speedConfig[decelerationSteps]!.speed
    }
  }

  if (isSlowDown.value) {
    disangle.value = Math.max(disangle.value * 0.98, 0.9)
  }

  // 更新旋转角度，保持在 0-360 之间
  nowRotate.value = (nowRotate.value + disangle.value) % 360

  // 如果过了360度，增加圈数
  if (nowRotate.value < disangle.value) {
    totalRotations.value++
  }

  // 检查是否结束
  const currentTotalAngle = totalRotations.value * 360 + nowRotate.value
  if (isSlowDown.value && currentTotalAngle >= targetAngle.value - 1) {
    nowRotate.value = targetAngle.value % 360
    isAnimating.value = false
    isSpinning.value = false
    emit('spinEnd', {
      index: targetIndex.value,
      prize: drawList.value[targetIndex.value],
    })
    return
  }

  windowAnimation.value = requestAnimationFrame(updateAnimation)
}

// 修改 startRotate 函数
function startRotate(index: number) {
  if (isSpinning.value)
    return

  targetIndex.value = Math.max(0, Math.min(7, index))

  isAnimating.value = true
  isSpinning.value = true
  playCount.value = 0
  isSlowDown.value = false
  disangle.value = 10
  animationStart.value = new Date().getTime()
  totalRotations.value = 0 // 重置圈数

  // 基础角度加上额外的圈数
  const baseAngle = calculateTargetAngle(targetIndex.value)
  const additionalRotations = 5 * 360 // 额外旋转5圈
  targetAngle.value = baseAngle + additionalRotations
  requestAnimationFrame(updateAnimation)
}

// 修改 clear 函数
function clear() {
  if (windowAnimation.value) {
    cancelAnimationFrame(windowAnimation.value)
  }
  isAnimating.value = false
  isSpinning.value = false
  nowRotate.value = 0
  targetAngle.value = 0
  totalRotations.value = 0
}

// Clean up on component unmount
onUnmounted(() => {
  clear()
})
</script>

<template>
  <div class="h-full w-[535px] pt-[108px] relative">
    <div class="w-[520px] mx-auto relative">
      <Image
        src="https://web-res-ccc.afunimg8.com/cdn-cgi/image/format=auto/C02/_E/activity/inviteWheel2/mascot.png"
        class="w-[100%] !h-auto absolute left-0 right-0 top-[-100px]"
      />
      <Image
        src="https://web-res-ccc.afunimg8.com/cdn-cgi/image/format=auto/C02/_E/activity/inviteWheel2/title_1.png?20241129"
        class="w-[100%] !h-auto absolute left-0 right-0 top-[-80px]"
      />
      <div class="w-full h-0 pb-[100%] relative bg-no-repeat bg-[length:100%] invite-wheel-bg">
        <div
          class="w-[90.626%] h-[90.626%] absolute top-0 bottom-0 left-0 right-0 m-auto bg-no-repeat bg-[length:100%] light"
        />
        <div class="absolute w-[81.492%] h-[max-content] left-0 right-0 top-0 bottom-0 m-auto">
          <div class="h-0 pb-[100%] relative rounded-full overflow-hidden">
            <div class="w-full h-full absolute left-0 right-0 top-0 bottom-0 m-auto">
              <ul
                class="w-full h-full flex items-center justify-center relative bg-no-repeat bg-cover invite-wheel-spin"
                :style="`transform: translate3d(0px, 0px, 0px) rotate(${nowRotate}deg);`"
              >
                <li
                  v-for="(item, index) in drawList" :key="index" class="absolute w-full pl-[50%] flex items-center"
                  :style="`transform: rotate(${45 * (index)}deg);`"
                >
                  <div
                    class="w-full text-white items-center justify-center flex pl-[35.4%] pr-[6.6%]"
                    style="text-shadow: rgba(0, 0, 0, 0.5) 0px 2.773px 1.387px;"
                  >
                    <div class="rotate-90 font-bold text-center text-[27px] w-[100px]">
                      <div v-if="item.value">
                        {{ item.value }}
                      </div>
                      <Image v-if="item.img" :src="item.img" class="-rotate-90 mx-auto !h-[48px]" />
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <Image
          src="https://web-res-ccc.afunimg8.com/cdn-cgi/image/format=auto/C02/_E/activity/inviteWheel2/pointer.png"
          class="w-[78.935%] absolute top-0 left-0 right-0 m-auto !h-auto"
        />
        <div
          class="absolute top-0 bottom-0 left-0 right-0 m-auto w-[37.335%] h-[37.335%] bg-no-repeat bg-[length:100%] flex items-center justify-center invite-wheel2-button"
          @click="() => startRotate(4)"
        >
          <div
            class="w-[61.44%] h-[61.44%] text-[--bc-textColor3] leading-[1] text-center pt-[12.65%] relative cursor-pointer"
          >
            <div class="absolute w-[71%] top-[45%] right-[-31%] pointer-events-none">
              <!-- <i-svg-mouse /> -->
              <client-only>
                <Vue3Lottie animation-link="/images/animation/roulette/index.json" />
              </client-only>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Image
      src="https://web-res-ccc.afunimg8.com/cdn-cgi/image/format=auto/C02/_E/activity/inviteWheel2/decorate2.png"
      class="w-[100%] absolute !h-auto top-[145px] pointer-events-none"
    />
  </div>
</template>

<style scoped>
.invite-wheel-bg {
  background-image: v-bind('inviteWheel.border');
}

.invite-wheel2-button {
  background-image: v-bind('inviteWheel.buttonBg');
  content: none;
}

.invite-wheel-spin {
  background-image: v-bind('inviteWheel.spin');
}

.light {
  animation: blink 1s steps(2) infinite;
}

@keyframes blink {
  0% {
    background-image: v-bind('inviteWheel.light');
  }

  to {
    background-image: v-bind('inviteWheel.dark');
  }
}
</style>
