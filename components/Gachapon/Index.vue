<script lang="ts" setup>
import type { Gachapon, GachaponTask } from '~/api/gachapon/type'
import { Vue3Lottie } from 'vue3-lottie'
import { getSpecialPrizes, getTaskList, redeemReward, spinGachapon } from '~/api/gachapon'
import { useToast } from '../ui/toast'

const close = defineEmit()

const gachepon = ref<any>(null)
const loadingRef = ref<HTMLAudioElement | null>(null)
const rewardRef = ref<HTMLAudioElement | null>(null)
const cardList = ref<Gachapon[]>([])
const taskList = ref<GachaponTask[]>([])
const spinCount = ref(0)
const showRequestModal = ref(false)
const ruleId = ref()
const resultData = ref<any>(null)
const currentRules = ref({
  title: 'RUle',
})

const isRedeem = computed(() => {
  return cardList.value.every(item => item.count > 0)
})
const haveTask = computed(() => {
  return taskList.value.some(item => item.completed)
})

async function getCardList() {
  const data = await getSpecialPrizes()
  const res = await getTaskList()
  taskList.value = res.respVOList
  spinCount.value = res.tickets
  ruleId.value = data.ruleId
  cardList.value = data.prizesResp
}

getCardList()

const { playing: loadingPlaying } = useMediaControls(loadingRef, {
  src: '/activity/gachapon/loading.mp3',
})

const { playing: rewardPlaying } = useMediaControls(rewardRef, {
  src: '/activity/gachapon/reward.wav',
})

const showCard = ref(false)
async function play() {
  if (loadingPlaying.value)
    return

  gachepon.value.play()
  loadingPlaying.value = true
  // 等4秒
  setTimeout(async () => {
    try {
      resultData.value = await spinGachapon()
    }
    catch (error) {
      return console.error(error)
    }
    gachepon.value.stop()
    loadingPlaying.value = false
    rewardPlaying.value = true
    showCard.value = true
    await getCardList()
  }, 2000)
}

const { toast } = useToast()
const showRules = ref<boolean>(false)
async function redeem() {
  if (!isRedeem.value) {
    toast({
      title: 'Collect 5 cards to redeem a reward.',
      class: 'my-toast',
      duration: 2000,
    })
    return
  }
  await redeemReward(ruleId.value)
  toast({
    title: 'Redeem Success',
    class: 'my-toast',
    duration: 2000,
  })
  await getCardList()
}
</script>

