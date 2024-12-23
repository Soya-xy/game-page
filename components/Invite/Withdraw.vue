<script lang="ts" setup>
import { redeemReward } from '~/api/roulette'
import { useToast } from '../ui/toast'

const show = defineModel<boolean>('show', {
  required: true,
})
const { toast } = useToast()

const showFriends = defineEmit()
const withdrawSuccess = defineEmit()

async function withdraw() {
  if (!rouletteInfo?.value.id) {
    return
  }

  if (rouletteInfo.value.totalSpinAmount !== rouletteInfo.value.freeAmount) {
    showFriends()
  }
  else {
    const res = await redeemReward({
      id: rouletteInfo.value.id,
    })
    if (res) {
      toast({
        title: 'Withdrawal successful',
        class: 'my-toast',
      })
    }
    show.value = false
    withdrawSuccess()
  }
}
</script>

<template>
  <BaseModal v-model:show="show" content-class="mx-auto min-w-[310px] md:min-w-[444px] rounded-[10px] max-w-[1414px] px-32px">
    <div class="h-[max-content] flex flex-col m-auto bg-color border-radius-1 overflow-hidden text-[14px] md:w-[480px] w-[310px]">
      <div class="px-[12px] md:pb-[24px] md:pt-[10px] mt-[40px] pb-[15px]">
        <div class="text-center mb-[15px]">
          <p class="md:text-[20px] text-[12px] font-bold text-white mb-[10px]">
            Accumulated
          </p><span class="whitespace-pre text-active text-[40px] font-bold">
            {{ toCurrency(rouletteInfo!.totalSpinAmount) }}
          </span>
          <div class="flex justify-between md:text-[14px] text-[10px] text-color mt-[22px]">
            <span>Payment Method</span><span>Cash</span>
          </div>
        </div>
        <div class="bg-color2 px-[20px] pt-[17px] md:pb-[30px] pb-[20px] border-radius-0 relative">
          <ul
            class="flex flex-col justify-center items-center absolute flex-1 h-full pt-[24px] pb-[42px] left-[20px] top-0 bottom-0 my-auto z-[0]"
          >
            <div class="w-[16px] h-[16px] flex items-center justify-center bg-[--bc-noActiveColor2] rounded-full">
              <div class="w-[8px] h-[8px] bg-active rounded-full" />
            </div>
            <li class="w-[2px] bg-[--bc-noActiveColor2] flex-1 relative" />
            <div class="w-[16px] h-[16px] flex items-center justify-center bg-[--bc-noActiveColor2] rounded-full">
              <div class="w-[8px] h-[8px] bg-active rounded-full" />
            </div>
            <li
              class="w-[2px] flex-1 bg-[--bc-color20]"
              :class="rouletteInfo.totalSpinAmount === rouletteInfo.freeAmount ? 'bg-[--bc-noActiveColor2]' : 'bg-[--bc-color20]'"
            />
            <div v-if="rouletteInfo.totalSpinAmount !== rouletteInfo.freeAmount" class="w-[8px] h-[8px] bg-[--bc-color20] rounded-full" />
            <div v-else class="w-[16px] h-[16px] flex items-center justify-center bg-[--bc-noActiveColor2] rounded-full">
              <div class="w-[8px] h-[8px] bg-active rounded-full" />
            </div>
          </ul>
          <ul class="text-white flex flex-col gap-y-[24px]">
            <li class="min-h-[30px] flex items-center pl-[35px]">
              Withdrawal
              Submitted.
            </li>
            <li v-if="rouletteInfo!.totalSpinAmount !== rouletteInfo!.freeAmount" class="min-h-[30px] flex items-center pl-[35px]">
              {{ toCurrency((rouletteInfo?.freeAmount || 0) - (rouletteInfo?.totalSpinAmount || 0)) }} more for
              withdrawal.
            </li>
            <li v-else class="min-h-[30px] flex items-center pl-[35px] text-color">
              You have reached the maximum withdrawal amount.
            </li>
            <li class="min-h-[30px] flex items-center pl-[35px] text-color">
              Received {{ toCurrency(rouletteInfo!.freeAmount) }}
            </li>
          </ul>
        </div>
        <button
          class="flex items-center justify-center w-full bg-button-linear border-radius-0 text-[12px] font-bold text-font min-h-[40px] mt-[10px]"
          @click="withdraw"
        >
          {{ rouletteInfo.totalSpinAmount !== rouletteInfo.freeAmount ? 'Invite friends to help' : 'Withdrawal' }}
        </button>
      </div>
    </div>
  </BaseModal>
</template>

<style></style>
