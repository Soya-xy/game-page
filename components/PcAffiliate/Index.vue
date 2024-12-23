<script lang="ts" setup>
const userStore = useUserStore()
const { token } = storeToRefs(userStore)
</script>

<template>
  <PcAffiliateInvite />
  <PcAffiliateRoulette v-if="token" />
  <PcAffiliateRules />
  <PcAffiliateLiveRewards />
  <PcAffiliateRewards />
  <PcAffiliateContact />
  <PcAffiliateFaq />
</template>

<style>

</style>
