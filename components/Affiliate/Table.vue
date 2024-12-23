<script lang="ts" setup>
import type { AffiliateInvite } from '~/api/affiliate/type'
import dayjs from 'dayjs'
import { getAffiliateInvitePage } from '~/api/affiliate'
import { formatTime } from '~/lib/dayjs'

const page = ref(1)
const data = ref<AffiliateInvite[]>([])
const time = defineProp<string | Date>()
const loaded = ref(false)
async function load(e?: any) {
  const params = new URLSearchParams()
  params.append('pageNo', page.value.toString())
  params.append('pageSize', '10')
  if (time.value) {
    params.append('createTime[0]', formatTime(dayjs(time.value).startOf('day').toJSON()))
    params.append('createTime[1]', formatTime(dayjs(time.value).endOf('day').toJSON()))
  }

  try {
    const res = await getAffiliateInvitePage(params)
    loaded.value = true

    if (data.value.length > res.total || !res.list.length) {
      return e?.complete()
    }

    if (res.list) {
      data.value.push(...res.list)
      e.loaded()
      page.value++
    }
  }
  catch {
    e.error()
  }
}

watch(time, () => {
  page.value = 1
  data.value = []
  load()
}, {
  deep: true,
})
</script>

<template>
  <div class="flex-1 flex flex-col">
    <div
      class="bg-color2 border-[1px] border-solid border-[--bc-bgColor2] rounded-[8px] md:text-[14px] text-[12px] h-[600px] overflow-y-auto"
    >
      <div
        class="bg-[--bc-color-3] px-[5px] h-[40px] text-[--bc-color20] flex items-center justify-center sticky left-0 -top-[1px]"
      >
        <div class="w-[25%] text-left">
          ID
        </div>
        <div class="flex-1 text-center">
          Reward type
        </div>
        <div class="w-[25%] text-right">
          Time
        </div>
        <div class="w-[25%] text-right">
          Reward
        </div>
      </div>
      <template v-if="data.length || !loaded">
        <div v-for="item, idx in data" :key="idx" class="text-white px-[5px] h-[40px] flex items-center justify-center">
          <div class="w-[25%] text-left">
            {{ item.id }}
          </div>
          <div class="flex-1 text-center flex items-center justify-center">
            <span class="whitespace-pre">{{ item.statusName }}</span>
          </div>
          <div class="w-[25%] text-right text-color">
            {{ formatTime(item.createTime) }}
          </div>
          <div class="w-[25%] text-right">
            {{ item.price }}
          </div>
        </div>
        <LoadMore :load="load" />
      </template>
      <BaseEmpty v-else />
    </div>
  </div>
</template>

<style></style>
