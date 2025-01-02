<script lang="ts" setup>
const showWithdraw = defineEmit()
</script>

<template>
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
        <p
          class="bg-color-activity-42 h-full rounded-[inherit]"
          :style="`width: ${(rouletteInfo?.totalSpinAmount || 0) / (rouletteInfo?.freeAmount || 0) * 100}%`"
        />
      </div>
    </div>
    <div class="w-[84%] absolute bottom-[6%] left-0 right-0 mx-auto text-center text-[16px]">
      <button
        class="w-[180px] h-[36px] font-extrabold text-[--bc-textColor3] rounded-full bg-color-linear-24"
        @click="showWithdraw"
      >
        Withdraw
      </button>
      <div class="text-center font-medium text-white mt-[6px]">
        <p v-if="rouletteInfo!.totalSpinAmount !== rouletteInfo!.freeAmount">
          <span class="text-[--bc-bgColor10] font-bold">{{ toCurrency((rouletteInfo?.freeAmount || 0)
            - (rouletteInfo?.totalSpinAmount || 0)) }}</span> more for withdrawal.
        </p>
        <p v-else>
          You can withdrawal <span class="text-[--bc-bgColor10] font-bold">{{ toCurrency((rouletteInfo?.freeAmount || 0)
            - (rouletteInfo?.totalSpinAmount || 0)) }}</span> now.
        </p>
      </div>
    </div>
  </div>
</template>

<style></style>
