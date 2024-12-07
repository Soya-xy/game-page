<script lang="ts" setup>
import { ref } from 'vue'

const showDrawer = ref<boolean>(false)
</script>

<template>
  <div class="text-color border-radius-0 bg-color2">
    <div class="text-[15px] font-bold text-white h-[38px] flex items-center px-[15px] bg-[--bc-searchBtnColor]">
      Rules <i
        class="inline-block h-[max-content] w-[max-content] icon-new-wenhao relative ml-[10px] text-[15px] text-[--bc-color20] hover:text-white"
        @click="showDrawer = true"
      />
    </div>
    <div class="bg-color2 border-radius-0 py-[10px] px-[15px]">
      <div class="text-color-linear-20 text-[12px] font-bold text-center mb-[15px]">
        You can make money by referring friends to and earn up to commission rewards！
      </div>
      <AffiliateSlider />
    </div>
  </div>
  <BaseDrawer v-model:open="showDrawer" direction="right" content-class="z-[999] h-[100vh]" overlay-class="z-[999]">
    <template #title>
      Commission
    </template>
    <AffiliateRules />
    <AffiliateLevel />
  </BaseDrawer>
</template>

<style></style>
