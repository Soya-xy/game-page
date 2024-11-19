<script setup lang="ts">
import { appName } from '~~/constants'

const nuxtApp = useNuxtApp()
const { isLoading } = useLoading()

nuxtApp.hook('page:finish', () => {
  isLoading.value = false
})

useHead({
  title: appName,
})
</script>

<template>
  <VitePwaManifest />
  <NuxtLayout>
    <BaseSpin v-show="isLoading" />
    <PlusModalNuxtPage v-slot="{ route }">
      <NuxtPage :route="route" />
    </PlusModalNuxtPage>
  </NuxtLayout>
</template>
