<script setup lang="ts">
definePageMeta({
  pageIndex: PageIndexEnum.affiliate,
})

const affiliate = useAffiliate()

await affiliate.init()
</script>

<template>
  <div class="max-w-[1440px] mx-auto relative z-[20] sm:px-[24px] px-0 pb-[24px]">
    <div class="hidden gap-[40px] md:flex flex-col">
      <PcAffiliate />
    </div>
    <div class="flex flex-col md:hidden">
      <WapAffiliate />
    </div>
  </div>
</template>
