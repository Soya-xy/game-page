<script setup lang="ts">
import Toaster from '@/components/ui/toast/Toaster.vue'
import { appName } from '~~/constants'

const color = useColorMode()
color.preference = 'dark'
const nuxtApp = useNuxtApp()
const { layout, ready } = useLayoutState()
const once = ref(true)

nuxtApp.hook('page:finish', () => {
  once.value = false
})

useHead({
  title: appName,
})
</script>

<template>
  <VitePwaManifest />
  <BaseSpin v-if="once" />
  <Suspense>
    <template v-if="ready">
      <NuxtLayout :name="layout">
        <NuxtPage />
      </NuxtLayout>
    </template>
    <template #fallback>
      <div class="opacity-50 italic">
        <span class="animate-pulse">Loading...</span>
      </div>
    </template>
  </Suspense>
  <ClientOnly>
    <BasePageModal />
    <Toaster />
  </ClientOnly>
</template>
