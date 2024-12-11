<script lang="ts" setup>
const userStore = useUserStore()
const { userInfo } = storeToRefs(userStore)
const showProfile = ref<boolean>(false)
</script>

<template>
  <div class="bg-color2 mt-[10px] border-radius-0 p-[10px]">
    <div class="flex items-center" @click="showProfile = true">
      <div class="flex items-center mr-[10px] flex-1">
        <Image
          :src="userInfo?.avatar" alt="" importance="auto"
          class="w-[60px] h-[60px] rounded-full mr-[10px] border-[2px] border-solid border-[--bc-bgColor5] shrink-0"
        />
        <div>
          <div class="mb-[6px] text-[14px] text-white font-[600]">
            <span>{{ userInfo?.nickname }}</span>
          </div>
          <div class="text-color flex items-center">
            <span class="mr-[14px] text-[12px]">ID: {{ userInfo?.id }}</span>
            <i class="inline-block h-[max-content] w-[max-content] icon-new-copy text-[15px] text-color" />
          </div>
        </div>
      </div><i
        class="inline-block h-[max-content] w-[max-content] icon-new-back text-color text-[13px] rotate-[180deg]"
      />
    </div>
    <div class="flex flex-col">
      <div class="w-full h-[1px] bg-[--bc-bgColor9] shrink-0 my-[10px]" />
      <div class="flex items-center justify-between">
        <div class="shrink-0 h-[50px] relative">
          <Image
            src="https://web-res-ccc.afunimg8.com/cdn-cgi/image/format=auto/C02/vip/l/vip1_l.png?t202411291700"
            alt="" importance="auto" class="h-full"
          />
        </div>
        <div class="text-[10px] flex flex-1 items-center mx-[20px]">
          <div class="text-[14px] mr-[10px] text-white font-bold">
            VIP 1
          </div>
          <div class="flex-1">
            <p class="text-center text-white">
              0XP
            </p>
            <div class="h-[6px] rounded-[3px] bg-color overflow-hidden relative my-[4px]">
              <p
                class="bg-active h-full rounded-[inherit] absolute left-0 top-0 overflow-hidden inline-block"
                style="width: 10%;"
              />
            </div>
            <p class="text-center">
              200XP to VIP 2
            </p>
          </div>
        </div><i class="inline-block h-[max-content] w-[max-content] icon-new-back text-color rotate-[180deg]" />
      </div>
    </div>
  </div>

  <div class="w-full flex items-center justify-center space-x-[8px] mt-[10px] text-[14px]">
    <div
      class="flex-1 bg-color-linear-42 flex flex-col items-center justify-center h-[60px] p-[6px] border-[0.5px] overflow-hidden border-solid border-[--bc-bgColor2] border-radius-0 relative"
    >
      <i
        class="inline-block h-[max-content] w-[max-content] icon-new-deposit text-[80px] absolute top-[6px] right-0 text-[--bc-alphaBlack1a]"
      /><button
        class="w-full h-full flex items-center justify-start px-[14px] absolute top-0 left-0 z-10 text-white font-bold"
      >
        <i class="inline-block h-[max-content] w-[max-content] icon-new-deposit text-[24px] mr-[12px]" /><span
          class="whitespace-pre-wrap text-left"
        >Deposit</span>
      </button>
    </div>
    <div
      class="flex-1 bg-color-linear-43 flex flex-col items-center justify-center h-[60px] p-[6px] border-[0.5px] overflow-hidden border-solid border-[--bc-bgColor2] border-radius-0 relative"
    >
      <i
        class="inline-block h-[max-content] w-[max-content] icon-new-withdraw text-[80px] absolute top-[6px] right-0 text-[--bc-alphaBlack1a]"
      /><button
        class="w-full h-full flex items-center justify-start px-[14px] absolute top-0 left-0 z-10 text-white font-bold"
      >
        <i class="inline-block h-[max-content] w-[max-content] icon-new-withdraw text-[24px] mr-[12px]" /><span
          class="whitespace-pre-wrap text-left"
        >Withdraw</span>
      </button>
    </div>
  </div>

  <BaseDrawer v-model:open="showProfile" direction="right" content-class="z-[999] h-[100vh] p-0" overlay-class="z-[999]">
    <template #title>
      <span class="text-white">Profile</span>
    </template>
    <AccountUserProfile />
  </BaseDrawer>
</template>

<style></style>
