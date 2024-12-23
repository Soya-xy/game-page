<script lang="ts" setup>
initRoulette()

const show = defineModel<boolean>('show', {
  required: true,
})

const close = defineEmit()

const showWithdraw = ref<boolean>(false)
const showGet = ref<boolean>(false)
const showFriends = ref<boolean>(false)
const showRules = ref<boolean>(false)

async function spinEnd(e: any) {
  if (e.index === 2) {
    return
  }
  if (e.index === 7) {
    return
  }
  await getRoulette()
  showGet.value = true
}
</script>

<template>
  <BaseModal
    v-model:show="show" content-class="mx-auto min-w-[640px] max-w-[1414px] px-32px"
    :no-close="rouletteInfo?.totalSpinAmount === 0"
  >
    <div v-if="rouletteInfo?.totalSpinAmount !== 0" class="flex bg-color rounded-[10px]">
      <InviteTurntable @show-invite="showFriends = true" @spin-end="spinEnd" />
      <div class="w-[400px] p-[20px] flex flex-col h-full">
        <section class="flex flex-col gap-y-[4px] mb-[10px]">
          <h3 class="flex items-center gap-x-[10px] text-[20px] font-bold text-white mt-[28px]">
            Invite wheel <i
              class="inline-block h-[max-content] w-[max-content] icon-new-wenhao cursor-pointer text-icon text-[17px]"
              @click="showRules = true"
            />
          </h3>
        </section>
        <div
          class="border-radius-1 pb-[46.67%] bg-no-repeat bg-[length:100%] relative"
          style="background-image: url(https://web-res-ccc.afunimg8.com/cdn-cgi/image/format=auto/C02/_E/activity/inviteWheel2/bg1.png);"
        >
          <div class="w-[84%] absolute bottom-[48.85%] left-0 right-0 mx-auto text-center">
            <div
              class="invite-wheel2-sum text-[36px] font-[800] relative"
              :data-text="toCurrency(rouletteInfo?.totalSpinAmount)"
            >
              {{ toCurrency(rouletteInfo?.totalSpinAmount) }}
            </div>
            <div class="rounded-full overflow-hidden h-[6px] mt-[3%]">
              <p class="bg-color-activity-42 h-full rounded-[inherit]" :style="`width: ${rouletteInfo!.totalSpinAmount / rouletteInfo!.freeAmount * 100}%`" />
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
              <p v-if="rouletteInfo!.totalSpinAmount !== rouletteInfo!.freeAmount">
                <span class="text-[--bc-bgColor10] font-bold">{{ toCurrency(rouletteInfo!.freeAmount - rouletteInfo!.totalSpinAmount) }}</span> more for withdrawal.
              </p>
              <p v-else>
                You can withdrawal  <span class="text-[--bc-bgColor10] font-bold">{{ toCurrency(rouletteInfo!.freeAmount - rouletteInfo!.totalSpinAmount) }}</span> now.
              </p>
            </div>
          </div>
        </div>
        <p
          class="mt-[20px] text-white font-medium text-[14px] text-center flex items-center gap-x-[5px] justify-center"
        >
          Remain time
          <Countdown :time="new Date(rouletteInfo!.expirationDate).getTime()" content-class="!text-[--bc-bgColor10]" />
        </p>
        <button
          class="min-h-[56px] w-full border-radius-0 text-[14px] bg-button-linear font-bold mt-[10px] whitespace-break-spaces"
          @click="showFriends = true"
        >
          Invite friends get more cash
        </button>
        <div class="px-[12px] py-[7px] flex items-center bg-[--bc-TableTransparentColor] border-radius-0 mt-[20px]">
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
            class="inline-block h-[max-content] w-[max-content] icon-new-info-circle cursor-pointer text-[20px] text-[--bc-textColor100]"
          />
        </div>
        <InviteWinner />
      </div>
    </div>

    <InviteWapTurntable v-else class="!mx-auto" @close="show = false" @spin-end="spinEnd" />
  </BaseModal>

  <InviteWithdraw v-model:show="showWithdraw" @show-friends="showFriends = true" @withdraw-success="show = false" />
  <InviteFriends v-model:show="showFriends" />
  <InviteGet v-model:show="showGet" />
  <BaseModal
    v-model:show="showRules" content-class="!bg-[#F5F8FA] !rounded-[10px] z-[999]"
    close-class="!text-white bg-[--bc-alphaBlack] w-[28px] h-[28px] !rounded-full flex items-center justify-center "
    overlay-class="z-[990]"
    wap-content-class="z-[999] h-[max-content] p-0"
    no-header
  >
    <div class="absolute top-0 right-0 px-[15px] py-[10px] z-[10] md:hidden" @click="showRules = false">
      <div class="bg-[--bc-alphaBlack] w-[28px] h-[28px] rounded-full flex items-center justify-center font-bold">
        <i class="inline-block h-[max-content] w-[max-content] icon-new-clean-3 text-white text-[12px]" />
      </div>
    </div>
    <!-- <BonusModal /> -->
    123
  </BaseModal>
</template>
