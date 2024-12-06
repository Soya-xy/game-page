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
          <div class="mb-[40px] w-full">
            <h3 class="text-[20px] px-[20px] font-bold text-white mb-[20px]">
              More
            </h3><div class="p-[20px] bg-[--bc-color-3] border-radius-1">
              <p class="mb-[10px] text-[14px] text-color">
                Please see our promotions for more details.
              </p><button class="main-color-btn text-font w-[max-content] px-[25px] text-[12px] font-bold h-[40px] border-radius-0 min-w-[130px]">
                Promotions
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>

</style>
