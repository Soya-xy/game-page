<script setup>
import { isClient } from '@vueuse/core'

const { isOpen } = useMenu()

const menuItems = [
  { name: '首页', href: '/' },
  { name: '用户管理', href: '/users' },
  { name: '文件管理', href: '/files' },
  { name: '日程安排', href: '/calendar' },
  { name: '数据统计', href: '/analytics' },
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
      class="fixed top-[60px] bottom-0 left-0 w-[var(--bc-menuOpen)] bg-color shadow-bc transform transition-transform duration-300 ease-in-out"
      :class="{ '-translate-x-full': !isOpen }"
    >
      <nav class="mt-5 px-2">
        <a
          v-for="item in menuItems" :key="item.name" :href="item.href"
          class="group flex items-center px-2 py-2 text-base font-medium rounded-md text-gray-300 hover:bg-gray-700 hover:text-white"
        >
          {{ item.name }}
        </a>
      </nav>
    </div>

    <!-- 收起状态的侧边栏 -->
    <div
      class="fixed top-[60px] bottom-0 left-0 w-[var(--bc-menuClose)] bg-color shadow-bc transform transition-all duration-300 ease-in-out"
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
