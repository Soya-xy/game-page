<script setup lang="ts">
import { appName } from '~~/constants'

const nuxtApp = useNuxtApp()
const { isLoading } = useLoading()
const layout = useLayoutState()

nuxtApp.hook('page:finish', () => {
  isLoading.value = false
})

useHead({
  title: appName,
})
</script>

<template>
  <VitePwaManifest />
  <NuxtLayout :name="layout">
    <BaseSpin v-show="isLoading" />
    <NuxtPage />
  </NuxtLayout>
  <ClientOnly>
    <BaseModal />
  </ClientOnly>
</template>
