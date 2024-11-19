<script setup lang="ts">
</script>

<template>
  <div>
    <Suspense>
      <ClientOnly>
        <div class="container @container flex flex-col gap-y-[24px] px relative z-[20]">
          <HomeBanner />
          <HomeRecent />
          <HomeCard />
          <BaseGameList title="Recommendar" />
          <BaseGameList title="AFun Originals" />
          <HomePrizePool />
        </div>
      </ClientOnly>
      <template #fallback>
        <div italic op50>
          <span animate-pulse>Loading...</span>
        </div>
      </template>
    </Suspense>

    <Transition name="modal">
      <PlusModalPage name="modal" />
    </Transition>
  </div>
</template>
