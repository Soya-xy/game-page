<script setup lang="ts">
</script>

<template>
  <div>
    <Suspense>
      <ClientOnly>
        <div class="container flex flex-col gap-[24px]  relative z-[20]">
          <HomeBanner />
          <HomeRecent />
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
