<script lang="ts" setup>

</script>

<template>
  <div class="md:min-h-[252px]">
    <div class="h-[252px] flex gap-x-[12px] hidden md:flex">
      <BaseInfoCard show-icon img="https://web-res-ccc.afunimg8.com/cdn-cgi/image/format=auto/C02/_E/home/gameEntry/sports.png" :type="1" name="Sports" description="Bet on Football, Cricket, NFL, eSports &amp; over 80 sports" @click="routerPush('/sports')" />
      <BaseInfoCard show-icon img="https://web-res-ccc.afunimg8.com/cdn-cgi/image/format=auto/C02/_E/home/gameEntry/casino.png" :type="2" name="Casino" description="Play your favorite casino games" @click="routerPush('/casino')" />
      <BaseInfoCard show-icon img="https://web-res-ccc.afunimg8.com/cdn-cgi/image/format=auto/C02/_E/home/gameEntry/lottery.png" :type="3" name="Lottery" description="Play your favorite casino games" @click="routerPush('/lottery')" />
    </div>
    <div class="max-h-[252px] flex gap-x-[12px] flex aspect-[2.34] md:hidden">
      <BaseInfoCard img="https://web-res-ccc.afunimg8.com/cdn-cgi/image/format=auto/C02/_E/home/gameEntry/sports.png" :type="1" name="Sports" />
      <div class="flex flex-col gap-y-[12px] flex-1">
        <BaseInfoCard img="https://web-res-ccc.afunimg8.com/cdn-cgi/image/format=auto/C02/_E/home/gameEntry/casino.png" :type="2" name="Casino" class="!justify-center flex" />
        <BaseInfoCard img="https://web-res-ccc.afunimg8.com/cdn-cgi/image/format=auto/C02/_E/home/gameEntry/lottery.png" :type="3" name="Lottery" class="!justify-center flex" />
      </div>
    </div>
  </div>
</template>

<style></style>