<template>
  <!-- <BaseModal
    v-model:show="open" direction="right" wap-content-class="z-[555] h-[100vh] !p-0" content-class="z-[555]"
    overlay-class="z-[550]" no-header no-close
  > -->
  <div class="h-full pt-[.5%] flex justify-center items-center w-full">
    <div
      class="relative w-full h-full min-h-[720px] gachapon-container
       md:h-[700px] md:max-h-[95vh] md:overflow-y-auto
      "
    >
      <button
        class="flex items-center justify-center text-[--bc-alphaWhite6] rounded-full bg-color-alpha-black-04 absolute z-[15] w-[28px] h-[28px] text-[12px] top-[15px] right-[15px]"
        @click="close"
      >
        <i class="inline-block h-[max-content] w-[max-content] icon-new-clean-3 mt-[2px]" />
      </button>

      <img
        src="https://web-res-ccc.afunimg8.com/cdn-cgi/image/format=auto/C02/activity/gachapon/title_1.png?2024110910"
        alt="" importance="auto" class="absolute top-[0] left-0 z-[1] w-full md:static"
      >
      <div class="text-[13px] w-full z-10 text-center absolute text-white top-[20vw] font-semibold md:top-[105px]">
        Collect 5 cards to redeem a rewards of R$50.00
      </div>

      <client-only>
        <Vue3Lottie
          ref="gachepon" animation-link="/images/animation/gachapon/index.json" :auto-play="false"
          class="absolute bottom-[87vw] md:static left-0 z-[4] !h-auto px-[25px] md:px-[25px]"
        />
      </client-only>
      <div
        class="bg-[--bc-gachaponColor] text-white text-[14px] px-[15px] rounded-l-full py-[7px] absolute top-[25vw] right-0 font-semibold z-[9] md:top-[150px] md:text-[16px] cursor-pointer"
        @click="showRules = true"
      >
        Rules
      </div>

      <img
        src="https://web-res-ccc.afunimg8.com/cdn-cgi/image/format=auto/C02/activity/gachapon/bg.png" alt=""
        importance="auto" class="absolute -bottom-[1%] left-0 z-[1] md:static md:-mt-[80px]"
      >

      <div
        class="flex w-full absolute bottom-[72.5vw] pl-[14vw] z-[10] md:bottom-[unset] md:top-[515px] md:pl-[72px] md:left-0"
      >
        <div
          class="relative w-[max-content] h-[max-content] mr-[1vw] text-white transition-all duration-100 ease-in-out grayscale md:mr-[5px]
            " :class="{ 'grayscale-0 cursor-pointer': spinCount > 0 }"
        >
          <img
            src="https://web-res-ccc.afunimg8.com/cdn-cgi/image/format=auto/C02/activity/gachapon/btn_left.png"
            alt="" importance="auto" class="w-[41.5vw] md:w-[203px]"
          >
          <div
            class="absolute top-0 left-0 w-full h-full text-center flex items-center justify-center text-[16px] font-bold md:text-[18px]"
            @click="play"
          >
            <span class="gachapon-stroke" data-text="Play">Play</span>
            <span class="ml-[4px] text-[24px] md:text-[28px] gachapon-stroke" :data-text="spinCount">{{ spinCount
            }}</span>
          </div>
        </div>
        <div
          class="relative w-[max-content] h-[max-content] text-white transition-all duration-100 ease-in-out cursor-pointer"
        >
          <img
            src="https://web-res-ccc.afunimg8.com/cdn-cgi/image/format=auto/C02/activity/gachapon/btn_right.png"
            alt="" importance="auto" class="w-[30vw] md:w-[148px]"
          >
          <div
            class="!absolute top-0 left-0 w-full h-full text-center flex items-center justify-center text-[14px] md:text-[18px] font-bold gachapon-stroke-1 whitespace-space"
            data-text="Request Opportunity" @click="showRequestModal = true"
          >
            Request Opportunity
            <span v-if="haveTask" class="bg-red-500 absolute top-[5px] right-[10px] w-[8px] h-[8px] rounded-full shadow-xl" />
          </div>
        </div>
      </div>

      <div
        class="absolute left-0 bottom-[21.5vw] z-[10] w-full px-[20px] text-center md:relative md:bottom-[unset] md:-mt-[338px]"
      >
        <div
          class="px-[4vw] py-[4px] w-[max-content] rounded-[4px] bg-[--bc-activeColor4] text-[--bc-textActive] text-[12px] font-bold absolute -top-[20px] left-0 right-0 mx-auto z-[6]
            md:relative md:text-[16px] md:px-[20px] md:py-[5px] md:top-[6px]
            "
        >
          Special prizes
        </div>
        <div class="bg-[--bc-activeColor4] rounded-[10px] p-[6px] md:p-[8px]">
          <div class="p-[6px] rounded-[6px] bg-[#115252] md:p-[8px] md:rounded-[8px]">
            <div class="flex gap-x-[7px]">
              <div v-for="item, idx in cardList" :key="idx" class="rounded-[6px] relative">
                <Image
                  :src="item.imageUrl" alt="" importance="auto" class="rounded-[6px] !h-auto"
                  :class="{ grayscale: item.count <= 0 }"
                />
                <div
                  class="absolute bottom-[0] right-[0] z-[5] text-white text-[12px] bg-[--bc-alphaBlackB3] px-[4px] p-[2px] rounded-tl-[inherit] rounded-br-[inherit]"
                >
                  X {{ item.count }}
                </div>
              </div>
            </div>
          </div>
          <button
            class=" px-[20px] h-[40px] text-[--bc-textColor3] bg-color-linear-24 border-radius-0 text-[14px] font-bold mx-auto mt-[6px] min-w-[200px] relative z-[13]"
            :class="{ grayscale: !isRedeem }" @click="redeem"
          >
            Redeem Rewards
          </button>
          <audio ref="loadingRef" class="hidden" />
          <audio ref="rewardRef" class="hidden" />
        </div>
      </div>
    </div>
  </div>
  <GachaponCard v-model:show="showCard" :result="resultData" />
  <!-- </BaseModal> -->
  <BaseModal
    v-model:show="showRequestModal" content-class="z-[666] bg-white" overlay-class="z-[660]"
    wap-content-class="z-[666] p-0" close-class="text-white" no-header
  >
    <GachaponTask :task="taskList" :count="spinCount" @claim="getCardList" @close="showRequestModal = false" />
  </BaseModal>

  <BaseModal
    v-model:show="showRules" content-class="!bg-[#F5F8FA] !rounded-[10px] z-[999]"
    close-class="!text-white bg-[--bc-alphaBlack] w-[28px] h-[28px] !rounded-full flex items-center justify-center"
    overlay-class="z-[990]"
    wap-content-class="z-[999] h-[max-content] p-0"
    no-header
  >
    <div class="absolute top-0 right-0 px-[15px] py-[10px] z-[10] md:hidden" @click="showRules = false">
      <div class="bg-[--bc-alphaBlack] w-[28px] h-[28px] rounded-full flex items-center justify-center font-bold">
        <i class="inline-block h-[max-content] w-[max-content] icon-new-clean-3 text-white text-[12px]" />
      </div>
    </div>
    <BonusModal :info="currentRules" />
  </BaseModal>
</template>

<style scoped>
.gachapon-container {
  background-image: linear-gradient(180deg, #0ac, #092b70 50%, #1f787e);
}

.gachapon-stroke {
  -webkit-text-stroke: 3px #bb5002;
  position: relative;
}

.gachapon-stroke:before {
  content: attr(data-text);
  -webkit-text-stroke: 0;
  -webkit-align-items: center;
  color: #fff;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  font: inherit;
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
  -moz-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-justify-content: center;
  -moz-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
}

.gachapon-stroke-1 {
  -webkit-text-stroke: 3px #229c5e;
  position: relative;
}

.gachapon-stroke-1:before {
  content: attr(data-text);
  -webkit-text-stroke: 0;
  -webkit-align-items: center;
  color: #fff;
  display: flex;
  font: inherit;
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
  align-items: center;
  justify-content: center;
}

.gachapon-opacity-animation {
  animation: gachapon-opacity 5s 1 forwards;
}

@-webkit-keyframes gachapon-opacity {
  0% {
    opacity: 0;
  }

  40% {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

@-moz-keyframes gachapon-opacity {
  0% {
    opacity: 0;
  }

  40% {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

@-o-keyframes gachapon-opacity {
  0% {
    opacity: 0;
  }

  40% {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

@keyframes gachapon-opacity {
  0% {
    opacity: 0;
  }

  40% {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}
</style>
