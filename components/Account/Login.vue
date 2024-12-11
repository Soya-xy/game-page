<script lang="ts" setup>
import { ref } from 'vue'

const showRain = ref<boolean>(false)
</script>

<template>
  <div class="bg-color2 mt-[10px] border-radius-0 p-[10px]">
    <div class="flex items-center">
      <div class="flex items-center mr-[10px] flex-1">
        <Image
          src="https://web-res-ccc.afunimg8.com/cdn-cgi/image/format=auto/C02/userinfo/header/h_default.png?t=20230925"
          alt="" importance="auto"
          class="w-[60px] h-[60px] rounded-full mr-[10px] border-[2px] border-solid border-[--bc-bgColor5] shrink-0"
        />
        <div>
          <div class="mb-[6px] text-[14px] text-white font-[600]">
            <span>Welcome to<span class="uppercase">afun.com.br</span></span>
          </div>
          <div class="text-color">
            Please Sign up or Sign in first
          </div>
        </div>
      </div>
    </div>
    <div class="flex items-center font-bold mt-[10px]">
      <button
        class="h-[40px] flex-1 bg-[--bc-bgColor9] border-radius-0 text-white mr-[10px]"
        @click="routerPush('/login')"
      >
        Sign In
      </button>
      <button class="h-[40px] flex-1 bg-active border-radius-0 text-font" @click="routerPush('/register')">
        Sign Up
      </button>
    </div>
  </div>

  <div class="flex mt-[15px] gap-x-[10px]">
    <button
      class="flex-1 relative flex items-center bg-color-linear-02 border-radius-0 h-[40px] text-white font-bold overflow-hidden"
    >
      <div class="h-full shrink-0 p-[4px]">
        <Image
          src="https://web-res-ccc.afunimg8.com/cdn-cgi/image/format=auto/C02/bonusCenter/checkin.png?t20231224"
          alt="" importance="auto" class="h-full"
        />
      </div>
      <span class="whitespace-break-spaces leading-[13px] text-left">Check In</span>
    </button>
    <button
      class="flex-1 relative flex items-center bg-color-linear-03 border-radius-0 h-[40px] text-white font-bold overflow-hidden"
      @click="showRain = true"
    >
      <div class="h-full shrink-0 p-[4px]">
        <Image
          src="https://web-res-ccc.afunimg8.com/cdn-cgi/image/format=auto/C02/bonusCenter/redpacket.png?t20231224"
          alt="" importance="auto" class="h-full rotate-y-reverse"
        />
      </div><span class="whitespace-break-spaces leading-[13px] text-left">Rewards Rain</span>
    </button>
  </div>
  <WapModal v-model:open="showRain" no-close content-class="p-0">
    <AccountRewards @close="showRain = false" />
  </WapModal>
</template>

<style></style>
