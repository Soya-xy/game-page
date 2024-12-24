<script lang="ts" setup>
import type { ChatList } from '~/api/chat/type'
import { TransitionPresets } from '@vueuse/core'
import { VirtList } from 'vue-virt-list'
import { getChatList, getConversation } from '~/api/chat'
import { conversationList } from '~/composables/chat'

const user = useUserStore()
const { token, userInfo } = storeToRefs(user)

const virtListRef = ref<any>(null)
const loading = ref(true)
const chatList = ref<ChatList[]>([])
const firstResize = ref(true)
const pageNo = ref(1)
const total = ref(0)
const showBottom = ref(false)

async function getMoreList() {
  if (chatList.value.length >= total.value && chatList.value.length !== 0)
    return

  loading.value = true
  const res = await getChatList({ conversationId: conversationId.value, pageNo: pageNo.value, pageSize: 10 })
  total.value = res.total

  chatList.value = res.list.reverse().concat(chatList.value)
  await nextTick()
  await nextTick()
  await nextTick()
  virtListRef.value?.addedList2Top(res.list)
  loading.value = false
}

onMounted(async () => {
  try {
    pageNo.value = 1
    const conversation = await getConversation()
    if (conversation.length > 0) {
      conversationList.value = conversation
      conversationId.value = conversation[0]!.id
      await getMoreList()
    }
  }
  catch (error) {
    console.error(error)
  }
  finally {
    loading.value = false
  }
})

const { data, close } = useWebSocket(`${useRuntimeConfig().public.wsUrl}?token=${token.value}`, {
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

watch(data, (val) => {
  if (val === 'pong')
    return

  const item = JSON.parse(val)
  if (item?.type === 'kefu_message_type') {
    const chat = JSON.parse(item.content)

    chatList.value.push(chat)
    if (chat.senderId === userInfo.value!.id) {
      virtListRef.value.scrollToBottom()
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
  close()
})
</script>

<template>
  <div class="flex flex-col flex-1 overflow-y-auto">
    <div class="flex flex-col-reverse overflow-x-hidden pb-[20px] flex-1 overflow-y-auto w-full relative z-[0] touch-pan-y overscroll-contain">
      <VirtList
        ref="virtListRef"
        :list="chatList"
        item-key="id"
        :min-size="80"
        @to-top="toTop"
        @to-bottom="showBottom = false"
        @item-resize="itemResize"
        @scroll="scroll"
      >
        <template #default="{ itemData, index }">
          <ChatMessage :item="itemData" :is-first="index === 0" :up-item="chatList[index - 1]" />
        </template>
      </VirtList>
      <Spin
        :loading="loading" class="flex-1 flex flex-col overflow-y-auto absolute inset-0 bg-[#0000003d]"
        :class="{
          'z-[-1]': !loading,
        }"
      />
    </div>

    <div v-if="pageNo > 1 && showBottom" class="w-[155px] rounded-tl-[36px] rounded-bl-[36px] fixed bottom-[138px] right-[0px] z-[20] bg-[--bc-bgColor5] h-[42px]" @click="toBottom">
      <div class="mx-[15px] text-white mt-[10px] text-[14px] h-[20px] flex whitespace-nowrap items-center overflow-hidden">
        <i class="inline-block h-[max-content] w-[max-content] icon-new-down cursor-pointer mr-[10px]" /><p>
          Back to Bottom
        </p>
      </div>
    </div>

    <ChatSend />
  </div>
</template>

<style></style>
