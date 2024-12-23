<script lang="ts" setup>
definePageMeta({
  noHeader: true,
  noTabbar: true,
})

const showWithdraw = ref(false)
const showFriends = ref(false)
const showGet = ref(false)
const showRules = ref(false)

initRoulette()

const router = useRouter()

async function spinEnd(e: any) {
  if (e.index === 2) {
    return
  }
  if (e.index === 7) {
    return
  }
  await getRoulette()
  // showGet.value = true
}
</script>

<template>
  <div class="w-full h-full flex flex-col pb-[15px] text-[14px] bg-color overflow-hidden">
    <!-- header -->
    <div
      class="h-[48px] shrink-0 w-full flex justify-between items-center px-[12px] text-white relative bg-[--bc-bgColor8]"
    >
      <button
        class="flex justify-center items-center shrink-0 w-[28px] h-[28px] rounded-[6px] bg-[--bc-buttonColor] text-white absolute left-[12px] inset-y-0 my-auto"
        @click="router.back()"
      >
        <i class="inline-block h-[max-content] w-[max-content] icon-n-back text-[12px]" />
      </button>
      <div class="text-[16px] leading-[1.5] font-bold px-[12px] text-center w-full truncate">
        Invite wheel
      </div>
      <div class="flex gap-x-[12px] absolute right-[12px] inset-y-0 my-auto items-center z-[1]">
        <button class="flex justify-center items-center shrink-0 text-icon" @click="showRules = true">
          <i class="inline-block h-[max-content] w-[max-content] icon-new-wenhao text-[16px]" />
        </button>
      </div>
    </div>
    <!-- now Total -->
    <div class="flex-1 flex flex-col gap-y-[15px] py-[15px] overflow-y-auto">
      <div class="px-[15px]">
        <RouletteWithdraw @show-withdraw="showWithdraw = true" />
      </div>
      <InviteWapTurntable @spin-end="spinEnd" @show-invite="showFriends = true" />
      <div
        class="px-[12px] py-[7px] mx-[12px] flex items-center bg-[--bc-TableTransparentColor] border-radius-0 mt-[20px]"
      >
        <div class="text-[12px] font-semibold flex-1">
          <div class="text-white">
            When your friends place bets, you get high commissions based on their bet amounts.<span
              class="text-[--bc-textColor100] underline"
              @click="routerPush('/affiliate')"
            >What is Commission?</span>
          </div>
        </div>
        <i
          class="inline-block h-[max-content] w-[max-content] icon-new-info-circle cursor-pointer text-[20px] text-white"
        />
      </div>
      <div class="px-[15px]">
        <InviteWinner />
      </div>
    </div>
    <InviteWithdraw v-model:show="showWithdraw" :use-wap="false" @show-friends="showFriends = true" />
    <InviteFriends v-model:show="showFriends" :use-wap="false" />
    <InviteGet v-model:show="showGet" :use-wap="false" />
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
  </div>
</template>

<style></style>
