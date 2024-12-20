<script lang="ts" setup>
import type { Locale } from '@intlify/core-base'
import { useMenu } from '@/composables/menu'

const router = useRouter()
const userStore = useUserStore()
const { token, userInfo } = storeToRefs(userStore)
const { toggleMenu, isOpen } = useMenu()
const showLanguageModal = ref<boolean>(false)
const showSettingModel = ref<boolean>(false)
const showWalletModel = ref<boolean>(false)

const open = defineEmit<{ (type: string): void }>()

// 添加菜单配置数组
const menuItems = [
  { label: 'Wallet', icon: 'icon-n-wallet', hash: '/wallet' },
  { label: 'Withdraw', icon: 'icon-n-withdraw', hash: '/wallet?type=1' },
  { label: 'Profile', icon: 'icon-n-personal', hash: '/profile' },
  { label: 'Transaction', icon: 'icon-n-transaction-history' },
  { label: 'Bets History', icon: 'icon-n-bet-history' },
  // { label: 'Free bets', icon: 'icon-n-free' },
  { label: 'Setting', icon: 'icon-n-security-settings', onClick() { showSettingModel.value = true } },
  { label: 'Install', icon: 'icon-n-install' },
]

function handleClick(e: any) {
  if (e.onClick) {
    e.onClick()
  }
  if (e.hash) {
    routerPush(e.hash)
  }
}

const { setLocale } = useI18n()
function changeLang(lang: Locale) {
  setLocale(lang)
  router.replace('/')
  showLanguageModal.value = false
}
</script>

<template>
  <header
    class="
      h-[60px] fixed top-0 left-0 right-0 z-[100] bg-inherit flex items-center justify-between shadow-[0_4px_20px_#00000060] transition-all duration-300 ease-in-out"
    :class="{ 'pr-[150px]': !isOpen }"
  >
    <div class="flex items-center gap-[27px] ml-[22px] w-full">
      <BaseToggleMenu :class="isOpen ? 'rotate-180' : ''" @click="toggleMenu" />
      <Image src="/images/logo.avif" class="!h-[44px] cursor-pointer" @click="routerPush('/')" />
    </div>
    <div class="flex items-center px-[12px] gap-[12px] container @container justify-end w-full mx-auto min-w-[640px]">
      <LayoutSearch />
      <LayoutUserWallet v-if="token" />
      <template v-else>
        <BaseButton
          class="px-[17px] h-[40px] min-w-[86px] font-extrabold flex items-center justify-center bg-button rounded-[8px] text-white"
          @click="routerPush('/login')"
        >
          Sign in
        </BaseButton>

        <BaseButton
          class="px-[17px] h-[40px] min-w-[86px] font-extrabold flex items-center justify-center rounded-[8px] text-white bg-button-linear"
          @click="routerPush('/register')"
        >
          Sign Up
        </BaseButton>
      </template>

      <div class="flex h-[40px] rounded-[8px] items-center bg-[--bc-buttonColor]">
        <div
          class="bg-button flex items-center justify-center  rounded-[8px] w-[40px] h-[40px] cursor-pointer !bg-transparent"
          @click="open('Chat')"
        >
          <div class="relative">
            <div class="flex items-center justify-center menu-svg" style="width: 25px; height: 24px; --89bcd300: 1;">
              <i-svg-chat class="w-[25px] h-[24px]" />
            </div>
          </div>
        </div>
        <div
          class="bg-button flex items-center justify-center  rounded-[8px] w-[40px] h-[40px] cursor-pointer !bg-transparent"
          @click="open('Notification')"
        >
          <div class="relative">
            <div class="flex items-center justify-center menu-svg">
              <i-svg-notification class="w-[25px] h-[24px]" />
            </div>
          </div>
        </div>
      </div>

      <BaseIconButton @click="showLanguageModal = true">
        <i class="i-carbon-earth w-[25px] h-[24px]" />
      </BaseIconButton>
      <template v-if="token">
        <DropdownMenu>
          <DropdownMenuTrigger>
            <BaseAvatar :src="userInfo.avatar" :alt="userInfo.nickname" />
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align="end"
            class="bg-color2 text-color relative text-[14px] overflow-hidden border-radius-0 pt-[10px] min-w-[220px] flex flex-col shadow-[0_4px_20px_#00000060]"
          >
            <DropdownMenuItem
              v-for="item in menuItems" :key="item.label"
              class="hover:text-white hover:bg-page hover:font-bold    p-0" @click="handleClick(item)"
            >
              <div class="pl-[20px] pr-[10px] h-[46px] flex items-center cursor-pointer">
                <i
                  class="inline-block h-[max-content] w-[max-content] cursor-pointer mr-[14px] text-[20px] text-icon "
                  :class="[
                    item.icon,
                  ]"
                />
                <p>{{ item.label }}</p>
              </div>
            </DropdownMenuItem>
            <DropdownMenuSeparator class="bg-button" />

            <DropdownMenuItem class="hover:text-white hover:bg-page hover:font-bold    p-0" @click="userStore.logout">
              <div class="pl-[20px] pr-[10px] h-[46px] flex items-center cursor-pointer">
                <i
                  class="inline-block h-[max-content] w-[max-content] cursor-pointer mr-[14px] text-[20px] text-icon  icon-n-sign-out"
                />
                <p>Sign Out</p>
              </div>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </template>
    </div>
  </header>
  <BaseModal v-model:show="showLanguageModal">
    <template #title>
      <div class="flex justify-between items-center h-[54px] px-[20px] bg-color2  border-radius-0">
        Switch Language
      </div>
    </template>
    <BaseLang @change="changeLang" />
  </BaseModal>
  <!-- Setting -->
  <BaseModal v-model:show="showSettingModel" content-class="!min-h-[70vh] overflow-y-scroll=">
    <template #title>
      <div class="flex justify-between items-center h-[54px] px-[20px] bg-color2">
        Setting
      </div>
    </template>
    <Setting />
  </BaseModal>
  <!-- Wallet -->
  <BaseModal v-model:show="showWalletModel">
    <template #title>
      <div class="flex justify-between items-center h-[54px] px-[20px] bg-color2">
        Wallet
      </div>
    </template>
  </BaseModal>
</template>
