<script setup lang="ts">
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
  <div v-if="ready">
    <NuxtLayout :name="layout">
      <NuxtPage />
    </NuxtLayout>
  </div>
  <ClientOnly>
    <BaseModal />
  </ClientOnly>
</template>
