<script lang="ts" setup>
import { Progress } from '@/components/ui/progress'

const userStore = useUserStore()
const { token } = storeToRefs(userStore)
const { isPageLoading } = useLoading()
const { isPc } = useDevice()

const show = ref<boolean>(false)

async function showTurnTable() {
  if (!token.value) {
    routerPush('/login')
    return
  }
  isPageLoading.value = true
  await initRoulette()
  isPageLoading.value = false
  if (isPc.value) {
    show.value = true
  }
  else {
    routerPush('/bonus/roulette')
  }
}
</script>

<template>
  <div v-if="token">
    <div class="bg-color2 rounded-[10px] overflow-hidden">
      <div
        class="md:h-[130px] h-[165px] md:px-[36px] px-[15px] md:py-[15px] py-[12px] rounded-[inherit] font-extrabold bg-color3-linear textwhite flex items-center justify-between relative max-lg:flex-col max-lg:items-start max-lg:h-[180px]"
      >
        <Image
          src="https://web-res-ccc.afunimg8.com/cdn-cgi/image/format=auto/C02/_E/home/invite_wheel.png?2024112916"
          alt="" importance="auto" class="h-full absolute bottom-0 left-[47.1%] max-lg:h-[60%] max-lg:left-[55%]"
        />
        <div class="z-[1] text-white w-full">
          <h4 v-if="!token" class="md:text-[26px] text-[16px]">
            Get <span class="text-linearColor md:text-[32px] text-[20px]">{{ toCurrency(freeAmount) }}</span> for free
          </h4>
          <h4 v-else class="md:text-[26px] text-[16px]">
            Get Amount <span class="text-linearColor text-[32px]">{{ toCurrency(rouletteInfo?.totalSpinAmount) }}</span>
          </h4>

          <Progress
            v-if="token"
            :model-value="((rouletteInfo?.totalSpinAmount || 0) / (rouletteInfo?.freeAmount || 0) * 100 || 0)"
            class="h-[6px] rounded-full bg-[--bc-bgColor7] mt-[8px] md:w-[400px] w-full" indicator-class="main-color-btn rounded-full"
          />
          <p v-if="!token" class="text-color md:text-[18px] text-[14px] mt-[5px] font-normal">
            Click to spin to get your rewards.
          </p>
          <p v-else class="md:text-[14px] text-[12px] text-color  md:mt-[8px] mt-[5px]">
            {{ toCurrency((rouletteInfo.freeAmount || 0) - (rouletteInfo?.totalSpinAmount || 0)) }} more for withdrawal.
          </p>
        </div>
        <button
          v-if="!token"
          class="border-radius-0 w-[max-content] main-color-btn min-w-[152px] h-[42px] text-[15px] text-font flex items-center justify-center px-[15px] z-[1] hover:brightness-105"
          @click="routerPush('/login')"
        >
          Sign up now
        </button>
        <button
          v-else
          class="rounded-[6px] w-[max-content] min-w-[95px] main-color-btn h-[34px] text-[15px] text-font flex items-center justify-center px-[15px] mt-[8px] z-[1]"
          @click="showTurnTable"
        >
          Withdraw
        </button>
      </div>
    </div>
    <TurnTable v-if="token" v-model:show="show" />
  </div>
  <div v-else>
    <div class="bg-color2 rounded-[10px] overflow-hidden">
      <div
        class="md:h-[130px] h-[165px] md:px-[36px] px-[15px] md:py-[15px] py-[12px] rounded-[inherit] font-extrabold bg-color3-linear  flex items-center justify-between relative max-lg:flex-col max-lg:items-start max-lg:h-[180px]"
      >
        <Image
          alt="" loading="lazy" data-nuxt-img=""
          class="max-w-full h-full absolute bottom-0 left-[47.1%] max-lg:h-[60%] max-lg:left-[55%]"
          importance="auto"
          src="https://web-res-ccc.afunimg8.com/cdn-cgi/image/format=auto/C02/_E/home/invite_wheel.png?2024112916"
          srcset="https://web-res-ccc.afunimg8.com/cdn-cgi/image/format=auto/C02/_E/home/invite_wheel.png?2024112916 1x, https://web-res-ccc.afunimg8.com/cdn-cgi/image/format=auto/C02/_E/home/invite_wheel.png?2024112916 2x"
        />
        <div class="z-[1] text-white w-full">
          <h4 class="md:text-[26px] text-[16px]">
            Get <span class="text-linearColor md:text-[32px] text-[20px]">¥100.00</span> for free
          </h4><!-- v-if -->
          <p class="text-color md:text-[18px] text-[14px] mt-[5px] font-normal">
            Click to spin to get your rewards.
          </p>
        </div><button
          class="border-radius-0 w-[max-content] main-color-btn min-w-[152px] h-[42px] text-[15px] text-font flex items-center justify-center px-[15px] z-[1] hover:brightness-105"
          @click="showTurnTable"
        >
          Sign up now
        </button>
      </div>
    </div>
  </div>
</template>

<style></style>
