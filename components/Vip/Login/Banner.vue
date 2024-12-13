<script lang="ts" setup>
const { isPc } = useDevice()
</script>

<template>
  <VipHeader />
  <div class="pt-[56px] md:pt-0">
    <div
      class="h-[0] md:pb-[19.26%] pb-[48%] bg-no-repeat bg-cover md:mt-[20px] md:mb-[40px] relative"
      :style="`background-image: url(https://web-res-ccc.afunimg8.com/cdn-cgi/image/format=auto/C02/C0E/vip/banner${isPc ? '_pc' : ''}.png?20240624);`"
    >
      <div
        class="absolute top-0 md:py-[1.45%] md:px-0 left-0 z-[1] md:w-[40%] h-full flex flex-col md:justify-around text-color justify-between px-[20px] w-full overflow-hidden"
      >
        <div class="text-color-linear-20 text-[30px] font-black hidden md:block">
          VIP Club
        </div>
        <div
          class="md:text-[18px] font-semibold md:line-clamp-2 md:text-color w-full line-clamp-3 text-ellipsis text-white mt-[20px] md:mt-0 text-[12px]"
        >
          Join the VIP Club. Unlock High Cashbacks.All kinds of exquisite gifts.It will surprise you!
        </div>
        <button class="bg-active text-font font-bold text-[14px] h-[46px] border-radius-0 px-[27px] min-w-[220px] w-[max-content] shrink-0 hidden md:block">
          Level Up to VIP
        </button>

        <div class="w-[52%] flex-1 mt-[30px] flex flex-col justify-between pb-[4%] md:hidden">
          <button
            class="bg-active text-font font-bold text-[12px] h-[40px] border-radius-0 px-[15px] w-[max-content] shrink-0"
          >
            Level Up to VIP
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>
