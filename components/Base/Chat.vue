<script lang="ts" setup>
import type { ChatList } from '~/api/chat/type'
import { TransitionPresets } from '@vueuse/core'
import { VirtList } from 'vue-virt-list'
import { getChatList, getConversation } from '~/api/chat'
import { conversationList } from '~/composables/chat'
import { formatTime } from '~/lib/dayjs'

const user = useUserStore()
const { token, userInfo } = storeToRefs(user)

const virtListRef = ref<any>(null)
const loading = ref(true)
const chatList = ref<ChatList[]>([])
const firstResize = ref(true)
const pageNo = ref(1)
const isOver = ref(false)
// const total = ref(0)
const showBottom = ref(false)
const haveNoRead = ref(false)
const wsUrl = computed(() => `${useRuntimeConfig().public.wsUrl}?token=${token.value}&channel=${conversationId.value}`)
async function getMoreList() {
  if (isOver.value)
    return

  loading.value = true
  const params: any = {
    conversationId: conversationId.value,
    limit: 20,
  }
  if (chatList.value.length > 0) {
    params.createTime = formatTime(chatList.value.at(0)!.createTime)
  }
  const res = await getChatList(params)
  if (res.length === 0) {
    isOver.value = true
    return
  }
  // total.value = res.total

  chatList.value = res.reverse().concat(chatList.value)
  await nextTick()
  virtListRef.value?.addedList2Top(res)
  loading.value = false
}

const conversation = await getConversation()

loading.value = false

if (conversation.length > 0) {
  conversationList.value = conversation
  conversationId.value = conversation[0]!.id
}

const { data, close, send, status } = useWebSocket(wsUrl, {
  autoReconnect: true,
  heartbeat: {
    message: 'ping',
    interval: 1000 * 60,
    pongTimeout: 1000 * 60,
  },
})

function toTop() {
  pageNo.value += 1
  getMoreList()
}

// 监听ws状态
watch([status, conversationId], async ([s, val]) => {
  // 首次建立ws连接发送
  if (s === 'OPEN' && val && firstResize.value) {
    send(JSON.stringify({
      type: 'public_message',
      channel: val,
    }))
  }

  if (val) {
    pageNo.value = 1
    chatList.value = []
    getMoreList()
  }
}, {
  immediate: true,
})

watch(data, (val) => {
  if (val === 'pong')
    return

  const item = JSON.parse(val)
  if (item?.type === 'public_message') {
    const chat = JSON.parse(item.content)

    chatList.value.push(chat)
    if (chat.senderId === userInfo.value!.id) {
      virtListRef.value.scrollToBottom()
    }
    else {
      haveNoRead.value = true
    }
  }
}, {
  immediate: true,
  deep: true,
})

function itemResize() {
  if (firstResize.value) {
    firstResize.value = false
    virtListRef.value.scrollToBottom()
  }
}

const scrollPosition = ref(0)

function scroll() {
  const { inViewBegin: firstIndex, inViewEnd: lastIndex } = virtListRef.value?.reactiveData
  if (firstIndex <= 10 || lastIndex >= 15) {
    showBottom.value = true
  }
  else {
    showBottom.value = false
  }
}

function toBottom() {
  showBottom.value = false

  // 设置初始值为当前滚动位置
  scrollPosition.value = virtListRef.value.getOffset()
  const smoothScroll = useTransition(scrollPosition, {
    duration: 1000,
    transition: TransitionPresets.easeInOutCubic,
  })
  // 使用 nextTick 确保初始值已经被设置
  nextTick(() => {
    // 设置目标滚动位置
    const targetPosition = virtListRef.value.reactiveData.listTotalSize
    scrollPosition.value = targetPosition

    watchEffect(() => {
      if (virtListRef.value?.clientRefEl) {
        virtListRef.value.clientRefEl.scrollTop = smoothScroll.value
      }
    })
  })
}

onUnmounted(() => {
  conversationId.value = undefined
  close()
})
</script>

<template>
  <div class="flex flex-col flex-1 overflow-y-auto">
    <div
      class="flex flex-col-reverse overflow-x-hidden pb-[20px] flex-1 overflow-y-auto w-full relative z-[0] touch-pan-y overscroll-contain"
    >
      <VirtList
        ref="virtListRef" :list="chatList" item-key="id" :min-size="80" @to-top="toTop" @to-bottom="() => {
          showBottom = false
          haveNoRead = false
        }" @item-resize="itemResize" @scroll="scroll"
      >
        <template #default="{ itemData, index }">
          <ChatMessage :item="itemData" :is-first="index === 0" :up-item="chatList[index - 1]" />
        </template>
      </VirtList>
      <Spin
        :loading="loading" class="flex-1 flex flex-col overflow-y-auto absolute inset-0 bg-[#0000003d]" :class="{
          'z-[-1]': !loading,
        }"
      />
    </div>

    <div
      v-if="(pageNo > 1 && showBottom) || haveNoRead"
      class="w-[155px] rounded-tl-[36px] rounded-bl-[36px] fixed bottom-[138px] right-[0px] z-[20] bg-[--bc-bgColor5] h-[42px]"
      @click="toBottom"
    >
      <div
        class="mx-[15px] text-white mt-[10px] text-[14px] h-[20px] flex whitespace-nowrap items-center overflow-hidden"
      >
        <i class="inline-block h-[max-content] w-[max-content] icon-new-down cursor-pointer mr-[10px]" />
        <p>
          Back to Bottom
        </p>
      </div>
    </div>

    <ChatSend />
  </div>
</template>

<style></style>
