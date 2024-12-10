<script lang="ts" setup>
import { ref } from 'vue'

const showDetails = ref<boolean>(false)
const user = useUserStore()
const { token } = storeToRefs(user)
const showCode = ref<boolean>(false)
function showDetail() {
  if (!token.value) {
    navigateTo('/login')
    return
  }

  showDetails.value = true
}
</script>

<template>
  <div class="w-full shrink-0 text-[12px] my-[15px]">
    <div
      class="py-[15px] bg-no-repeat bg-cover w-full relative h-[100px] rounded-[10px] overflow-hidden flex flex-col"
      style="background-image: url(https://web-res-ccc.afunimg8.com/cdn-cgi/image/format=auto/C02/C0E/bonusCenter/news/bg.jpg?t20240909);"
    >
      <div class="px-[15px]">
        <div>
          <div class="font-medium text-white opacity-[0.8]">
            Total Rewards Claimed(BRL)
          </div>
          <div class="text-white font-bold text-[20px] mt-[4px]">
            <span class="whitespace-pre">R$0.07</span>
          </div>
        </div>
        <div
          class="min-w-[124px] px-[8px] h-[28px] flex items-center justify-center text-white absolute top-0 right-0 rounded-bl-[17px] overflow-hidden bg-color-alpha-black-04"
          @click="showCode = !showCode"
        >
          <i class="inline-block h-[max-content] w-[max-content] icon-new-bonus-gift text-[14px]" /><span
            class="ml-[8px]"
          >Redeem Code</span>
        </div>
      </div>
      <div class="font-medium mt-[4px] mb-[24px] px-[15px] text-white" @click="showDetail">
        <span class="mr-[4px]">Details</span><i
          class="inline-block h-[max-content] w-[max-content] icon-new-back text-[11px] rotate-[180deg]"
        />
      </div>
    </div>
  </div>
  <BaseModal
    v-model:show="showDetails" content-class="!rounded-[10px] bg-popup min-w-[700px] max-w-[800px]"
    direction="right" wap-content-class="h-[100vh] z-[999] p-0"
  >
    <template #title>
      <div class="flex justify-between items-center h-[54px] px-[20px] bg-color-pop-16 rounded-t-[10px] text-white">
        Bonus Details
      </div>
    </template>
    <div class="md:h-[700px] h-[90vh]">
      <BonusDetails />
    </div>
  </BaseModal>
  <BaseDrawer v-model:open="showCode" content-class="z-[999] p-0" header-class="rounded-t-[10px]">
    <template #title>
      <p class="font-bold text-white">
        Redeem Rewards Code
      </p>
    </template>
    <div class="overflow-hidden flex flex-col  w-full bg-[--bc-popupColor] p-[20px]">
      <div class="flex-1 overflow-y-auto text-[12px]">
        <div>
          Redeem your rewards code below.
        </div>
        <div class="w-full mt-[6px] mb-[15px]">
          <BaseInput placeholder="Enter rewards code" />
        </div>
        <button
          class="text-[12px] bg-active text-font font-bold h-[35px] text-center px-[10px] w-full border-radius-0 whitespace-break-spaces mb-[15px]"
        >
          Redeem
        </button>
      </div>
    </div>
  </BaseDrawer>
</template>

<style></style>
