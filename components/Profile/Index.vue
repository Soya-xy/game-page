<script lang="ts" setup>
import dayjs from 'dayjs'
import { ref } from 'vue'
import { useToast } from '../ui/toast'

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
  <div v-if="!isEdit">
    <div class="flex justify-between items-center h-[76px] text-[20px] px-[20px] text-white bg-linear-12">
      Profile
    </div>
    <main class="overflow-y-auto overflow-x-hidden flex-1 px-[40px] mb-[20px] py-[20px] relative">
      <div class="w-[80px] shrink-0 absolute top-0 left-[30px] h-[max-content]">
        <Image
          :src="`https://web-res-ccc.afunimg8.com/cdn-cgi/image/format=auto/C02/vip/l/vip${userInfo?.userVip?.vipLevel}_l.png`"
          alt="" importance="auto" class="w-full"
        />
      </div>
      <div class="flex flex-col gap-[16px]">
        <div class="flex flex-col items-center relative">
          <div class="w-[80px] rounded-full overflow-hidden bg-color5 p-[3px]">
            <Image :src="avatar" alt="" importance="auto" class="w-full rounded-full" />
          </div>
          <span class="text-white mt-[10px] text-[18px] font-bold">{{ userInfo?.nickname }}</span>
          <span class="mt-[6px] text-[14px] flex items-center"> ID:{{ userInfo?.id }} <i
            class="inline-block h-[max-content] w-[max-content] icon-new-copy cursor-pointer ml-[14px] text-[20px] text-[--bc-color20] hover:text-white"
          /></span>
          <span
            class="w-[36px] h-[36px] bg-color2 text-[20px] flex items-center justify-center border-radius-0 absolute top-0 right-0"
            @click="isEdit = true"
          ><i
            class="inline-block h-[max-content] w-[max-content] icon-new-edit cursor-pointer text-[--bc-color20] hover:text-white"
          /></span>
        </div>
        <div class="flex items-center gap-[5px]">
          <div
            class="bg-[--bc-color-3] flex-1 flex flex-col justify-center items-center gap-[10px] h-[72px] border-radius-0"
          >
            <span class="text-[14px] text-[--bc-color20]">Join</span><span
              class="text-[16px] text-white font-bold text-center"
            >{{ dayjs(userInfo?.registerTime).format('YYYY-MM-DD')
            }}</span>
          </div>
          <div
            class="bg-[--bc-color-3] flex-1 flex flex-col justify-center items-center gap-[10px] h-[72px] border-radius-0"
          >
            <span class="text-[14px] text-[--bc-color20]">Total Bet</span><span
              class="text-[16px] text-white font-bold"
            ><span class="whitespace-pre">R$0.00</span></span>
          </div>
          <div
            class="bg-[--bc-color-3] flex-1 flex flex-col justify-center items-center gap-[10px] h-[72px] border-radius-0"
          >
            <span class="text-[14px] text-[--bc-color20]">Total Rewards</span><span
              class="text-[16px] text-white font-bold"
            ><span class="whitespace-pre">{{
              toCurrency(userInfo?.giveAmountPoint) }}</span></span>
          </div>
        </div>
        <div class="h-[321px] p-[20px] bg-[--bc-color-3] border-radius-0 flex flex-col gap-[10px]">
          <div class="text-white font-[500] text-[14px]">
            Favorite Games
          </div>
          <div class="w-full h-full flex flex-col justify-center items-center">
            <div class="flex flex-col items-center justify-center">
              <Image
                src="https://web-res-ccc.afunimg8.com/cdn-cgi/image/format=auto/C02/home/empty.png?t20231225"
                alt="" importance="auto" class="shrink-0 w-[220px]"
              />
              <p class="text-center mt-[10px] text-[16px]">
                <span>Oops! No data yet!</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
  <div v-else>
    <div class="flex justify-start text-white items-center text-[20px] h-[76px] px-[20px] bg-linear-12">
      <i
        class="inline-block h-[max-content] w-[max-content] icon-new-arrow cursor-pointer mr-[10px] text-[20px] -rotate-[180deg]"
        @click="isEdit = false"
      />
      Profile
    </div>
    <main class="overflow-y-auto overflow-x-hidden flex-1 px-[40px] mb-[20px] py-[20px] relative">
      <div class="bg-color5 w-[100px] h-[100px] p-[3px] rounded-full mb-[20px] mx-auto">
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
      <div class="text-color-text-1 text-[14px] mt-[20px]">
        Nickname
      </div>
      <div class="my-[8px]">
        <BaseInput v-model="nickname" placeholder="Enter rewards code" />
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
