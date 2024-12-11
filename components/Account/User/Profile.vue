<script lang="ts" setup>
import dayjs from 'dayjs'
import { ref } from 'vue'
import { useToast } from '~/components/ui/toast'

const userStore = useUserStore()
const { userInfo } = storeToRefs(userStore)

const isEdit = ref(false)
const activeAvatar = ref()
const loading = ref(false)

const avatarList = ref<string[]>(Array.from({ length: 15 }, (_, index) => `https://web-res-ccc.afunimg8.com/cdn-cgi/image/format=auto/C02/userinfo/header/h_${index}.jpg?t=20231004`))

const nickname = ref<string>(userInfo.value?.nickname || '')
const avatar = ref(userInfo.value?.avatar)

const { toast } = useToast()
async function save() {
  if (!nickname.value) {
    toast({
      description: 'Please enter a nickname',
      duration: 2000,
      class: 'my-toast',
    })
    return
  }
  loading.value = true

  await userStore.updateUserInfo({
    nickname: nickname.value,
    avatar: avatar.value,
  }).finally(() => {
    loading.value = false
  })

  isEdit.value = false

  toast({
    description: 'Update successfully',
    duration: 2000,
    class: 'bg-green text-white',
  })
}
</script>

<template>
  <main v-if="!isEdit" class="overflow-y-auto overflow-x-hidden flex-1 p-[15px] mb-[20px]  relative">
    <div class="flex flex-col gap-[16px]">
      <div class="flex items-center h-[90px] bg-color2 pl-[10px] pr-[15px] border-radius-0 mb-[10px]" @click="isEdit = true">
        <div class="flex items-center mr-[10px] flex-1">
          <Image
            :src="avatar" alt="" importance="auto"
            class="w-[60px] h-[60px] rounded-full mr-[10px] border-[2px] border-solid border-[--bc-bgColor5] shrink-0"
          />
          <div>
            <div class="mb-[6px] text-[14px] text-white font-[600]">
              <span>{{ userInfo?.nickname }}</span>
            </div>
            <div class="text-color flex items-center">
              <span class="mr-[14px] text-[12px]">ID: {{ userInfo?.id }}</span>
              <i class="inline-block h-[max-content] w-[max-content] icon-new-copy text-[15px] text-color" />
            </div>
          </div>
        </div>
        <div class="w-[70px] shrink-0 relative">
          <Image
            :src="`https://web-res-ccc.afunimg8.com/cdn-cgi/image/format=auto/C02/vip/l/vip${userInfo?.userVip?.vipLevel}_l.png`"
            alt="" importance="auto" class="w-full"
          />
        </div>
        <i
          class="inline-block h-[max-content] w-[max-content] icon-new-back text-[13px] rotate-[180deg] text-color ml-[10px]"
        />
      </div>
      <div class="mb-[10px] flex items-center text-color bg-color2 text-[10px] py-[10px] border-radius-0">
        <div class="flex-1 flex flex-col items-center justify-center">
          <p>Join</p>
          <p class="text-white font-bold text-[12px] mt-[4px] text-center">
            {{ dayjs(userInfo?.registerTime).format('YYYY-MM-DD') }}
          </p>
        </div>
        <div class="w-[1px] h-[18px] bg-color5 shrink-0" />
        <div class="flex-1 flex flex-col items-center justify-center">
          <p class="text-[10px]">
            Total Bet
          </p>
          <p class="text-white text-[12px] font-bold mt-[4px]">
            <span class="whitespace-pre">R$0.00</span>
          </p>
        </div>
        <div class="w-[1px] h-[18px] bg-color5 shrink-0" />
        <div class="flex-1 flex flex-col items-center justify-center">
          <p class="text-[10px]">
            Total Rewards
          </p>
          <p class="text-white text-[12px] font-bold mt-[4px]">
            <span class="whitespace-pre">R$0.00</span>
          </p>
        </div>
      </div>
    </div>
  </main>

  <div v-else class="absolute top-0 left-0 w-full h-full bg-color">
    <div class="flex justify-start text-white items-center text-[16px] h-[56px] px-[20px] bg-color2">
      <i
        class="inline-block h-[max-content] w-[max-content] icon-new-arrow cursor-pointer mr-[10px] text-[20px] -rotate-[180deg]"
        @click="isEdit = false"
      />
      Profile
    </div>
    <main class="overflow-y-auto overflow-x-hidden flex-1 px-[15px] mb-[20px] py-[20px] relative">
      <div class="bg-color5 w-[21.33vw] h-[21.33vw] max-w-[110px] max-h-[110px] p-[3px] rounded-full my-[14px] mx-auto">
        <Image :key="avatar" :src="avatar" alt="" importance="auto" class="w-full h-full rounded-full" />
      </div>
      <div class="bg-[--bc-color-3] py-[10px] px-[20px] grid grid-cols-5 gap-x-[12px] gap-y-[10px] border-radius-0">
        <div
          v-for="item, idx in avatarList" :key="item" class="rounded-full relative"
          :class="{ 'border-[3px] border-solid border-active': activeAvatar === idx }"
        >
          <div
            class="w-full h-full rounded-full overflow-hidden cursor-pointer" @click="() => {
              activeAvatar = idx
              avatar = item
            }"
          >
            <Image :src="item" alt="" importance="auto" class="w-full h-full rounded-full" />
          </div>
        </div>
      </div>
      <div class="text-color text-[14px] mt-[20px]">
        Nickname
      </div>
      <div class="my-[8px]">
        <BaseInput v-model="nickname" placeholder="Enter rewards code" allow-clear />
      </div>
      <div class="text-color-text-2 text-[12px]">
        Do not use special symbols, otherwise your nickname may not be supported.
      </div>
      <div class="w-full pt-[20px]" @click="save">
        <BaseButton class="bg-active !text-font w-full text-[14px] font-bold h-[46px] border-radius-0" :loading>
          Save
        </BaseButton>
      </div>
    </main>
  </div>
</template>

<style></style>
