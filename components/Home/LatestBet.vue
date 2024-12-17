<script lang="ts" setup>
const title = defineProp<string>('Latest Bet & Race')

const active = ref(0)

const list = Array.from({ length: 1000 }, (_, index) => ({
  id: index,
  name: `Pawsome Xmas ${index}`,
  phone: `${index}${index}${index}***523`,
  bet: `${index},000.00`,
  multiplier: `${index}.82x`,
  profit: `+${index},650.00`,
}))
</script>

<template>
  <div>
    <BaseTitle :name="title">
      <template #action>
        <div class="flex border-radius-0 items-center justify-center bg-color2 leading-[20px] text-[13px]">
          <div
            class="w-[132px] border-radius-0 flex items-center justify-center h-[35px] shrink-0 cursor-pointer font-extrabold"
            :class="{ 'bg-page text-white font-extrabold': active === 0 }" @click="active = 0"
          >
            High Roller
          </div>
          <div
            class="w-[132px] border-radius-0 flex items-center justify-center h-[35px] shrink-0 cursor-pointer"
            :class="{ 'bg-page text-white font-extrabold': active === 1 }" @click="active = 1"
          >
            Latest Bets
          </div>
        </div>
      </template>
    </BaseTitle>
    <div class="px-[12px] py-[24px] bg-color2 rounded-[10px]">
      <div class="text-[14px] flex justify-center mb-[24px] space-x-[4px]">
        <div class="flex-[11] shrink-0 truncate">
          Game
        </div>
        <div class="flex-[9] shrink-0 truncate">
          Player
        </div>
        <div class="flex-[8] shrink-0 truncate">
          Bet
        </div>
        <div class="flex-[6] shrink-0 truncate">
          Multiplier
        </div>
        <div class="flex-[7] shrink-0 truncate text-right">
          Profit
        </div>
      </div>
      <div class="md:h-[460px] h-[240px]">
        <BaseAutoScroll :list="list">
          <template #default="{ itemData }">
            <div class="w-full h-[21px] flex flex-col justify-between leading-[21px]">
              <div class="text-[14px] flex justify-center space-x-[4px]">
                <div class="flex-[11] shrink-0 truncate flex">
                  <img
                    src="https://web-res-ccc.afunimg8.com/cdn-cgi/image/format=auto/C02/_E/home/gclassImage/new-default.png?t20241121"
                    alt="" importance="auto" class="w-[20px] h-[20px] shrink-0 mr-[4px]" lazy=""
                  ><span
                    class="flex-1 truncate"
                  >{{ itemData.name }}</span>
                </div>
                <div class="flex-[9] shrink-0 truncate text-white">
                  {{ itemData.phone }}
                </div>
                <div class="flex-[8] shrink-0 truncate text-white flex font-medium">
                  <span class="whitespace-pre mr-[4px]">{{ itemData.bet }}</span>
                  <img
                    src="https://web-res-ccc.afunimg8.com/cdn-cgi/image/format=auto/dev_skin/C02/wallet/currency/BRL.png"
                    alt="" importance="auto" class="w-[20px] h-[20px] shrink-0" lazy=""
                  >
                </div>
                <div class="flex-[6] shrink-0 truncate">
                  {{ itemData.multiplier }}
                </div>
                <div class="flex-[7] shrink-0 truncate flex justify-end font-semibold text-active">
                  <span class="whitespace-pre mr-[4px]">{{ itemData.profit }}</span>
                  <img
                    src="https://web-res-ccc.afunimg8.com/cdn-cgi/image/format=auto/dev_skin/C02/wallet/currency/BRL.png"
                    alt="" importance="auto" class="w-[20px] h-[20px] shrink-0" lazy=""
                  >
                </div>
              </div>
            </div>
          </template>
        </BaseAutoScroll>
      </div>
    </div>
  </div>
</template>

<style></style>
