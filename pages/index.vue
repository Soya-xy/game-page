<script setup lang="ts">
import type { ModuleType } from '~/@types/component'
import { Component } from '~/@types/component'
import { getHomeData } from '~/api'
import Spin from '~/components/Base/Spin.vue'
import { PageIndexEnum } from '~/composables/page'

definePageMeta({
  pageIndex: PageIndexEnum.home,
})

const userStore = useUserStore()
const { token } = storeToRefs(userStore)
const { data, error } = await getHomeData()
const { isPc } = useDevice()
if (error.value) {
  navigateTo('/error')
}

function getComponent(type: ModuleType) {
  if (!Component[type])
    return null
  return defineAsyncComponent({
    loader: () => Component[type],
    delay: 100,
    timeout: 10000,
    suspensible: false,
    loadingComponent: Spin,
  })
}
</script>

<template>
  <div>
    <ClientOnly>
      <div class="container @container flex flex-col gap-y-[12px] mt-[12px] relative z-[20] sm:px-[24px]">
        <HomeBanner v-if="!token" />
        <template v-for="item in data" :key="item.id">
          <component :is="getComponent(item.moduleType)" :id="item.id" :title="item.title" />
        </template>
        <div v-if="isPc" class="right-[20px] bottom-[40px] cursor-pointer fixed z-[120] w-[120px]">
          <HomeInviteWheel />
        </div>
      </div>
    </ClientOnly>
  </div>
</template>
