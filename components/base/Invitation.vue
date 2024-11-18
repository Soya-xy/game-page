<script lang="ts" setup>
const isIcon = defineProp<boolean>(false)
</script>

<template>
  <div class="shrink-0 relative flex justify-center items-center" :style="{ height: isIcon ? '50px' : '100px' }">
    <div v-if="!isIcon" class="bg-linear-color-2 w-full h-full rounded-[8px] pl-[10px]">
      <div class="w-[82.8%] text-white h-full flex flex-col justify-center">
        <div
          class="text-[10px] bg-noActive2 font-semibold py-[1px] rounded-[4px] w-[max-content] -skew-x-[30deg] px-[12px] ml-[2px]  text-white"
        >
          <div class="skew-x-[30deg]">
            Refer and Earn
          </div>
        </div>
        <div class="text-[13px] font-extrabold my-[5px]">
          Refer friends and earn commissions
        </div>
        <div
          class="leading-[18px] text-[10px] bg-noActive font-semibold py-[1px] px-[8px] rounded-[4px] w-[max-content] cursor-pointer"
        >
          Copy link
        </div>
      </div>
      <Image src="/images/afun/affiliate.avif" class="h-full absolute right-0 bottom-0" lazy />
    </div>
    <template v-else>
      <Image src="/images/afun/affiliate.avif" class="h-full" lazy />
    </template>
  </div>
</template>

<style></style>
