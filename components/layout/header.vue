<script lang="ts" setup>
import type { Locale } from '@intlify/core-base'
import { useMenu } from '@/composables/menu'
import { cn } from '@/lib/utils'

const router = useRouter()
const userStore = useUserStore()
const { token, user } = storeToRefs(userStore)
const { toggleMenu, isOpen } = useMenu()
const showLanguageModal = ref(false)
// 添加菜单配置数组
const menuItems = [
  { label: 'Wallet', icon: 'icon-n-wallet' },
  { label: 'Withdraw', icon: 'icon-n-withdraw' },
  { label: 'Profile', icon: 'icon-n-personal' },
  { label: 'Transaction', icon: 'icon-n-transaction-history' },
  { label: 'Bets History', icon: 'icon-n-bet-history' },
  { label: 'Free bets', icon: 'icon-n-free' },
  { label: 'Setting', icon: 'icon-n-security-settings' },
  { label: 'Install', icon: 'icon-n-install' },
]
const { setLocale } = useI18n()
function changeLang(lang: Locale) {
  setLocale(lang)
  router.replace('/')
  showLanguageModal.value = false
}
</script>

<template>
  <header
    :class="cn(
      'h-[60px] fixed top-0 left-0 right-0 z-[100] w-full',
      'bg-inherit flex items-center justify-between shadow-[0_4px_20px_#00000060]',
    )
    "
  >
    <div class="flex items-center gap-[27px] ml-[22px]">
      <BaseToggleMenu :class="isOpen ? 'rotate-180' : ''" @click="toggleMenu" />
      <Image src="/images/logo.avif" class="!h-[44px]" @click="router.push('/')" />
    </div>
    <div class="flex items-center px-[12px] gap-[12px]">
      <LayoutSearch />
      <LayoutUserWallet v-if="token" />
      <template v-else>
        <BaseButton @click="router.push('/login')">
          Sign in
        </BaseButton>

        <BaseButton class="bg-button-linear" @click="router.push('/register')">
          Sign Up
        </BaseButton>
      </template>

      <BaseIconButton>
        <i-svg-chat class="w-[25px] h-[24px]" />
      </BaseIconButton>
      <BaseIconButton @click="showLanguageModal = true">
        <i class="i-carbon-earth w-[25px] h-[24px]" />
      </BaseIconButton>
      <template v-if="token">
        <DropdownMenu>
          <DropdownMenuTrigger>
            <BaseAvatar :src="user?.avatar" :alt="user?.nickname" />
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align="end"
            class="bg-color2 text-color relative text-[14px] overflow-hidden border-radius-0 pt-[10px] min-w-[220px] flex flex-col shadow-[0_4px_20px_#00000060]"
          >
            <DropdownMenuItem
              v-for="item in menuItems" :key="item.label"
              class="hover:text-white hover:bg-page hover:text-bold focus:text-white focus:bg-page focus:text-bold p-0"
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

            <DropdownMenuItem
              class="hover:text-white hover:bg-page hover:text-bold focus:text-white focus:bg-page focus:text-bold p-0"
            >
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
      <div class="flex justify-between items-center h-[54px] px-[20px] bg-color2">
        Switch Language
      </div>
    </template>
    <BaseLang @change="changeLang" />
  </BaseModal>
</template>

<style></style>
