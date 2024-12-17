<script lang="ts" setup>
import { ref } from 'vue'

const list = Array.from({ length: 1000 }, (_, index) => ({
  id: index,
  name: `Pawsome Xmas ${index}`,
  phone: `${index}${index}${index}***523`,
  bet: `${index},000.00`,
  multiplier: `${index}.82x`,
  profit: `+${index},650.00`,
}))

const close = defineEmit()
const showWithdraw = ref<boolean>(false)
const activeIndex = ref<number>(0)
</script>

<template>
  <div class="flex bg-color rounded-[10px]">
    <InviteTurntable class="max-w-[500px]" />
    <div class="w-[400px] p-[20px] flex flex-col h-full">
      <section class="flex flex-col gap-y-[4px] mb-[10px]">
        <h3 class="flex items-center gap-x-[10px] text-[20px] font-bold text-white mt-[28px]">
          Invite wheel <i
            class="inline-block h-[max-content] w-[max-content] icon-new-wenhao cursor-pointer text-icon text-[17px]"
          />
        </h3>
      </section>
      <div
        class="border-radius-1 pb-[46.67%] bg-no-repeat bg-[length:100%] relative"
        style="background-image: url(https://web-res-ccc.afunimg8.com/cdn-cgi/image/format=auto/C02/_E/activity/inviteWheel2/bg1.png);"
      >
        <div class="w-[84%] absolute bottom-[48.85%] left-0 right-0 mx-auto text-center">
          <div class="invite-wheel2-sum text-[36px] font-[800] relative" data-text="R$94.32">
            R$94.32
          </div>
          <div class="rounded-full overflow-hidden h-[6px] mt-[3%]">
            <p class="bg-color-activity-42 h-full rounded-[inherit]" style="width: 94.32%;" />
          </div>
        </div>
        <div class="w-[84%] absolute bottom-[6%] left-0 right-0 mx-auto text-center text-[16px]">
          <button
            class="w-[180px] h-[36px] font-extrabold text-[--bc-textColor3] rounded-full bg-color-linear-24"
            @click="showWithdraw = true"
          >
            Withdraw
          </button>
          <div class="text-center font-medium text-white mt-[6px]">
            <span class="text-[--bc-bgColor10] font-bold">R$5.68</span> more for withdrawal.
          </div>
        </div>
      </div>
      <p class="mt-[20px] text-white font-medium text-[14px] text-center">
        Remain time <span class="font-bold text-[--bc-bgColor10]">2D: 23H: 52M: 30S</span>
      </p>
      <button
        class="min-h-[56px] w-full border-radius-0 text-[14px] bg-button-linear font-bold mt-[10px] whitespace-break-spaces"
      >
        Invite friends get more cash
      </button>
      <div class="px-[12px] py-[7px] flex items-center bg-[--bc-transparentColor] border-radius-0 mt-[20px]">
        <div class="text-[14px] font-semibold flex-1">
          <div class="text-white">
            When your friends place bets, you get high commissions based on their bet amounts.
            <span
              class="text-[--bc-textColor100] cursor-pointer underline" @click="() => {
                routerPush('/affiliate')
                close()
              }"
            >What is Commission?</span>
          </div>
        </div>
        <i
          class="inline-block h-[max-content] w-[max-content] icon-n-info-circle-2 cursor-pointer text-[20px] text-[--bc-textColor100]"
        />
      </div>
      <div class="flex-[1] flex flex-col gap-y-[8px] mt-[20px] overflow-hidden">
        <div
          class="h-[50px] text-[14px] font-bold text-white bg-color2 border-radius-1 flex justify-between items-center gap-[5px] overflow-hidden p-[5px] shrink-0"
        >
          <div
            class="h-full flex-1 flex items-center justify-center border-radius-0 cursor-pointer"
            :class="{ 'bg-[--bc-bgColor7]': activeIndex === 0 }" @click="() => {
              activeIndex = 0
            }"
          >
            Winner
          </div>
          <div
            class="h-full flex-1 flex items-center justify-center border-radius-0 cursor-pointer"
            :class="{ 'bg-[--bc-bgColor7]': activeIndex === 1 }" @click="() => {
              activeIndex = 1
            }"
          >
            My Reward
          </div>
        </div>
        <div class="overflow-hidden text-[13px] bg-color2 border-radius-1 p-[15px] h-[160px]">
          <BaseAutoScroll :list="list" :min-size="40" :item-gap="0">
            <template #default="{ itemData }">
              <div class="flex justify-between items-center h-[40px] font-semibold">
                <div class="flex-1">
                  {{ itemData.phone }}
                </div>
                <div class="flex-1 text-center text-active">
                  Received
                </div>
                <div class="text-active flex-1 text-right">
                  <span class="whitespace-pre">{{ itemData.profit }}</span>
                </div>
              </div>
            </template>
          </BaseAutoScroll>
        </div>
      </div>
    </div>
  </div>
  <InviteWithdraw v-model:show="showWithdraw" />
</template>

<style scoped>
.invite-wheel2-sum {
  text-shadow:
    -1px -1px 0 #8f310f,
    1px -1px 0 #8f310f,
    -1px 1px 0 #8f310f,
    1px 1px 0 #8f310f;
}

.invite-wheel2-sum:before {
  background: linear-gradient(180deg, #fff 20.83%, #ffeb85, #e9ad35, #f1d97d 81.25%);
  background-clip: text;
  -webkit-background-clip: text;
  content: attr(data-text);
  left: 0;
  position: absolute;
  top: 0;
  -webkit-text-fill-color: transparent;
  height: 100%;
  text-shadow: none;
  width: 100%;
}
</style>
