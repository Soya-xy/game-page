<script setup lang="ts">
import { asyncNotificationList } from '@/api/new/index'

const current = ref<number>(0)
const currentList = ref<{
  title: string
  badge?: number
}[]>([{
  title: 'Platform',
  badge: 0,
}, {
  title: 'Personal',
  badge: 0,
}])

const listData = ref<{
  time: string
  title: string
  img?: string
  content: string
  isShow: boolean
}[]>([])

watch(current, (newval) => {
  getList(newval + 1)
}, {
  immediate: true,
})

async function getList(type: number) {
  const { list } = await asyncNotificationList(type)
  listData.value = list
}
</script>

<template>
  <div>
    <BaseTabs
      v-model="current" :list="currentList"
      class="!static rounded-b-[5px] [&>div:first-child]:rounded-bl-[5px] [&>div:last-child]:rounded-br-[5px] mb-[20px]"
      item-class="w-[50%]"
    />
    <div class="p-[10px] md:p-0 h-[calc(100vh-75px-52px-40px-20px)] overflow-y-auto">
      <div
        v-for="(item, index) in listData" :key="index"
        class="bg-[--bc-bgColor2] p-[10px] mb-[10px] border-radius-0 bg-color-linear-13"
      >
        <div class="text-[--bc-color20] text-[10px] md:text-[12px] flex justify-between items-center">
          <div>
            {{ item.time }}
          </div>
        </div>
        <div class="text-white text-[14px] md:text-[16px] font-semibold mt-[5px] mb-[10px]">
          {{ item.title }}
        </div>
        <Image
          v-if="item.img" :src="item.img" alt="" importance="auto"
          class="my-[8px] border-radius-1 !w-[100%] !h-auto"
        />
        <div
          class="text-[12px] md:text-[14px] whitespace-break-spaces gap-[10px] transition-all duration-300 max-h-[max-content] "
          :class="{ 'line-clamp-4': item.isShow }"
        >
          <p v-html="item.content" />
        </div>
        <div
          class="text-white text-[12px] md:text-[14px] my-[4px] flex items-center justify-end w-full cursor-pointer"
          @click="item.isShow = !item.isShow"
        >
          <div v-if="item.isShow">
            Show All
          </div>
          <div v-else>
            Hide
          </div>
          <div class="rotate-[90deg]">
            <i
              class="inline-block h-[max-content] w-[max-content] icon-new-arrow transform"
              :class="{ 'rotate-[180deg]': !item.isShow }"
            />
          </div>
        </div>
        <div class="h-[0.5px] bg-[--bc-bgColor9] mt-[10px] shrink-0" />
        <div class="pt-[10px] flex items-center justify-center text-[12px] !text-[--bc-activeColor] shrink-0">
          <div class="text-[12px] md:text-[14px] font-medium">
            Telegram
          </div><i class="inline-block h-[max-content] w-[max-content] icon-new-arrow ml-[10px] text-[20px]" />
        </div>
      </div>
    </div>
  </div>
</template>
