<script lang="ts" setup>
const stepList = [
  {
    title: 'Step 1',
    description: 'Sign Up &amp; Get Exclusive VIP Rewards!',
  },
  {
    title: 'Step 2',
    description: 'Bet and earn points!',
  },
  {
    title: 'Step 3',
    description: 'Unlock Rewards, Level Up Your Benefits!',
  },
]
</script>

<template>
  <div class="mb-[40px]">
    <h3 class="md:text-[20px] text-[15px] px-[15px] md:px-0 font-bold text-white md:mb-[20px] mb-[10px]">
      Steps
    </h3>
    <div class="min-h-[114px] md:px-[12%] relative z-[1] flex md:justify-around md:gap-x-[7%]">
      <div class="w-full absolute md:top-[35px] top-[27.5px] left-0 border border-dashed border-[--bc-color20]" />
      <div
        v-for="(step, index) in stepList"
        :key="index"
        class="relative flex flex-col justify-start items-center md:top-[3px] flex-1 top-[10px]"
      >
        <div class="rounded-[90px] bg-color md:w-[146px] md:h-[64px] w-[86px] h-[36px]">
          <div class="rounded-[90px] bg-[--bc-color20] md:opacity-[0.3] opacity-[0.2] w-full h-full" />
        </div>
        <div
          class="md:text-[20px] text-[12px] md:w-[126px] md:h-[44px] w-[76px] h-[26px] font-bold text-white rounded-[90px] bg-[--bc-color20] absolute md:top-[10px] top-[5px] left-0 right-0 mx-auto flex justify-center items-center z-[1] whitespace-nowrap"
        >
          {{ step.title }}
        </div>
        <div class="md:text-[14px] text-[10px] mt-[6px] text-color text-center md:mt-[10px] md:w-[274px]">
          {{ step.description }}
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>
