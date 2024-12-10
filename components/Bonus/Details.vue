<script lang="ts" setup>
const list = [
  {
    money: 0,
    name: 'Jackpot Treasure',
    icon: 'https://web-res-ccc.afunimg8.com/cdn-cgi/image/format=auto/C02/bonusCenter/bonusCategory/8.png?t2024091214',
  },
  {
    money: 0,
    name: `Dragon's Treasure`,
    icon: 'https://web-res-ccc.afunimg8.com/cdn-cgi/image/format=auto/C02/bonusCenter/bonusCategory/15.png?t2024091214',
  },
  {
    money: 0,
    name: 'Daily Loss Cashback',
    icon: 'https://web-res-ccc.afunimg8.com/cdn-cgi/image/format=auto/C02/bonusCenter/bonusCategory/16.png?t2024091214',
  },
  {
    money: 0,
    name: 'Gachapon Grand Prize',
    icon: 'https://web-res-ccc.afunimg8.com/cdn-cgi/image/format=auto/C02/bonusCenter/bonusCategory/20.png?t2024091214',
  },
  {
    money: 0,
    name: 'Daily Bonus',
    icon: 'https://web-res-ccc.afunimg8.com/cdn-cgi/image/format=auto/C02/bonusCenter/bonusCategory/23.png?t2024091214',
  },
  {
    money: 0,
    name: 'Monthly bonus',
    icon: 'https://web-res-ccc.afunimg8.com/cdn-cgi/image/format=auto/C02/bonusCenter/bonusCategory/25.png?t2024091214',
  },
  {
    money: 0,
    name: 'Weekly Bonus',
    icon: 'https://web-res-ccc.afunimg8.com/cdn-cgi/image/format=auto/C02/bonusCenter/bonusCategory/29.png?t2024091214',
  },
  {
    money: 0,
    name: 'Level up Bonus',
    icon: 'https://web-res-ccc.afunimg8.com/cdn-cgi/image/format=auto/C02/bonusCenter/bonusCategory/31.png?t2024091214',
  },
  {
    money: 0,
    name: 'Deposit Bonus',
    icon: 'https://web-res-ccc.afunimg8.com/cdn-cgi/image/format=auto/C02/bonusCenter/bonusCategory/100.png?t2024091214',
  },
  {
    money: 0,
    name: 'Special Bonus',
    icon: 'https://web-res-ccc.afunimg8.com/cdn-cgi/image/format=auto/C02/bonusCenter/bonusCategory/200.png?t2024091214',
  },
]

const options = [{ value: 'All bonuses', label: 'All bonuses' }, { value: 'Jackpot Treasure', label: 'Jackpot Treasure' }, { value: 'Dragon\'s Treasure', label: 'Dragon\'s Treasure' }, { value: 'Daily Loss Cashback', label: 'Daily Loss Cashback' }, { value: 'Gachapon Grand Prize', label: 'Gachapon Grand Prize' }, { value: 'Daily Bonus', label: 'Daily Bonus' }, { value: 'Monthly bonus', label: 'Monthly bonus' }, { value: 'Weekly Bonus', label: 'Weekly Bonus' }, { value: 'Level up Bonus', label: 'Level up Bonus' }, { value: 'Deposit Bonus', label: 'Deposit Bonus' }, { value: 'Special Bonus', label: 'Special Bonus' }]
</script>

<template>
  <div>
    <div class="flex-1 overflow-hidden flex flex-col pt-[20px] px-[20px] pb-[30px]">
      <div class="flex-1 overflow-y-auto">
        <div class="text-[20px] font-bold mb-[10px] text-white">
          Bonus Categories
        </div>
        <div class="grid grid-cols-3 gap-[10px]">
          <div
            v-for="item in list" :key="item.name"
            class="bg-[--bc-color-3] flex items-center rounded-[8px] overflow-hidden"
          >
            <div class="w-full h-full flex items-center">
              <div class="w-[60px] h-[60px] shrink-0 mr-[10px] p-[6px]">
                <Image :src="item.icon" alt="" class="w-full" />
              </div>
              <div class="flex flex-col justify-center items-start flex-1">
                <div class="text-[12px] text-color">
                  {{ item.name }}
                </div>
                <div class="text-color-linear-20 text-[14px] font-bold mt-[4px]">
                  <span class="whitespace-pre">{{ toCurrency(item.money) }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="pb-[6px] font-bold mt-[15px] mb-[6px] text-white flex items-center justify-between">
          <div class="text-[16px]">
            Bonus Transactions
          </div>
          <FilterSelect :option="options" content-class="z-[555]" placeholder="Select a bonuses" />
        </div>
        <div class="bg-color2 border-[1px] border-solid border-[--bc-bgColor2] rounded-[8px] text-[14px]">
          <div
            class="bg-[--bc-color-3] px-[5px] h-[40px] text-[--bc-color20] flex items-center justify-center sticky left-0 -top-[1px]"
          >
            <div class="w-[25%] text-left">
              Bonus Type
            </div>
            <div class="flex-1 text-center">
              Claimed Amount
            </div>
            <div class="w-[25%] text-right">
              Time
            </div>
          </div>
          <div class="v3-infinite-loading">
            <div style="display: none;">
              <div class="w-full flex items-center justify-center relative infinite-loading h-[400px]">
                <div
                  data-v-4ba16216="" data-v-1d666f6a=""
                  class="w-[max-content] h-[max-content] absolute left-0 right-0 top-0 bottom-0 m-auto"
                >
                  <svg data-v-4ba16216="" width="20px" height="20px" viewBox="0 0 20 20" class="e-loading-10">
                    <circle data-v-4ba16216="" cx="10" cy="10" r="8" stroke-width="3" fill="none" />
                    <circle
                      data-v-4ba16216="" cx="10" cy="10" r="8" stroke-width="3" fill="none" stroke-linecap="round"
                      stroke-dasharray="50.26548245743669" stroke-dashoffset="32.67256359733385"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <BaseEmpty />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>
