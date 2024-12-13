<script lang="ts" setup>
import { Dropdown } from 'floating-vue'

const affiliate = useAffiliate()
const { summary } = storeToRefs(affiliate)
</script>

<template>
  <div class="flex">
    <div class="mr-[10px] flex-1 shrink-0 flex items-center p-[10px] border-radius-0 bg-color2">
      <div
        class="w-[40px] h-[40px] bg-no-repeat bg-cover bg-center mr-[4px]"
        style="background-image: url(https://web-res-ccc.afunimg8.com/cdn-cgi/image/format=auto/C02/C0E/referAndEarn/upgrade.png?20241031);"
      />
      <div>
        <div class="text-[10px] text-color">
          Total Rewards
        </div>
        <div class="text-[12px] font-bold text-color-linear-20 mt-[6px]">
          <span class="whitespace-pre">{{ toCurrency(summary?.withdrawPrice) }}</span>
        </div>
      </div>
    </div>
    <div class="flex-1 shrink-0 flex items-center p-[10px] border-radius-0 bg-color2">
      <div
        class="w-[40px] h-[40px] bg-no-repeat bg-cover bg-center mr-[4px]"
        style="background-image: url(https://web-res-ccc.afunimg8.com/cdn-cgi/image/format=auto/C02/C0E/referAndEarn/friend.png?20241031);"
      />
      <div class="w-full relative">
        <div class="text-[10px] text-color">
          Total Friends
        </div>
        <div class="text-[12px] w-full font-bold flex justify-between mt-[6px]">
          <span class="text-color-linear-20">{{ summary?.totalBrokerageUserCount }}</span>
          <Dropdown :distance="6" placement="bottom-end">
            <i class="inline-block h-[max-content]  w-[max-content] icon-new-info-circle text-color-text-2" />

            <template #popper>
              <div class="pointer-events-auto opacity-100 p-[10px] min-w-[160px] box-shadow-02 border-radius-0 z-10">
                <ul class="text-[12px] list-disc list-outside text-color pl-[20px] leading-[1.2]">
                  <li>
                    All: <span class="font-bold text-white">0</span>
                  </li>
                  <li>
                    Direct: <span class="font-bold text-white">0</span>
                  </li>
                  <li>
                    Indirect: <span class="font-bold text-white">0</span>
                  </li>
                </ul>
              </div>
            </template>
          </Dropdown>
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>
