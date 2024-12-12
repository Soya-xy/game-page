<script setup lang="ts">
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
const listData = ref([
  {
    title: '1',
    isShow: true,
  },
  {
    title: '2',
    isShow: true,
  },
])
</script>

<template>
  <BaseTabs
    v-model="current" :list="currentList"
    class="!static rounded-b-[5px] [&>div:first-child]:rounded-bl-[5px] [&>div:last-child]:rounded-br-[5px] mb-[20px]"
  />
  <div class="p-[10px] md:p-0">
    <div
      v-for="(item, index) in listData" :key="index"
      class="bg-[--bc-bgColor2] p-[10px] mb-[10px] border-radius-0 bg-color-linear-13"
    >
      <div class="text-[--bc-color20] text-[10px] md:text-[12px] flex justify-between items-center">
        <div>
          2024-11-04 15:43
        </div>
      </div>
      <div class="text-white text-[14px] md:text-[16px] font-semibold mt-[5px] mb-[10px]">
        Welcome to register
        with AFUN
      </div>
      <Image
        src="https://img.engames.com/cdn-cgi/image/format=auto/afun/1727823327592450147.jpeg" alt=""
        importance="auto" class="my-[8px] border-radius-1 !w-[100%] !h-auto"
      />
      <div
        class="text-[12px] md:text-[14px] whitespace-break-spaces gap-[10px] transition-all duration-300 max-h-[max-content] "
        :class="{ 'line-clamp-4': item.isShow }"
      >
        <p class="text-[--bc-textColor]">
          Dear friend, welcome to AFUN! We are a licensed and regulated platform. As of October 1, 2024, we will
          continue to operate in compliance with all legal requirements.
          At AFUN, you can place bets with peace of mind, knowing you’re on a legitimate platform dedicated to your
          well-being.

          Invite more friends to register and spin the wheel to get R$100.
        </p>
      </div>
      <div
        class="text-white text-[12px] md:text-[14px] my-[4px] flex items-center justify-end w-full"
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
</template>
