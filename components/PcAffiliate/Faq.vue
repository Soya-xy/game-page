<script lang="ts" setup>
const currentIndex = ref('1')

const Faq = [
  {
    title: '1.What is the afun.com affiliate program?',
    content: 'afun.com affiliates is a program where we offer you the opputunity to earn money every day, simply by giving us the chance to welcome more players.',
  },
  {
    title: '2.How much does it cost to participate?',
    content: `Absolutely nothing. It's completely free.`,
  },
  {
    title: '3.How much do I earn?',
    content: 'slots',
  },
]
</script>

<template>
  <div class="w-full mb-[40px]">
    <h3 class="text-[20px] px-[20px] font-bold text-white mb-[20px]">
      FAQ
    </h3>
    <BaseAccordion v-model="currentIndex" type="single" class="w-full" collapsible>
      <BaseAccordionItem v-for="(item, index) in Faq" :key="index" :value="index.toString()">
        <BaseAccordionTrigger
          class="bg-color2 px-[18px] text-[13px]"
          :class="{ 'text-white font-bold': index.toString() === currentIndex }"
        >
          {{ item.title }}
        </BaseAccordionTrigger>
        <BaseAccordionContent v-if="item.content !== 'slots'">
          {{ item.content }}
        </BaseAccordionContent>
        <BaseAccordionContent v-else>
          <PcAffiliateRules is-slots />
        </BaseAccordionContent>
      </BaseAccordionItem>
    </BaseAccordion>
  </div>
</template>

<style></style>
