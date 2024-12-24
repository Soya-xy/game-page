<script lang="ts" setup>
import { sendChat } from '~/api/chat'

const msg = ref('')
const showConversation = ref(false)
const showEmoji = ref(false)
const emojiRef = ref<HTMLElement | null>(null)
const textareaRef = ref<HTMLElement | null>(null)

onClickOutside(emojiRef, () => {
  showEmoji.value = false
})

function sendMsg() {
  if (!msg.value)
    return

  sendChat({
    contentType: 1,
    content: msg.value,
    conversationId: conversationId.value,
  })

  msg.value = ''
}

function changeConversation(id: number) {
  conversationId.value = id
  showConversation.value = false
}

function selectEmoji(emoji: string) {
  msg.value += emoji
  showEmoji.value = false
  textareaRef.value?.focus()
}
</script>

<template>
  <div class="flex flex-col min-h-[76px] relative p-[10px] pb-[20px] bg-color2">
    <div class="chat-bottom flex w-full">
      <div class="chat-content relative items-start rounded-lg bg-color flex flex-1 pl-[16px] overflow-hidden">
        <div class="hide-text relative flex-1 overflow-hidden min-h-[46px] py-[16px]">
          <div
            class="text-[14px] line-clamp-4 h-[max-content] w-full invisible select-none opacity-0 pointer-events-none break-words"
          >
            {{ msg }}
          </div>
          <textarea
            ref="textareaRef"
            v-model="msg"
            class="editorss w-full overflow-hidden block !resize-none bg-transparent text-[14px] absolute left-0 top-[16px] text-white"
            spellcheck="false" placeholder="Write a message..." @keyup.enter="sendMsg"
          />
        </div>
        <i
          class="inline-block h-[max-content] w-[max-content] icon-new-chat-emoji cursor-pointer p-[8px] py-[14px] text-[24px] text-[--bc-color20]"
          tabindex="-1"
          @click="showEmoji = !showEmoji"
        />
      </div>
      <div
        class="h-[42px] w-[42px] shrink-0 border-radius-0 flex items-center justify-center bg-active ml-[8px] mt-[2px]"
        @click="sendMsg"
      >
        <i
          class="inline-block h-[max-content] w-[max-content] icon-new-send cursor-pointer text-[22px] text-font"
          ix-pos="upright" tabindex="-1"
        />
      </div>
      <ChatEmoji v-if="showEmoji" ref="emojiRef" @select="selectEmoji" />
    </div>
    <div class="flex w-full mt-[10px] items-center">
      <div
        class="select-bg border-radius-0 relative overflow-visible text-[12px] text-color shrink-0 h-[36px] bg-color z-[10] w-[160px]  cursor-pointer"
      >
        <div class="h-full flex items-center justify-between px-[10px]" @click="showConversation = !showConversation">
          <div class="flex items-center text-white font-medium">
            <i
              class="inline-block  w-[max-content] icon-new-lang cursor-pointer text-[20px] text-color mr-[14px] shrink-0 h-[20px]"
            /><span>{{
              conversationList?.find(item => item.id === conversationId)?.sessionTitle }}</span>
          </div>
          <button class="text-[10px] transition-all duration-200 flex items-center -rotate-[90deg] text-[--bc-color20]">
            <i class="inline-block h-[max-content] w-[max-content] icon-new-back cursor-pointer" />
          </button>
        </div>
        <ul
          class="bg-color2 border-radius-0 w-full absolute z-[15] left-0 top-[0] -translate-y-[100%] transition-all overflow-hidden box-shadow-02 max-h-[300px] overflow-y-auto"
          :class="{
            '!max-h-[0]': !showConversation,
          }"
        >
          <li
            v-for="item, idx in conversationList" :key="idx"
            class="flex items-center justify-center px-[15px] relative cursor-pointer  font-bold min-h-[36px]" :class="{
              'bg-[--bc-searchBtnColor] text-white': item.id === conversationId,
            }" @click="changeConversation(item.id)"
          >
            <span>{{ item.sessionTitle }}</span>
            <button class="absolute inset-y-0 right-[15px] flex items-center">
              <i
                v-if="item.id === conversationId"
                class="inline-block h-[max-content] w-[max-content] icon-new-hook cursor-pointer text-active"
              />
            </button>
          </li>
        </ul>
      </div>
      <!-- <div class="pl-[15px] space-x-[15px] flex items-center">
        <i
          class="inline-block h-[max-content] w-[max-content] icon-new-chat-giftmoney  text-[--bc-color20] text-[20px] cursor-pointer hover:text-white"
        />
        <i
          class="inline-block h-[max-content] w-[max-content] icon-new-chat-rank text-[--bc-color20] text-[20px] cursor-pointer hover:text-white"
        />
      </div> -->
    </div>
  </div>
</template>

<style></style>
