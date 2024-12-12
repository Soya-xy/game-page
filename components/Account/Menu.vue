<script lang="ts" setup>
import type { Locale } from '@intlify/core-base'
import { cn } from '~/lib/utils'

const userStore = useUserStore()
const { token } = storeToRefs(userStore)
const { setLocale } = useI18n()
const router = useRouter()
const showLanguageModal = ref<boolean>(false)
const showProfileHelp = ref<boolean>(false)

function changeLang(lang: Locale) {
  setLocale(lang)
  router.replace('/')
  showLanguageModal.value = false
}

const userList = computed(() => {
  if (!token) {
    return []
  }
  return [
    {
      name: 'Notification',
      icon: 'icon-new-message',
      href: '',
    },
    {
      name: 'Affiliate - Earn $5,000 Per Month',
      icon: 'icon-new-affiliate',
      href: '/affiliate',
    },
    {
      name: 'Rewards',
      icon: 'icon-new-bonus',
      href: '/bonus',
    },
    {
      name: 'Promotion',
      icon: 'icon-new-promotions',
      href: '/promotion',
    },
    {
      name: 'VIP Club',
      url: 'https://web-res-ccc.afunimg8.com/cdn-cgi/image/format=auto/C02/menu/vip.png?t20231123',
      href: '/vip',
    },
  ]
})

const menuList = computed(() => {
  if (!token) {
    return [
      {
        name: 'Live Chat',
        icon: 'icon-new-live-support',
        color: 'text-active',
        href: '/live-chat',
      },
      {
        name: 'Rewards',
        icon: 'icon-new-bonus',
        href: '/bonus',
      },
      {
        name: 'Affiliate',
        icon: 'icon-new-affiliate',
        href: '/affiliate',
      },
      {
        name: 'Install',
        icon: 'icon-new-install',
        href: '/install',
      },
    ]
  }
  else {
    return [
      {
        name: 'Live Chat',
        icon: 'icon-new-live-support',
        color: 'text-active',
        href: '/live-chat',
      },
      {
        name: 'FAQ & Feedback',
        icon: 'icon-new-help',
        onClick() {
          showProfileHelp.value = true
        },
      },
      {
        name: 'Account settings',
        icon: 'icon-new-setting',
      },
      {
        name: 'Install',
        icon: 'icon-new-install',
        href: '/install',
      },
    ]
  }
})
const showModal = ref<boolean>(false)

function handleClick(e: any) {
  if (e.onClick) {
    e.onClick()
  }
  if (e.href) {
    routerPush(e.href)
  }
}
</script>

<template>
  <div v-if="userList.length" class="text-color w-full border-radius-0 bg-color2 mt-[15px]">
    <button
      v-for="item in userList" :key="item.name" class="flex items-center pl-[15px] pr-[12px] h-[40px] w-full"
      @click="item.href ? routerPush(item.href) : null"
    >
      <div class="flex items-center flex-1 overflow-hidden mr-[14px] h-full">
        <i v-if="!item.url" class="inline-block h-[max-content] w-[max-content] text-[20px]" :class="cn(item?.icon)" />
        <Image v-else :src="item.url" alt="" class="w-[20px] !h-auto" />
        <span class="flex-1 truncate text-left ml-[14px] text-white">{{ item.name }}</span>
      </div>
      <i class="inline-block h-[max-content] w-[max-content] icon-new-back text-color rotate-[180deg] text-[13px]" />
    </button>
  </div>
  <div class="text-color w-full border-radius-0 bg-color2 mt-[15px]">
    <button
      v-for="item in menuList" :key="item.name" class="flex items-center pl-[15px] pr-[12px] h-[40px] w-full"
      @click="handleClick(item)"
    >
      <div class="flex items-center flex-1 overflow-hidden mr-[14px] h-full">
        <i class="inline-block h-[max-content] w-[max-content] text-[20px]" :class="cn(item.color, item.icon)" /><span
          class="flex-1 truncate text-left ml-[14px] text-white"
        >{{ item.name }}</span>
      </div>
      <i class="inline-block h-[max-content] w-[max-content] icon-new-back text-color rotate-[180deg] text-[13px]" />
    </button>
    <div class="flex items-center pl-[15px] pr-[12px] h-[40px] w-full shrink-0" @click="showLanguageModal = true">
      <div class="flex items-center mr-[14px] flex-1">
        <i class="inline-block h-[max-content] w-[max-content] icon-new-lang text-[20px] text-color mr-[14px] " />
        <span class="text-white">{{ $t('lang.name') }}</span>
      </div><i
        class="inline-block h-[max-content] w-[max-content] icon-new-back transition-all text-[13px] text-color rotate-[180deg]"
      />
    </div>
  </div>
  <button v-if="token" class="mb-[40px] mt-[15px] font-bold w-full text-center" @click="showModal = true">
    Sign out
  </button>
  <BaseModal v-model:show="showModal" wap-header-class="bg-color" wap-content-class="z-[555]" overlay-class="z-[550]">
    <template #title>
      <div class="flex justify-between items-center rounded-t-[10px] text-white">
        Sign out
      </div>
    </template>

    <div class="mt-[16px] mb-[20px] text-center text-[12px]">
      Explore a world brimming with rewards and thrilling games!
    </div>

    <div class="flex font-bold text-[12px]">
      <button class="bg-[--bc-bgColor9] text-white flex-1 h-[40px] border-radius-0 mr-[10px]" @click="userStore.logout">
        Sign out
      </button>
      <button
        class="bg-active text-font flex-1 h-[40px] border-radius-0"
        @click="showModal = false"
      >
        Cancel
      </button>
    </div>
  </BaseModal>
  <BaseModal v-model:show="showLanguageModal" wap-content-class="p-0 z-[555]" overlay-class="z-[550]">
    <template #title>
      <div class="flex justify-between items-center">
        Switch Language
      </div>
    </template>
    <BaseLang @change="changeLang" />
  </BaseModal>
  <BaseModal v-model:show="showProfileHelp" wap-content-class="p-0 z-[555] h-[100vh]" overlay-class="z-[550]">
    <template #title>
      <div class="flex justify-between items-center text-white">
        Help & Feedback
      </div>
    </template>
    <ProfileHelp />
  </BaseModal>
</template>

<style></style>
