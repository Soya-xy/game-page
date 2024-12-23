<script lang="ts" setup>
import { Vue3Lottie } from 'vue3-lottie'
import { rouletteList } from '~/composables/roulette'
import { useRoulette } from './roulette'

const emit = defineEmits(['spinEnd', 'close', 'showInvite'])

const { nowRotate, spin, inviteWheel, buttonBg } = useRoulette(emit)
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
                  v-for="(item, index) in rouletteList" :key="index" class="absolute w-full pl-[50%] flex items-center"
                  :style="`transform: rotate(${45 * (index)}deg);`"
                >
                  <div
                    class="w-full text-white items-center justify-center flex pl-[35.4%] pr-[6.6%]"
                    style="text-shadow: rgba(0, 0, 0, 0.5) 0px 2.773px 1.387px;"
                  >
                    <div class="rotate-90 font-bold text-center text-[27px] w-[100px]">
                      <div v-if="item.rewardValue > 0">
                        {{ item.rewardValue }}
                      </div>
                      <div v-if="item.rewardDesc && item.rewardValue <= 0">
                        {{ item.rewardDesc }}
                      </div>
                      <Image v-if="item.imageUrl" :src="item.imageUrl" class="-rotate-90 mx-auto !h-[48px]" />
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
          @click="spin"
        >
          <div
            class="w-[61.44%] h-[61.44%] text-[--bc-textColor3] leading-[1] text-center pt-[12.65%] relative cursor-pointer"
          >
            <div
              v-if="rouletteInfo!.tickets > 0 && rouletteInfo!.totalSpinAmount !== rouletteInfo!.freeAmount"
              class="absolute w-[71%] top-[45%] right-[-31%] pointer-events-none"
            >
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
  background-image: v-bind('buttonBg');
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
