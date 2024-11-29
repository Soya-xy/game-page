<script lang="ts" setup>

</script>

<template>
  <div class="h-[252px] flex gap-x-[12px] hidden xl:flex">
    <BaseInfoCard show-icon :type="1" name="Sports" description="Bet on Football, Cricket, NFL, eSports &amp; over 80 sports" />
    <BaseInfoCard show-icon :type="2" name="Casino" description="Play your favorite casino games" />
    <BaseInfoCard show-icon :type="3" name="Lottery" description="Play your favorite casino games" />
  </div>
  <div class="h-[252px] flex gap-x-[12px] flex xl:hidden">
    <BaseInfoCard show-icon :type="1" name="Sports" />
    <div class="flex flex-col gap-y-[12px] flex-1">
      <BaseInfoCard show-icon :type="2" name="Casino" class="!justify-center flex" />
      <BaseInfoCard show-icon :type="3" name="Lottery" class="!justify-center flex" />
    </div>
  </div>
</template>

<style></style>
