<script setup lang="ts">
import type { ModuleType } from '~/@types/component'
import { Component } from '~/@types/component'
import { getHomeData } from '~/api'
import Spin from '~/components/Base/Spin.vue'

const { data, error } = await getHomeData()
console.log('🚀 ~ data:', data)

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
    <Suspense>
      <ClientOnly>
        <div class="container @container flex flex-col gap-y-[12px] mt-[12px] relative z-[20] sm:px-[24px]">
          <HomeBanner />
          <template v-for="item in data" :key="item.id">
            <component :is="getComponent(item.moduleType)" :id="item.id" :title="item.title" />
          </template>
        </div>
      </ClientOnly>
      <template #fallback>
        <div class="opacity-50 italic">
          <span class="animate-pulse">Loading...</span>
        </div>
      </template>
    </Suspense>
  </div>
</template>
