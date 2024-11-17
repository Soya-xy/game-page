<script setup>
import { isClient } from '@vueuse/core'
// import cas
const { isOpen } = useMenu()

const menuItems = [
  { name: 'Casino', href: '/', icon: 'casino', iconType: 'svg' },
  { name: 'Sports', href: '/analytics', icon: 'sport', iconType: 'svg' },
  { name: 'Bonus Games', href: '/analytics', icon: 'lotter', iconType: 'svg' },
  { name: 'VIP Club', href: '/analytics', icon: 'icon-n-vip' },
  { name: 'Affiliate', href: '/analytics', icon: 'icon-n-affiliate' },
  { name: 'Promotion', href: '/analytics', icon: 'icon-n-bonus' },
  { name: 'Install', href: '/analytics', icon: 'icon-n-install' },
  { name: 'Live Chat', href: '/analytics', icon: 'icon-n-livechat' },
]

onMounted(() => {
  if (window.innerWidth < 768) {
    isOpen.value = false
  }
})

if (isClient) {
  window.addEventListener('resize', () => {
    if (window.innerWidth < 768) {
      isOpen.value = false
    }
  })
}
</script>

<template>
  <div class="relative">
    <!-- 展开状态的侧边栏 -->
    <div
      class="flex flex-col gap-[5px] fixed top-[60px] bottom-0 p-[16px] left-0 w-[var(--bc-menuOpen)] bg-color2 shadow-bc transform transition-transform duration-300 ease-in-out"
      :class="{ '-translate-x-full': !isOpen }"
    >
      <BaseInvitation />
      <BaseSlideBarTab />
      <nav class="flex flex-col gap-[5px]">
        <div
          v-for="item in menuItems" :key="item.name" :href="item.href"
          class="h-[40px] text-white text-[14px] font-semibold bg-tab cursor-pointer rounded-[10px] overflow-hidden"
        >
          <div class="h-full flex items-center relative hover-bg-linear-3">
            <div class="w-[40px] h-[40px] flex items-center justify-center">
              <i
                v-if="item.iconType !== 'svg'"
                class="inline-block h-[max-content] w-[max-content] cursor-pointer text-[22px] text-e-g-color-108 hover-icon"
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
        <div class="h-[40px] text-white text-[14px] font-semibold bg-tab cursor-pointer rounded-[10px] overflow-hidden">
          <div class="h-full flex items-center relative hover-bg-linear-3">
            <div class="w-[40px] h-[40px] flex items-center justify-center">
              <i
                class="inline-block h-[max-content] w-[max-content] icon-n-lang cursor-pointer text-[22px] text-e-g-color-108 hover-icon"
              />
            </div>
            <p class="text-[14px] flex-1">
              {{ $t('lang.name') }}
            </p>
          </div>
        </div>
      </nav>
    </div>

    <!-- 收起状态的侧边栏 -->
    <div
      class="fixed top-[60px] bottom-0 left-0 w-[var(--bc-menuClose)] bg-color2 shadow-bc transform transition-all duration-300 ease-in-out"
      :class="{
        'opacity-0 translate-y-full': isOpen,
        'opacity-100 translate-y-0': !isOpen,
      }"
    >
      <nav class="mt-5">
        <div v-for="item in menuItems" :key="item.name" class="flex justify-center">
          <a
            :href="item.href" class="p-2 text-gray-300 hover:bg-gray-700 hover:text-white rounded-md"
            :title="item.name"
          >
            {{ item.name }}

          </a>
        </div>
      </nav>
    </div>
  </div>
</template>
