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
