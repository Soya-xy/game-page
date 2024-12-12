<script lang="ts" setup>
import { ref } from 'vue'
import { asyncLevelList } from '~/api/vip'

definePageMeta({
  pageIndex: PageIndexEnum.vip,
  noHeader: true,
})
const currentLevel = ref(1)
const { isPc } = useDevice()
const { data: levelList } = await asyncLevelList()

const vipFaq = ref([
  {
    title: 'What is VIP?',
    content: 'VIP is a special membership program that offers exclusive benefits to our most loyal customers.',
  },
  {
    title: 'How do I become a VIP?',
    content: 'To become a VIP, you need to deposit and trade on our platform. The more you trade, the higher your VIP level will be.',
  },
])
const currentIndex = ref<any>()
provide('levelList', readonly(levelList.value!))
</script>

<template>
  <div class="container @container flex flex-col gap-y-[12px] relative z-[20] sm:px-[24px] !px-0 pb-[24px]">
    <VipHeader v-if="!isPc" />
    <div class="flex overflow-x-hidden w-full mt-[56px] md:mt-0">
      <div v-if="levelList.length > 0" class="flex flex-col w-full">
        <div class="flex flex-wrap text-[14px] relative bg-inherit">
          <div class="border-radius-0 w-full md:mt-[20px] pb-[50px] md:px-[15px]">
            <VipBanner v-if="isPc" />
            <VipWapBanner v-else />
            <VipLevel v-model="currentLevel" />
          </div>
          <div class="w-full">
            <VipModule :current-level="currentLevel" class="px-[15px]" />
            <div class="md:mb-[40px] mb-[25px] w-full bg-[--bc-color-3] md:bg-none p-[15px] md:p-0">
              <h3 class="md:text-[20px] text-[16px] md:px-[20px] font-bold text-white mb-[20px] mb-[10px]">
                More
              </h3>
              <div class="md:p-[20px] bg-[--bc-color-3] border-radius-1">
                <p class="mb-[10px] md:text-[14px] text-[12px] text-color">
                  Please see our promotions for more details.
                </p>
                <button class="bg-active text-font w-[max-content] px-[25px] text-[12px] font-bold h-[40px] border-radius-0 min-w-[130px]">
                  Promotions
                </button>
              </div>
            </div>
            <!-- FAQ -->
            <div class="w-full mb-[40px] px-[15px] ">
              <h3 class="text-[20px] md:px-[20px] font-bold text-white mb-[20px]">
                FAQ
              </h3>
              <BaseAccordion v-model="currentIndex" type="single" class="w-full" collapsible>
                <BaseAccordionItem v-for="(item, index) in vipFaq" :key="index" :value="index.toString()" class="my-[6px]">
                  <BaseAccordionTrigger class="bg-color2 px-[18px] md:text-[13px] text-[12px] py-[9px] md:py-4" :class="{ 'text-white font-bold': index === currentIndex }">
                    {{ item.title }}
                  </BaseAccordionTrigger>
                  <BaseAccordionContent>
                    {{ item.content }}
                  </BaseAccordionContent>
                </BaseAccordionItem>
              </BaseAccordion>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>

</style>
