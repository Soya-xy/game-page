<script lang="ts" setup>
const route = useRoute()
const router = useRouter()
const isOpen = ref(false)
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
</script>

<template>
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
      @click="router.push('/casino')"
    >
      <div class="flex items-center justify-center" style="width: 22px; height: 22px;">
        <i-svg-casino :class="{ active: route.path === '/casino' }" />
      </div>
      <div class="text-center whitespace-nowrap" :class="{ active: route.path === '/casino' }">
        Casino
      </div>
    </div>
    <div
      class="flex-1 flex flex-col items-center justify-center text-[10px] space-y-[2px]"
      @click="router.push('/affiliate')"
    >
      <div class="flex items-center justify-center" style="width: 23px; height: 23px; ">
        <i-svg-affiliate :class="{ active: route.path === '/affiliate' }" />
      </div>
      <div class="text-center whitespace-nowrap" :class="{ active: route.path === '/affiliate' }">
        Affiliate
      </div>
    </div>
    <div
      class="flex-1 flex flex-col items-center justify-center text-[10px] space-y-[2px] "
      @click="router.push('/sports')"
    >
      <div class="flex items-center justify-center" style="width: 22px; height: 22px;">
        <i-svg-sport :class="{ active: route.path === '/sports' }" />
      </div>
      <div class="text-center whitespace-nowrap" :class="{ active: route.path === '/sports' }">
        Sports
      </div>
    </div>
    <div
      class="flex-1 flex flex-col items-center justify-center text-[10px] space-y-[2px]"
      @click="router.push('/account')"
    >
      <div class="flex items-center justify-center" style="width: 23px; height: 23px;">
        <i-svg-account :class="{ active: route.path === '/account' }" />
      </div>
      <div :class="{ active: route.path === '/account' }">
        Account
      </div>
    </div>
  </div>
  <Drawer v-model:open="isOpen" direction="left">
    <DrawerContent class="h-[calc(100vh-90px)] mb-[50px] pb-[70px] bg-color">
      <div class="flex flex-col pt-[10px] gap-[5px] mx-[3.3%] pt-[20px]">
        <BaseInvitation />
        <BaseSlideBarTab />
        <nav class="flex flex-col gap-[5px]">
          <div
            v-for="item in menuItems" :key="item.name"
            class="h-[40px] text-white text-[14px] font-semibold bg-color2 cursor-pointer rounded overflow-hidden"
            @click="() => {
              isOpen = false
              router.push(item.href)
            }"
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
          <div class="h-[40px] text-white text-[14px] font-semibold bg-color2 cursor-pointer rounded overflow-hidden">
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
    </DrawerContent>
  </Drawer>
</template>

<style></style>
