<script lang="ts" setup>
const showRules = ref<boolean>(false)
const showQa = ref<boolean>(false)
const isSlots = defineProp<boolean>()

const affiliate = useAffiliate()
const { activity, maxReward } = storeToRefs(affiliate)
const sliderValue = ref<number>(0)
function handleSliderChange(value: number) {
  sliderValue.value = value
}
</script>

<template>
  <div class="text-color">
    <div v-if="!isSlots" class="text-[20px] font-bold text-white mb-[10px]">
      Rules <i
        class="inline-block h-[max-content] w-[max-content] icon-new-wenhao cursor-pointer relative ml-[10px] text-[20px] text-[--bc-color20] hover:text-white"
        @click="showQa = true"
      />
    </div>
    <div v-else class="flex items-center justify-between shrink-0 mb-[5px]">
      As part of our affiliate network, you will be paid on a revenue share model. You earn more than 70% commission
      reward.
    </div>
    <div class="border-radius-1 py-[20px] flex flex-col" :class="{ 'bg-color2 px-[40px]': !isSlots }">
      <div v-if="!isSlots" class="flex items-center justify-between shrink-0 mb-[5px] w-[342px]">
        <p class="text-[12px] font-bold">
          Unlimited development of subordinates
        </p>
        <p class="text-[--bc-color20] underline text-[14px] cursor-pointer" @click="showRules = true">
          Rules
        </p>
      </div>

      <div class="flex gap-[40px]">
        <div
          class="shrink-0 w-[342px] h-[199.5px] border-radius-0 bg-cover bg-no-repeat"
          style="background-image: url(https://web-res-ccc.afunimg8.com/cdn-cgi/image/format=auto/C02/C0E/referAndEarn/proxy_pc.jpg?20241031);"
        />
        <div class="flex-1 flex flex-col">
          <div v-if="!isSlots" class="text-color-linear-20 text-[14px] font-bold">
            You can make money by referring friends to and earn up to commission rewards！
          </div>
          <div v-else class="flex justify-between flex-wrap gap-[10px]">
            <div class="text-active text-[15px] underline text-left cursor-pointer" @click="showQa = true">
              Commission calculation rules
            </div>
            <div
              class="text-active text-[15px] underline cursor-pointer text-left min-w-[345px]"
              @click="showRules = true"
            >
              Commission reward rules
            </div>
          </div>
          <div class="flex flex-row flex-wrap items-center flex-1 max-h-[110px] justify-start">
            <div class="text-[14px] w-[360px] flex items-center">
              <div
                class="w-[75px] h-[75px] mr-[10px] bg-no-repeat bg-center"
                style="background-image: url(https://web-res-ccc.afunimg8.com/cdn-cgi/image/format=auto/C02/bonusCenter/task_weekly_icon.png?t=20231205); background-size: 100%;"
              />
              <div>
                <div class="mb-[16px]">
                  Recommended
                  <span class="text-white">&gt; {{ activity?.[sliderValue]?.maxParticipants }}</span>
                  <i
                    class="inline-block h-[max-content] w-[max-content] icon-new-personal cursor-pointer text-[20px] text-color ml-[4px]"
                  />
                </div>
                <div>
                  Commission <span class="text-white">{{ toCurrency(activity?.[sliderValue]?.maxReward) }} /
                    Month</span>
                </div>
              </div>
            </div>
            <div class="w-[220px] h-[50px] flex items-center">
              <div class="relative slider bg-[--bc-bgColor9] h-[6px] w-[200px] rounded-tl-[3px] rounded-bl-[3px]">
                <!-- 拖动下面的dom修改left -->
                <PcAffiliateSlider @change="handleSliderChange" />
              </div>
              <div class="relative slider bg-[--bc-bgColor9] h-[6px] w-[20px] rounded-tr-[3px] rounded-br-[3px]" />
            </div>
          </div>
          <ul class="text-[12px] list-inside list-decimal">
            <li class="mb-[10px]">
              Every time your recommended player places a bet, wins or loses, you will receive a different commission
              percentage.
            </li>
            <li>The system calculates commission every <span class="text-white">3 minutes</span>.</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <BaseModal v-model:show="showRules" content-class="w-[500px] h-[700px]">
    <template #title>
      <div class="flex justify-between items-center h-[54px] px-[20px] bg-color2">
        Rules
      </div>
    </template>

    <div class="flex-1 overflow-hidden flex flex-col px-[40px] pb-[30px]">
      <div class="flex-1 overflow-y-auto">
        <div
          class="p-[10px] bg-[--bc-searchBtnColor] border-dashed border-[1px] border-[--bc-bgColor9] border-radius-0"
        >
          <div class="flex items-center text-[14px] font-bold">
            <div class="w-[66px] h-[66px] rounded-full overflow-hidden mr-[10px] shrink-0 relative p-[2px]">
              <Image
                src="https://web-res-ccc.afunimg8.com/cdn-cgi/image/format=auto/C02/userinfo/header/h_1.jpg?t=20231005"
                alt="" importance="auto" class="w-full"
              />
              <div
                class="border-[3px] border-solid border-[--bc-activeColor] absolute top-0 left-0 w-full h-full rounded-[inherit]"
              />
            </div>
            <div class="text-color-linear-20">
              You can make money by referring friends to AFUN.COM and earn up to {{ maxReward }} commission rewards！
            </div>
          </div>
          <div class="flex text-[12px] justify-between mt-[10px]">
            <div class="flex-1 shrink-0">
              <div class="text-white font-bold">
                Total performance: 1050K
              </div>
              <div class="mt-[5px]">
                Level 1 performance: <span class="text-white">300K</span>
              </div>
              <div class="mt-[5px]">
                Level 2 performance: <span class="text-white">150K</span>
              </div>
              <div class="mt-[5px]">
                Level 3 performance: <span class="text-white">600K</span>
              </div>
            </div>
            <div class="flex-1 shrink-0">
              <div class="text-white font-bold">
                Total Commission: 3.15K
              </div>
              <div class="mt-[5px]">
                Level 1 Commission:<span class="text-white">2.1K</span>
              </div>
              <div class="mt-[5px]">
                Level 2 Commission: <span class="text-white">0.45K</span>
              </div>
              <div class="mt-[5px]">
                Level 3 Commission:<span class="text-white">0.6K</span>
              </div>
            </div>
          </div>
        </div>
        <AffiliateFriends />
        <div class="mt-[16px]">
          <AffiliateRules />
        </div>
      </div>
    </div>
  </BaseModal>
  <BaseModal v-model:show="showQa" content-class="w-[500px] h-[700px]">
    <template #title>
      <div class="flex justify-between items-center h-[76px] px-[20px] bg-color-pop-16 rounded-[10px]">
        Rules
      </div>
    </template>
    <div class="flex-1 overflow-hidden flex flex-col px-[40px] pb-[30px] ">
      <div class="flex-1 overflow-y-auto">
        <AffiliateRules title="Commission reward" />
        <AffiliateLevel />
      </div>
    </div>
  </BaseModal>
</template>

<style></style>
