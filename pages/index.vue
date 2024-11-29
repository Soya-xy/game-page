<script setup lang="ts">
const { $serverApi } = useNuxtApp()
const { data, error } = await useAsyncData('homeData', () => $serverApi('/api/getHomeData'))
console.log('🚀 ~ data:', data)
if (error.value) {
  navigateTo('/error')
}
</script>

<template>
  <div>
    <Suspense>
      <ClientOnly>
        <div class="container @container flex flex-col gap-y-[12px] mt-[12px] relative z-[20] sm:px-[24px]">
          <HomeSwiper />
          <HomeSwiper />
          <HomeBanner />
          <HomeRecent />
          <HomeCard />
          <BaseGameList title="Recommendar" />
          <BaseGameList title="AFun Originals" />
          <HomeLive title="Live Sports" />
          <HomePrizePool />
          <BaseDeposit />
          <HomeWithdraw />
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
