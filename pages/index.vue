<script setup lang="ts">
import type { ModuleType } from '~/@types/component'
import { Component } from '~/@types/component'
import { asyncHomeData } from '~/api/home'
import Spin from '~/components/Base/Spin.vue'
import { PageIndexEnum } from '~/composables/page'

definePageMeta({
  pageIndex: PageIndexEnum.home,
  noFooter: true,
})

const { data } = await asyncHomeData()

const { isPc } = useDevice()

// getChatList({
//   pageNo: 1,
//   pageSize: 10,
// })

// sendChat({
//   contentType: '1',
//   content: 'test',
// })
// if (error.value) {
//   navigateTo('/error')
// }

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
        <template v-for="item in data" :key="item.id">
          <component :is="getComponent(item.moduleType)" v-bind="item" />
        </template>
        <div v-if="isPc" class="right-[20px] bottom-[40px] cursor-pointer fixed z-[120] w-[120px]">
          <HomeInviteWheel />
        </div>
      </div>
    </ClientOnly>
  </div>
</template>
