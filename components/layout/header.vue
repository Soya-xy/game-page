<script lang="ts" setup>
import { useMenu } from '@/composables/menu'
import { cn } from '@/lib/utils'

const router = useRouter()
const userStore = useUserStore()
const { user } = storeToRefs(userStore)
const { toggleMenu, isOpen } = useMenu()
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
      <Image src="/images/logo.avif" class="!h-[44px]" />
    </div>
    <div class="flex items-center px-[12px] gap-[12px]">
      <BaseIconButton>
        <i-svg-search class="w-[25px] h-[24px]" />
      </BaseIconButton>
      <template v-if="!user">
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
      <BaseIconButton>
        <i class="i-carbon-earth w-[25px] h-[24px]" />
      </BaseIconButton>
      <template v-if="user">
        <BaseAvatar :src="user.avatar" :alt="user.nickname" />
      </template>
    </div>
  </header>
</template>

<style></style>
