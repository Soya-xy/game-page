<script lang="ts" setup>
import { useMenu } from '@/composables/menu'
import { cn } from '@/lib/utils'

const { toggleMenu, isOpen } = useMenu()
const { openRouterModal } = useModal()
function openLogin() {
  openRouterModal('LoginIndex')
}
</script>

<template>
  <header
    :class="cn(
      'h-[60px] fixed top-0 left-0 right-0 z-[100] w-full',
      'bg-header flex items-center justify-between shadow-[0_4px_20px_#00000060]',
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

      <BaseButton @click="openLogin">
        Sign in
      </BaseButton>

      <BaseButton class="bg-button-linear">
        Sign Up
      </BaseButton>
      <BaseIconButton>
        <i-svg-chat class="w-[25px] h-[24px]" />
      </BaseIconButton>
      <BaseIconButton>
        <i class="i-carbon-earth w-[25px] h-[24px]" />
      </BaseIconButton>
    </div>
  </header>
</template>

<style></style>
