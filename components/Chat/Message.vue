<script lang="ts" setup>
import type { ChatList } from '~/api/chat/type'
import { getAPMTime, getDay, getMonth, isSameDay } from '~/lib/dayjs'

const { userInfo } = storeToRefs(useUserStore())
const item = defineProp<ChatList>(undefined, true)
const upItem = defineProp<ChatList>(undefined)
const isFirst = defineProp<boolean>(false)
const sameDay = computed(() => isSameDay(new Date(item.value.createTime), new Date(upItem.value?.createTime || 0)))
const isSelf = computed(() => item.value.senderId === userInfo.value!.id)
// watch(
//   [item, upItem],
//   ([item, upItem]) => {
//     console.log(item, upItem)
//   },
//   { deep: true, immediate: true },
// )
</script>

<template>
  <div class="chat-item">
    <div v-if="!sameDay || isFirst" class="flex">
      <div
        class="px-[20px] min-w-[80px] h-[30px] mx-auto mt-[20px] bg-color2 text-[--bc-color20] flex justify-center items-center text-xs rounded-lg"
      >
        {{ getMonth(item.createTime) }}<span />{{ getDay(item.createTime) }}
      </div>
    </div>
    <div class="flex shrink-0 mt-0 static px-[10px] pt-[20px]">
      <div v-if="!isSelf" class="relative overflow-visible mr-[7px]">
        <div class="w-[38px]">
          <div class="rounded-full w-full relative">
            <div>
              <Image :src="item.senderAvatar" alt="" importance="auto" class="w-full rounded-full !h-auto" />
              <Image
                :src="`https://web-res-ccc.afunimg8.com/cdn-cgi/image/format=auto/C02/vip/s/vip${item.level}.png`"
                alt="" importance="auto" class="w-[18px] absolute -bottom-[8px] left-0 right-0 mx-auto !h-auto"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-1">
        <div class="flex-1 flex flex-col text-[14px]">
          <div class="text-color flex items-center">
            <div v-if="!isSelf" class="mr-[10px] flex items-center text-[--bc-color20] font-medium">
              {{ item.nickname }}
            </div>
            <div v-if="!isSelf" class="text-[12px] text-[--bc-color20] whitespace-nowrap">
              {{ getAPMTime(item.createTime) }}
            </div>
            <div v-if="!isSelf" class="invisible aite-reply flex justify-end flex-1 items-center ml-[8px]">
              <i
                class="inline-block h-[max-content] w-[max-content] icon-new-aite cursor-pointer text-[15px] text-[--bc-color20] hover:text-color"
              />
              <!--
              引用
              <i
                class="inline-block h-[max-content] w-[max-content] icon-new-reply cursor-pointer text-[15px] text-[--bc-color20] hover:text-color ml-[8px]"
              /> -->
            </div>
          </div>
          <div
            class="select-none relative" :class="{
              'flex justify-end': isSelf,
            }"
          >
            <div
              class="w-[max-content] max-w-[234px] leading-normal overflow-hidden p-[10px] border-radius-0 mt-[6px] break-words"
              :class="{
                'bg-color2': !isSelf,
                'bg-[--bc-bgColor11] !text-white': isSelf,
              }"
            >
              <div class="whitespace-pre-wrap break-words overflow-hidden w-full">
                {{ item.content }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>
