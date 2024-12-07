<script lang="ts" setup>
const { token } = useUserStore()
</script>

<template>
  <div
    v-if="!token"
    class="w-full h-0 pb-[53.33%] bg-no-repeat bg-cover bg-center relative"
    style="background-image: url(https://web-res-ccc.afunimg8.com/cdn-cgi/image/format=auto/C02/C0E/referAndEarn/banner.png?20241031);"
  >
    <div class="px-[15px] py-[20px] absolute top-0 left-0 w-[60%]">
      <div class="drop-shadow-color-4 text-white text-[14px] font-semibold uppercase">
        INVITE FRIENDS TO EARN
      </div>
      <div
        class="drop-shadow-color-btn-2 text-color-linear-20 text-[18px] font-black mt-[2px] whitespace-pre-wrap w-[max-content] max-w-full"
      >
        70%Commission
      </div>
    </div>
    <button
      class="text-[12px] main-color-btn text-font font-bold border-radius-0 h-[40px] absolute bottom-0 left-0 right-0 m-auto w-[max-content] min-w-[140px] px-[10px]"
    >
      Sign Up &amp; Earn
    </button>
  </div>
  <div v-else class="px-[15px] pt-[15px] gap-y-[15px] flex flex-col">
    <WapAffiliateUserTotal />
    <WapAffiliateUserClaim />
    <WapAffiliateUserUrl />
  </div>
</template>

<style></style>
