<script setup lang="ts">
</script>

<template>
  <div>
    <Suspense>
      <ClientOnly>
        <div class="container @container flex flex-col gap-y-[24px] px relative z-[20] sm:px-[24px]">
          <HomeSwiper />
          <HomeBanner />
          <HomeRecent />
          <HomeCard />
          <BaseGameList title="Recommendar" />
          <BaseGameList title="AFun Originals" />
          <HomeLive title="Live Sports" />
          <HomePrizePool />
        </div>
      </ClientOnly>
      <template #fallback>
        <div italic op50>
          <span animate-pulse>Loading...</span>
        </div>
      </template>
    </Suspense>
  </div>
</template>
