<script lang="ts" setup>
import type { Locale } from '@intlify/core-base'

const router = useRouter()
const userStore = useUserStore()
const isShowTop = defineProp<boolean>(true)
const { token } = storeToRefs(userStore)
const showLanguageModal = ref<boolean>(false)
const { setLocale } = useI18n()
const showTop = ref(true)

function changeLang(lang: Locale) {
  setLocale(lang)
  router.replace('/')
  showLanguageModal.value = false
}
</script>

<template>
  <div
    class="fixed left-0 right-0 z-[51] transition-all duration-300 "
    :class="{
      '!-top-[--bc-appDownloadHeight]': !isShowTop,
      'top-0': isShowTop,
    }"
  >
    <WapDownload v-model:show="showTop" />
    <div class="h-[48px] flex items-center justify-between px-[10px] bg-[--bc-bgColor8]">
      <div class="flex items-center gap-[8px] h-full">
        <Image src="/images/logo.avif" class="!h-[30px]" @click="routerPush('/')" />
      </div>
      <div class="flex items-center h-full text-[12px] gap-x-[10px]">
        <div v-if="!token" class="flex items-center gap-[5px]">
          <button
            class="h-[35px] min-w-[62px] font-extrabold flex items-center justify-center bg-button px-[10px] rounded-[10px] text-white"
            @click="routerPush('/login')"
          >
            Sign In
          </button>
          <button
            class="px-[10px] h-[35px] min-w-[62px] font-extrabold text-font rounded-[10px] main-color-btn flex items-center justify-center"
            @click="routerPush('/register')"
          >
            Sign Up
          </button>
          <div
            class="w-[34px] h-[34px] flex items-center justify-center relative bg-button rounded-[10px]"
            @click="showLanguageModal = true"
          >
            <i class="inline-block h-[max-content] w-[max-content] icon-n-lang text-[20px]" />
          </div>
        </div>
        <LayoutUserWallet v-else />
      </div>
    </div>
  </div>
  <BaseModal v-model:show="showLanguageModal" wap-content-class="p-0 z-[555]" overlay-class="z-[550]">
    <template #title>
      <div class="flex justify-between items-center">
        Switch Language
      </div>
    </template>
    <BaseLang @change="changeLang" />
  </BaseModal>
</template>

<style></style>
