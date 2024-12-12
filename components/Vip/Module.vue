<script lang="ts" setup>
import type { VipLevel } from '~/api/vip'

const currentLevel = defineProp<number>(1)
const levelList = inject<VipLevel[]>('levelList')
const nowLevel = computed(() => {
  if (!levelList)
    return {} as VipLevel

  return levelList.find(level => level.id === currentLevel.value)!
})
</script>

<template>
  <div class="md:mb-[40px] mb-[25px] w-full">
    <h3 class="md:text-[20px] text-[15px] font-bold md:mb-[20px]">
      <div class="text-[--bc-color20]">
        <span class="text-white">VIP {{ currentLevel }}</span> Benefits
      </div>
    </h3>
    <div class="grid gap-[10px]" style="grid-template-columns: repeat(auto-fill, minmax(335px, 1fr));">
      <div
        class="bg-linear-12 border-radius-1 md:p-[15px] p-[10px] md:h-[150px] h-[117px] flex flex-col relative items-center mt-[10px] md:mt-0"
      >
        <div class="flex items-center flex-1 w-full">
          <div
            v-if="!nowLevel.bonusRain"
            class="absolute bg-[--bc-alphaBlack] w-full h-full top-0 left-0 z-[1] border-radius-1"
          />
          <div
            class="md:w-[90px] md:h-[90px] w-[67px] h-[67px] md:mr-[15px] mr-[10px] shrink-0 bg-no-repeat bg-cover"
            style="background-image: url(https://web-res-ccc.afunimg8.com/cdn-cgi/image/format=auto/C02/bonusCenter/redpacket.png);"
          />
          <div class="flex-1">
            <div class="md:text-[18px] text-[14px] text-white mb-[6px]">
              Rewards Rain
            </div>
            <p class="md:text-[14px] text-[12px]  line-clamp-3">
              Unlock extra rounds
            </p>
          </div>
        </div>
      </div>
      <!-- 红包雨 -->
      <div
        class="bg-linear-12 border-radius-1 md:p-[15px] p-[10px] md:h-[150px] h-[117px] flex flex-col relative items-center mt-[10px] md:mt-0"
      >
        <div class="flex items-center flex-1 w-full">
          <div
            v-if="nowLevel.levelBonus <= 0"
            class="absolute bg-[--bc-alphaBlack] w-full h-full top-0 left-0 z-[1] border-radius-1"
          />
          <div
            class="md:w-[90px] md:h-[90px] w-[67px] h-[67px] md:mr-[15px] mr-[10px] shrink-0 bg-no-repeat bg-cover"
            style="background-image: url(https://web-res-ccc.afunimg8.com/cdn-cgi/image/format=auto/C02/bonusCenter/vip_upgrade.png);"
          />
          <div class="flex-1">
            <div class="md:text-[18px] text-[14px] text-white mb-[6px]">
              Level up rewards
            </div>
            <p class="md:text-[14px] text-[12px]  line-clamp-3">
              VIP level up to get rewards!
            </p>
          </div>
        </div>
        <div
          v-if="nowLevel.levelBonus > 0"
          class="relative flex justify-center items-center w-full md:h-[30px] h-[20px] md:pl-[8px] pl-[15px] md:pr-[22px] pr-[21px] bg-[--bc-color19] border-radius-0"
        >
          <p class="md:text-[14px] text-[12px] shrink-0 truncate whitespace-pre text-center">
            Upgrade rewards:
            <span class="text-white font-bold">R$10,000.00</span>
          </p>
        </div>
      </div>
      <!-- 等级经验 -->
      <div
        class="bg-linear-12 border-radius-1 md:p-[15px] p-[10px] md:h-[150px] h-[117px] flex flex-col relative items-center mt-[10px] md:mt-0"
      >
        <div class="flex items-center flex-1 w-full">
          <div
            v-if="nowLevel.weeklyBonus <= 0"
            class="absolute bg-[--bc-alphaBlack] w-full h-full top-0 left-0 z-[1] border-radius-1"
          />
          <div
            class="md:w-[90px] md:h-[90px] w-[67px] h-[67px] md:mr-[15px] mr-[10px] shrink-0 bg-no-repeat bg-cover"
            style="background-image: url(https://web-res-ccc.afunimg8.com/cdn-cgi/image/format=auto/C02/bonusCenter/vip_weekly.png?t20231224);"
          />
          <div class="flex-1">
            <div class="md:text-[18px] text-[14px] text-white mb-[6px]">
              Weekly rewards
            </div>
            <p class="md:text-[14px] text-[12px]  line-clamp-3">
              Claim free rewards every week.
            </p>
          </div>
        </div>
        <div
          v-if="nowLevel.weeklyBonus > 0"
          class="relative flex justify-center items-center w-full md:h-[30px] h-[20px] md:pl-[8px] pl-[15px] md:pr-[22px] pr-[21px] bg-[--bc-color19] border-radius-0"
        >
          <p class="md:text-[14px] text-[12px] shrink-0 truncate whitespace-pre text-center">
            Bet <span class="text-white font-bold">{{ toCurrency(nowLevel.weeklyBonus) }}</span> weekly,get <span
              class="text-white font-bold"
            >{{ toCurrency(nowLevel.weeklyExperience) }}</span> rewards.
          </p>
        </div>
      </div>
      <!-- 周礼金 -->
      <div
        class="bg-linear-12 border-radius-1 md:p-[15px] p-[10px] md:h-[150px] h-[117px] flex flex-col relative items-center mt-[10px] md:mt-0"
      >
        <div class="flex items-center flex-1 w-full">
          <div
            v-if="nowLevel.dailyBonus <= 0"
            class="absolute bg-[--bc-alphaBlack] w-full h-full top-0 left-0 z-[1] border-radius-1"
          />
          <div
            class="md:w-[90px] md:h-[90px] w-[67px] h-[67px] md:mr-[15px] mr-[10px] shrink-0 bg-no-repeat bg-cover"
            style="background-image: url(https://web-res-ccc.afunimg8.com/cdn-cgi/image/format=auto/C02/bonusCenter/vip_day_bonus.png);"
          />
          <div class="flex-1">
            <div class="md:text-[18px] text-[14px] text-white mb-[6px]">
              Daily rewards
            </div>
            <p class="md:text-[14px] text-[12px]  line-clamp-3">
              Claim free rewards every day.
            </p>
          </div>
        </div>
        <div
          v-if="nowLevel.dailyBonus > 0"
          class="relative flex justify-center items-center w-full md:h-[30px] h-[20px] md:pl-[8px] pl-[15px] md:pr-[22px] pr-[21px] bg-[--bc-color19] border-radius-0"
        >
          <p class="md:text-[14px] text-[12px] shrink-0 truncate whitespace-pre text-center">
            Bet
            <span class="text-white font-bold">R$5,000.00</span>
            daily,get
            <span class="text-white font-bold">R$20.00</span> rewards.
          </p>
        </div>
      </div>
      <!-- 日礼金 -->
      <div
        class="bg-linear-12 border-radius-1 md:p-[15px] p-[10px] md:h-[150px] h-[117px] flex flex-col relative items-center mt-[10px] md:mt-0"
      >
        <div class="flex items-center flex-1 w-full">
          <div
            v-if="nowLevel.monthlyBonus <= 0"
            class="absolute bg-[--bc-alphaBlack] w-full h-full top-0 left-0 z-[1] border-radius-1"
          />
          <div
            class="md:w-[90px] md:h-[90px] w-[67px] h-[67px] md:mr-[15px] mr-[10px] shrink-0 bg-no-repeat bg-cover"
            style="background-image: url(https://web-res-ccc.afunimg8.com/cdn-cgi/image/format=auto/C02/bonusCenter/vip_month_bonus.png);"
          />
          <div class="flex-1">
            <div class="md:text-[18px] text-[14px] text-white mb-[6px]">
              Rewards Harian
            </div>
            <p class="md:text-[14px] text-[12px]  line-clamp-3">
              Claim free rewards each month.
            </p>
          </div>
        </div>
        <div
          v-if="nowLevel.monthlyBonus > 0"
          class="relative flex justify-center items-center w-full md:h-[30px] h-[20px] md:pl-[8px] pl-[15px] md:pr-[22px] pr-[21px] bg-[--bc-color19] border-radius-0"
        >
          <p class="md:text-[14px] text-[12px] shrink-0 truncate whitespace-pre text-center">
            Bet
            <span class="text-white font-bold">R$200,000.00</span>
            monthly, get
            <span class="text-white font-bold">R$7,777.00</span>
            rewards.
          </p>
        </div>
      </div>
      <!-- 月礼金 -->
      <!-- 专属vip -->
      <div
        class="bg-linear-12 border-radius-1 md:p-[15px] p-[10px] md:h-[150px] h-[117px] flex flex-col relative items-center mt-[10px] md:mt-0"
      >
        <div class="flex items-center flex-1 w-full">
          <div
            v-if="!nowLevel.exclusiveVip"
            class="absolute bg-[--bc-alphaBlack] w-full h-full top-0 left-0 z-[1] border-radius-1"
          />
          <div
            class="md:w-[90px] md:h-[90px] w-[67px] h-[67px] md:mr-[15px] mr-[10px] shrink-0 bg-no-repeat bg-cover"
            style="background-image: url(https://web-res-ccc.afunimg8.com/cdn-cgi/image/format=auto/C02/bonusCenter/vip_host.png);"
          />
          <div class="flex-1">
            <div class="md:text-[18px] text-[14px] text-white mb-[6px]">
              Exclusive VIP support
            </div>
            <p class="md:text-[14px] text-[12px]  line-clamp-3">
              Experience VIP treatment with exclusive VIP support!
            </p>
          </div>
        </div>
      </div>
      <!-- 专属奖金 -->
      <div
        class="bg-linear-12 border-radius-1 md:p-[15px] p-[10px] md:h-[150px] h-[117px] flex flex-col relative items-center mt-[10px] md:mt-0"
      >
        <div class="flex items-center flex-1 w-full">
          <div
            v-if="!nowLevel.exclusiveBonuses"
            class="absolute bg-[--bc-alphaBlack] w-full h-full top-0 left-0 z-[1] border-radius-1"
          />
          <div
            class="md:w-[90px] md:h-[90px] w-[67px] h-[67px] md:mr-[15px] mr-[10px] shrink-0 bg-no-repeat bg-cover"
            style="background-image: url(https://web-res-ccc.afunimg8.com/cdn-cgi/image/format=auto/C02/bonusCenter/vip_exclusive.png);"
          />
          <div class="flex-1">
            <div class="md:text-[18px] text-[14px] text-white mb-[6px]">
              Exclusive rewards
            </div>
            <p class="md:text-[14px] text-[12px]  line-clamp-3">
              Reach New Heights, Unlock Exclusive Rewards.
            </p>
          </div>
        </div>
      </div>
      <!-- 优质奖品 -->
      <div
        class="bg-linear-12 border-radius-1 md:p-[15px] p-[10px] md:h-[150px] h-[117px] flex flex-col relative items-center mt-[10px] md:mt-0"
      >
        <div class="flex items-center flex-1 w-full">
          <div
            v-if="!nowLevel.premiumGiveaways"
            class="absolute bg-[--bc-alphaBlack] w-full h-full top-0 left-0 z-[1] border-radius-1"
          />
          <div
            class="md:w-[90px] md:h-[90px] w-[67px] h-[67px] md:mr-[15px] mr-[10px] shrink-0 bg-no-repeat bg-cover"
            style="background-image: url(https://web-res-ccc.afunimg8.com/cdn-cgi/image/format=auto/C02/bonusCenter/vip_luxury.png);"
          />
          <div class="flex-1">
            <div class="md:text-[18px] text-[14px] text-white mb-[6px]">
              Premium giveaways
            </div>
            <p class="md:text-[14px] text-[12px]  line-clamp-3">
              Unlock premium giveaways – claim extravagant rewards!
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>
