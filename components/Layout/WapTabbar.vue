<script lang="ts" setup>
import type { Locale } from '@intlify/core-base'
import { ref } from 'vue'

const route = useRoute()
const router = useRouter()
const isOpen = ref(false)
const showChat = ref(false)
const menuItems = [
  { name: 'Casino', href: '/casino', icon: 'casino', iconType: 'svg' },
  { name: 'Sports', href: '/sports', icon: 'sport', iconType: 'svg' },
  { name: 'Bonus Games', href: '/lottery', icon: 'lotter', iconType: 'svg' },
  { name: 'VIP Club', href: '/vip', icon: 'icon-n-vip' },
  { name: 'Affiliate', href: '/affiliate', icon: 'icon-n-affiliate' },
  { name: 'Promotion', href: '/promotion', icon: 'icon-n-bonus' },
  { name: 'Install', href: '/install', icon: 'icon-n-install' },
  { name: 'Live Chat', href: '/livechat', icon: 'icon-n-livechat' },
]

const langModal = ref<boolean>(false)
const { setLocale } = useI18n()
const { isShowTop } = useMenu()

function changeLang(lang: Locale) {
  setLocale(lang)
  router.replace('/')
  langModal.value = false
  isOpen.value = false
}
</script>

<template>
  <div>
    <div
      class="fixed z-[511] bottom-0 w-full flex items-center justify-center bg-[--bc-tabBgColor] rounded-t-[14px] text-[--bc-color20] font-extrabold h-[63px]"
    >
      <div class="flex-1 flex flex-col items-center justify-center text-[10px] space-y-[2px]" @click="isOpen = !isOpen">
        <div class="flex items-center justify-center" style="width: 23px; height: 23px;">
          <i-svg-menu :class="{ active: isOpen }" />
        </div>
        <div class="text-center whitespace-nowrap" :class="{ active: isOpen }">
          Menu
        </div>
      </div>
      <div
        class="flex-1 flex flex-col items-center justify-center text-[10px] space-y-[2px]"
        @click="routerPush('/casino')"
      >
        <div class="flex items-center justify-center" style="width: 22px; height: 22px;">
          <i-svg-casino :class="{ active: route.path.includes('/casino') }" />
        </div>
        <div class="text-center whitespace-nowrap" :class="{ active: route.path.includes('/casino') }">
          Casino
        </div>
      </div>
      <div
        class="flex-1 flex flex-col items-center justify-center text-[10px] space-y-[2px]"
        @click="routerPush('/affiliate')"
      >
        <div class="flex items-center justify-center" style="width: 23px; height: 23px; ">
          <i-svg-affiliate :class="{ active: route.path.includes('/affiliate') }" />
        </div>
        <div class="text-center whitespace-nowrap" :class="{ active: route.path.includes('/affiliate') }">
          Affiliate
        </div>
      </div>
      <div class="flex-1 flex flex-col items-center justify-center text-[10px] space-y-[2px] " @click="showChat = true">
        <div class="flex items-center justify-center" style="width: 22px; height: 22px;">
          <i-svg-sport :class="{ active: route.path.includes('/sports') }" />
        </div>
        <div class="text-center whitespace-nowrap" :class="{ active: route.path.includes('/sports') }">
          Chat
        </div>
      </div>
      <div
        class="flex-1 flex flex-col items-center justify-center text-[10px] space-y-[2px]"
        @click="routerPush('/account')"
      >
        <div class="flex items-center justify-center" style="width: 23px; height: 23px;">
          <i-svg-account :class="{ active: route.path.includes('/account') }" />
        </div>
        <div :class="{ active: route.path.includes('/account') }">
          Account
        </div>
      </div>
    </div>
    <Drawer v-model:open="isOpen" direction="left" :modal="false">
      <DrawerContent
        class=" mb-[50px] pb-[70px] bg-color"
        :class="!isShowTop ? 'h-[calc(100vh-90px)]' : 'h-[calc(100vh-90px-var(--bc-appDownloadHeight,0px))]'"
      >
        <div class="flex flex-col pt-[10px] gap-[5px] mx-[3.3%] md:pt-[20px]">
          <BaseInvitation />
          <BaseSlideBarTab />
          <nav class="flex flex-col gap-[5px]">
            <div
              v-for="item in menuItems" :key="item.name"
              class="h-[40px] text-white text-[14px] font-semibold bg-color2 cursor-pointer rounded overflow-hidden"
              @click="() => {
                isOpen = false
                routerPush(item.href)
              }"
            >
              <div class="h-full flex items-center relative hover-bg-linear-3">
                <div class="w-[40px] h-[40px] flex items-center justify-center">
                  <i
                    v-if="item.iconType !== 'svg'"
                    class="inline-block h-[max-content] w-[max-content] cursor-pointer text-[22px] text-icon "
                    :class="item.icon"
                  />
                  <template v-else>
                    <i-svg-casino v-if="item.icon === 'casino'" class="scale-[1.5]" />
                    <i-svg-sport v-else-if="item.icon === 'sport'" class="scale-[1.5]" />
                    <i-svg-lotter v-else-if="item.icon === 'lotter'" class="scale-[1.5]" />
                  </template>
                </div>
                <p v-if="!item.name.includes('VIP')" class="text-[14px] flex-1">
                  {{ item.name }}
                </p>
                <p v-else class="text-[14px] flex-1">
                  <span v-html="item.name.replace('VIP', `<span class='text-green'>VIP</span>`)" />
                </p>
              </div>
            </div>
            <div
              class="h-[40px] text-white text-[14px] font-semibold bg-color2 cursor-pointer rounded overflow-hidden"
              @click="langModal = true"
            >
              <div class="h-full flex items-center relative hover-bg-linear-3">
                <div class="w-[40px] h-[40px] flex items-center justify-center">
                  <i
                    class="inline-block h-[max-content] w-[max-content] icon-n-lang cursor-pointer text-[22px] text-icon "
                  />
                </div>
                <p class="text-[14px] flex-1">
                  {{ $t('lang.name') }}
                </p>
              </div>
            </div>
          </nav>
        </div>
      </DrawerContent>
    </Drawer>
    <BaseDrawer v-model:open="langModal" direction="left" content-class="z-[999]" overlay-class="z-[999]" header-class="bg-transparent">
      <template #title>
        Switch Language
      </template>
      <BaseLang @change="changeLang" />
    </BaseDrawer>
    <BaseDrawer
      v-model:open="showChat" direction="right" content-class="z-[999] h-[100vh] !p-0" overlay-class="z-[999]"
      :dismissible="false"
    >
      <template #title>
        <div class="flex items-center justify-center">
          Chat
          <i class="inline-block h-[max-content] w-[max-content] icon-new-personal text-[16px] mx-[8px] text-color" />
          <span class="text-[16px] text-active">123</span>
        </div>
      </template>
      <BaseChat />
    </BaseDrawer>
  </div>
</template>

<style></style>
