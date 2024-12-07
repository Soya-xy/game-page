<script lang="ts" setup>
const current = ref(0)
const currentList = ref(['PANEL', 'FAQ', 'TUTORIAL'])
</script>

<template>
  <div>
    <BaseTabs v-model="current" :list="currentList" />
    <div class="mt-[46px]">
      <template v-if="current === 0">
        <WapAffiliateInvite />
        <div class="flex flex-col px-[15px] gap-[25px] mt-[25px]">
          <PcAffiliateRewards />
          <WapAffiliateRules />
          <WapAffiliateLive />
          <PcAffiliateContact />
        </div>
      </template>
      <template v-if="current === 1">
        <WapAffiliateFaq />
      </template>
      <template v-if="current === 2">
        <AffiliateTop />
        <AffiliateFriends />
        <AffiliateRules />
      </template>
    </div>
  </div>
</template>

<style>

</style>
