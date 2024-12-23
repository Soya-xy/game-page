<script lang="ts" setup>
const userStore = useUserStore()
const { token } = storeToRefs(userStore)
const current = ref(0)
const currentList = ref(['PANEL', 'FAQ', 'TUTORIAL'])
</script>

<template>
  <div>
    <BaseTabs v-model="current" :list="currentList" item-class="w-[33%]" />
    <div class="mt-[48px]">
      <template v-if="current === 0">
        <WapAffiliateInvite />
        <div class="flex flex-col px-[15px] gap-[25px] mt-[25px]">
          <PcAffiliateRewards />
          <WapAffiliateUserWallet v-if="token" />
          <WapAffiliateUserTeam v-if="token" />
          <WapAffiliateLive />
          <WapAffiliateRules />
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
