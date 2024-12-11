<script setup lang="ts">
import type { VipLevel } from '~/api/vip'

const levelList = inject<VipLevel[]>('levelList')
const show = ref(false)
const { isPc } = useDevice()
</script>

<template>
  <div
    class="w-full bg-no-repeat bg-cover h-[200px] relative md:rounded-[10px] !rounded-b-[0]"
    style="background-image: url(https://web-res-ccc.afunimg8.com/cdn-cgi/image/format=auto/C02/C0E/vip/bg_pc_login.png);"
  >
    <div class="w-full h-[200px] flex flex-col">
      <div class="flex w-full justify-between h-full">
        <div class="md:ml-[114px] h-[184px] shrink-0 relative">
          <Image src="https://web-res-ccc.afunimg8.com/cdn-cgi/image/format=auto/C02/vip/l/vip1_l.png" alt="" importance="auto" class="!h-auto md:!h-full" />
        </div>
        <div class="flex flex-col justify-between pt-[12px] pb-[28px] flex-1 max-w-[800px] ml-auto mr-[5px]">
          <div>
            <div>
              <h4 class="text-[--bc-color20] flex justify-between items-centertext-[20px] mb-[4px] font-bold">
                <div>
                  yi Soya
                </div>
                <div class="flex items-center overflow-hidden h-full cursor-pointer text-color hover:text-white">
                  <i class="inline-block h-[max-content] w-[max-content] icon-new-live-support cursor-pointer text-[18px] mt-[1px] text-active" />
                  <span class="flex-1 truncate text-left text-[14px] ml-[6px] font-normal underline">VIP support</span>
                </div>
              </h4>
              <h2 class="text-[14px] text-[--bc-color20] flex items-center overflow-hidden">
                <div class="font-bold text-[26px] whitespace-nowrap shrink-0">
                  VIP 1
                </div>
              </h2>
            </div>
          </div>
          <div class="text-[14px]">
            <div class="text-center text-[--bc-color20]">
              0xp
            </div>
            <div class="h-[10px] border-radius-0 bg-color my-[5px]" />
            <div class="flex justify-between font-bold">
              <p>
                VIP 1
              </p>
              <p>
                VIP 2
              </p>
            </div>
          </div><div class="text-color flex items-center justify-between text-[14px]">
            <div>
              200XP to VIP 2
              <i class="inline-block h-[max-content] w-[max-content] icon-new-info-normal cursor-pointer ml-[10px] relative hover:text-white">
                <div class="opacity-0 hidden select-none pointer-events-none invisible absolute w-[400px] left-0 top-[26px] p-[10px] pr-[14px] box-shadow-02 border-radius-0 bg-[--bc-bgColor9] z-[200]">
                  <ul class="text-[14px] list-disc list-outside text-color pl-[20px]">
                    <li>Bet R$1.00 = 1EXP</li>
                  </ul>
                </div>
              </i>
            </div>
            <p class="underline text-center cursor-pointer text-color" @click="show = true">
              VIP Level &amp; Benefits
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <BaseModal v-if="isPc" v-model:show="show" content-class="w-[700px]">
    <template #title>
      <div classs="w-full overflow-hidden h-full">
        <div class="flex justify-between items-center h-[54px] px-[20px] text-white">
          VIP Level &amp; Benefits
        </div>
      </div>
    </template>
    <div class="text-[14px] flex-1 bg-color-3 overflow-hidden border-radius-0 flex flex-col">
      <div class="shrink-0 flex text-justify items-center h-[46px] px-[20px] text-[--bc-color20] font-semibold vip-level-item">
        <div class="flex-1 shrink-0 text-left">
          Level
        </div><div class="flex-1 shrink-0 text-center px-[4px]">
          Required XP
        </div><div class="flex-1 shrink-0 text-center px-[4px]">
          Level up rewards
        </div><div class="flex-1 shrink-0 text-center px-[4px]">
          Weekly rewards
        </div><div class="flex-1 shrink-0 text-center px-[4px]">
          Daily rewards
        </div><div class="flex-1 shrink-0 text-center px-[4px]">
          Rewards Harian
        </div>
      </div>
      <div class="flex-1 overflow-y-auto overflow-hidden">
        <div v-for="(item, index) in levelList" :key="index" class="flex items-center px-[20px] h-[46px] text-[--bc-textColor] vip-level-item bg-color-linear-12">
          <div class="flex-1 shrink-0 flex items-center">
            <Image :src="item.icon" alt="" importance="auto" class="shrink-0 mr-[6px] !h-auto" />
            <span>{{ item.name }}</span>
          </div><div class="flex-1 shrink-0 px-[4px] text-center">
            <template v-if="item.experience">
              {{ item.experience }}
            </template>
            <template v-else>
              -
            </template>
          </div>
          <div class="flex-1 shrink-0 text-center px-[4px]">
            <template v-if="item.levelBonus">
              {{ item.levelBonus }}
            </template>
            <template v-else>
              -
            </template>
          </div>
          <div class="flex-1 shrink-0 text-center px-[4px]">
            <template v-if="item.weeklyExperience">
              {{ item.weeklyBonus }}
            </template>
            <template v-else>
              -
            </template>
          </div>
          <div class="flex-1 shrink-0 text-center px-[4px]">
            <template v-if="item.dailyBonus">
              {{ item.dailyBonus }}
            </template>
            <template v-else>
              -
            </template>
          </div>
          <div class="flex-1 shrink-0 text-center px-[4px]">
            <template v-if="item.dailyExperience">
              {{ item.dailyExperience }}
            </template>
            <template v-else>
              -
            </template>
          </div>
        </div>
      </div>
    </div>
  </BaseModal>
</template>
