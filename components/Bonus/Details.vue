<script lang="ts" setup>
import type { RecordPage } from '~/api/record/types'
import { asyncRecordList, getRecordOptions, getRecordPage } from '~/api/record'
import { formatTime } from '~/lib/dayjs'

const { data: list } = await asyncRecordList()

const options = await getRecordOptions()
const page = ref(1)
const bonusCode = ref('')
const data = ref<RecordPage[]>([])
async function load(e?: any) {
  const res = await getRecordPage({
    pageNo: page.value,
    pageSize: 10,
    bonusCode: bonusCode.value,
  })
  if (data.value.length > res.total || !res.list.length) {
    e?.complete()
  }

  if (res.list) {
    data.value.push(...res.list)
  }
}

watch(bonusCode, () => {
  page.value = 1
  data.value = []
  load()
}, {
  immediate: true,
  deep: true,
})
</script>

<template>
  <div class="h-full flex flex-col">
    <div class="flex-1 overflow-hidden flex flex-col md:p-[20px] md:pb-[30px] p-[15px]">
      <div class="flex-1 overflow-y-auto">
        <div class="text-[20px] font-bold mb-[10px] text-white">
          Bonus Categories
        </div>
        <div class="grid grid-cols-2 md:grid-cols-3 gap-[10px]">
          <div
            v-for="item in list" :key="item.bonusName"
            class="bg-[--bc-color-3] flex items-center rounded-[8px] overflow-hidden"
          >
            <div class="w-full h-full flex items-center">
              <div class="md:w-[60px] md:h-[60px] w-[46px] h-[46px] shrink-0 md:mr-[10px] mr-[8px] md:p-[6px] p-[4px]">
                <Image :src="item.bonusIcon" alt="" class="w-full" />
              </div>
              <div class="flex flex-col justify-center items-start flex-1">
                <div class="text-[12px] text-color">
                  {{ item.bonusName }}
                </div>
                <div class="text-color-linear-20 text-[14px] font-bold mt-[4px]">
                  <span class="whitespace-pre">{{ toCurrency(item.totalClaimedAmount) }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="pb-[6px] font-bold mt-[15px] mb-[6px] text-white flex items-center justify-between">
          <div class="text-[16px]">
            Bonus Transactions
          </div>
          <BaseSelect v-model:value="bonusCode" :options="options" />
        </div>
        <div class="bg-color2 border-[1px] border-solid border-[--bc-bgColor2] rounded-[8px] md:text-[14px] text-[12px]">
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
          <div v-if="data.length">
            <div v-for="item, idx in data" :key="idx" class="text-white px-[5px] h-[40px] flex items-center justify-center">
              <div class="w-[25%] text-left">
                {{ item.title }}
              </div>
              <div class="flex-1 text-center flex items-center justify-center">
                <Image
                  src="https://web-res-ccc.afunimg8.com/cdn-cgi/image/format=auto/dev_skin/C02/wallet/currency/BRL.png"
                  alt="" importance="auto" class="w-[20px] h-[20px] shrink-0 mr-[4px]"
                />
                <span class="whitespace-pre">{{ toCurrency(item.point) }}</span>
              </div>
              <div class="w-[25%] text-right text-color">
                {{ formatTime(item.createTime) }}
              </div>
            </div>
            <LoadMore :load="load" />
          </div>
          <BaseEmpty v-else />
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>
