<script lang="ts" setup>
import { asyncLevelList } from '~/api/vip'

definePageMeta({
  pageIndex: PageIndexEnum.vip,
})
const currentLevel = ref(1)

const { data: levelList } = await asyncLevelList()

provide('levelList', readonly(levelList.value!))
</script>

<template>
  <div class="container @container flex flex-col gap-y-[12px] relative z-[20] sm:px-[24px] pb-[24px]">
    <div class="flex overflow-x-hidden w-full">
      <div v-if="levelList.length > 0" class="flex flex-col w-full">
        <div class="flex flex-wrap text-[14px] relative bg-inherit">
          <div class="border-radius-0 w-full mt-[20px] pb-[50px]">
            <VipBanner />
            <VipLevel v-model="currentLevel" />
          </div>
          <VipModule :current-level="currentLevel" />
        </div>
      </div>
    </div>
  </div>
</template>

<style>

</style>
