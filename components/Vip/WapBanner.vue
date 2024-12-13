<script lang="ts" setup>
import type { VipLevel } from '~/api/vip'
import { Dropdown } from 'floating-vue'

const levelList = inject<VipLevel[]>('levelList')
const current = ref(0)
const currentList = ref([{
  title: 'Level up rewards',
  value: 'levelBonus',
}, {
  title: 'Weekly rewards',
  value: 'weeklyBonus',
}, {
  title: 'Daily rewards',
  value: 'dailyBonus',
}, {
  title: 'Rewards Harian',
  value: 'monthlyBonus',
}])
const showBenefits = ref<boolean>(false)
const user = useUserStore()
const { userInfo } = storeToRefs(user)
</script>

<template>
  <div
    class="w-full bg-no-repeat bg-cover h-0 pb-[48%] relative"
    style="background-image: url(https://web-res-ccc.afunimg8.com/cdn-cgi/image/format=auto/C02/C0E/vip/bg_login.png);"
  >
    <div class="absolute top-0 left-0 w-full h-full flex flex-col">
      <div class="flex w-full justify-between mt-[4px]">
        <div class="shrink-0 relative w-[120px]">
          <Image
            src="https://web-res-ccc.afunimg8.com/cdn-cgi/image/format=auto/C02/vip/l/vip1_l.png?t202411291700"
            alt="" importance="auto" class="w-full"
          />
        </div>
        <div class="flex flex-col w-[60%] pr-[10px]">
          <div class="mt-[24px]">
            <div>
              <h4 class="text-color font-bold mb-[4px]">
                <div>
                  {{ userInfo?.nickname }}
                </div>
              </h4>
              <h2 class="text-[15px] font-bold text-white">
                VIP {{ userInfo?.userVip?.vipLevel }}
              </h2>
            </div>
          </div>
          <div class="text-[10px] mt-[16px]">
            <div class="text-center text-white">
              {{ userInfo?.userVip?.vipCoin }}xp
            </div>
            <div class="h-[6px] rounded-[3px] bg-color my-[4px]">
              <div class="bg-active text-color h-full rounded-[inherit] overflow-hidden" style="width: 10%;" />
            </div>
            <div class="flex justify-between">
              <p>
                VIP 1
              </p>
              <p>
                VIP 2
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="flex w-full justify-between mt-[5%] text-[12px]">
        <p class="underline text-white text-center w-[120px]" @click="showBenefits = true">
          VIP Level &amp; Benefits
        </p>
        <div class="w-[60%] text-color flex items-center relative">
          <p>
            {{ (userInfo?.userVip?.nextCoin || 0) - (userInfo?.userVip?.vipCoin || 0) }}XP to VIP {{ (userInfo?.userVip?.vipLevel || 0) + 1 }}
          </p>
          <Dropdown :distance="6" :skidding="-50" no-arrow placement="auto" popper-class="vip">
            <i
              class="inline-block h-[max-content] w-[max-content] icon-new-info-normal ml-[10px] text-[14px] text-color"
            />
            <template #popper>
              <div class="box-shadow-02 border-radius-0 bg-[--bc-bgColor9] z-[10] p-[10px]">
                <ul class="text-[12px] list-disc list-outside text-color leading-[1.2] pl-[20px]">
                  <li>Bet R$1.00 = 1EXP</li>
                </ul>
              </div>
            </template>
          </Dropdown>

          <div
            class="opacity-0 hidden select-none pointer-events-none invisible absolute w-[75vw] right-[5.3vw] top-[26px] p-[10px] pr-[14px] box-shadow-02 border-radius-0 bg-[--bc-bgColor9] z-10"
          >
            <ul class="text-[12px] list-disc list-outside text-color pl-[20px]">
              <li>
                Bet R$1.00 = 1EXP
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  <BaseDrawer
    v-model:open="showBenefits" direction="right" content-class="z-[999] h-[100vh] p-0"
    overlay-class="z-[998]" no-header
  >
    <VipHeader back @close="showBenefits = false" />
    <div class="mt-[56px]">
      <BaseTabs v-model="current" :list="currentList" class="!static" />
      <div
        class="bg-[--bc-color-3] text-[12px] text-color flex items-center justify-center h-[30px] shrink-0 px-[25px] mb-[15px] font-medium"
      >
        <div class="flex-1 text-left">
          Level
        </div>
        <div class="flex-1 text-center">
          Required XP
        </div>
        <div class="flex-1 text-right">
          {{ currentList[current]!.title }}
        </div>
      </div>

      <div class="flex-1 px-[15px] pb-[20px] overflow-hidden border-radius-0 flex flex-col">
        <div class="flex-1 overflow-y-auto">
          <div
            v-for="(item, index) in levelList" :key="index"
            class="flex items-center h-[40px] px-[14px] text-color text-[12px]" :class="{
              'bg-[--bc-color-3]': index % 2 === 0,
              'bg-color2': index % 2 === 1,
            }"
          >
            <div class="flex-1 shrink-0 text-left flex items-center">
              <Image :src="item.icon" alt="" importance="auto" class="!h-[22px] shrink-0 mr-[4px]" />
              <span>{{ item.name }}</span>
              <i
                v-if="userInfo?.userVip.vipLevel === item.level"
                class="inline-block h-[max-content] w-[max-content] icon-new-hook text-green ml-[4px] text-[16px]"
              />
            </div>
            <div class="flex-1 shrink-0 text-center">
              <span class="whitespace-pre">{{ item.experience }}</span>
            </div>
            <div class="flex-1 shrink-0 text-right">
              {{ toCurrency(item[(currentList[current]!.value as keyof VipLevel) ?? '-'] as number) }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </BaseDrawer>
</template>

<style>
.vip .v-popper__arrow-container {
  display: none;
}
</style>
