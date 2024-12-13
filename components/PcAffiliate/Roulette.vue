<script lang="ts" setup>
import { ref } from 'vue'

const show = ref<boolean>(false)
</script>

<template>
  <div class="flex items-center justify-between gap-x-[40px] py-[10px] px-[40px] bg-color-linear-14 border-radius-0">
    <div class="flex items-center gap-x-[20px] flex-1 max-w-[530px]">
      <Image
        src="https://web-res-ccc.afunimg8.com/cdn-cgi/image/format=auto/C02/referAndEarn/invite_wheel_entry22.png"
        alt="" class="!h-[115px]"
      />
      <div class="flex flex-col flex-1 gap-y-[4px]">
        <h3 class="text-[20px] font-semibold text-white uppercase">
          Invite Roulette
        </h3>
        <p class="text-color text-[16px]">
          Invite friends and get rewards
        </p>
        <div class="h-[8px] rounded-full bg-[--bc-alphaBlack4a] relative mt-[37px]">
          <div
            class="danmu leading-[28px] min-w-[90px] flex items-center px-[15px] text-[14px] font-medium text-center border-radius-0 bg-[--bc-alphaBlack4a] absolute top-[-8px] translate-y-[-100%]"
            style="left: 10%;"
          >
            <span class="whitespace-pre text-white">0.00</span> / <span class="whitespace-pre">100.00</span>
          </div>
          <p class="h-full rounded-[inherit] bg-active" style="width: 10%;" />
        </div>
      </div>
    </div>
    <button
      class="h-[46px] min-w-[130px] px-[15px] shrink-0 text-[14px] font-bold text-font border-radius-0 bg-active relative"
      @click="show = true"
    >
      Claim
    </button>
  </div>
  <BaseModal v-model:show="show" content-class="mx-auto w-full max-w-[520px] h-[max-content] !min-w-[200px] !bg-transparent z-[555]" no-close overlay-class="z-[550]">
    <InviteWapTurntable class="!mx-auto" @close="show = false" />
  </BaseModal>
</template>

<style></style>
