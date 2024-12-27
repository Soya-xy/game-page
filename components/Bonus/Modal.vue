<script lang="ts" setup>
const info = defineProp<any>()
</script>

<template>
  <div class="h-full w-full overflow-y-auto overflow-x-hidden #F5F8FA] !rounded-[10px]">
    <div class="w-full h-[224px] bg-color-activity-15 shrink-0">
      <div class="w-full h-full relative shrink-0">
        <div class="w-[110px] h-[110px] absolute left-0 top-0 py-[13px] px-[15px]">
          <Image
            :src="info.picUrl"
            alt="" importance="auto" class="w-full"
          />
        </div>
        <div
          class="w-full h-[110px] flex items-center text-font text-[24px] font-bold pl-[120px] pr-[60px]"
        >
          {{ info.title }}
        </div>
      </div>
    </div>
    <div
      class="w-full h-[130px] shrink-0 relative z-[3] -mt-[130px] bg-linear-gradient(rgba(var(--bc-activityWhite) bg-0)0% bg-[rgb(var(--bc-activityWhite))100%)]"
    />
    <div class="h-[130px] shrink-0 w-full px-[12px] pt-[15px] relative z-[4] -mt-[130px]">
      <div class="w-full h-full rounded-[10px] overflow-hidden bg-[rgba(var(--bc-activityWhite),0.6)]" />
    </div>
    <div class="rounded-t-[13px] p-[20px] -mt-[130px] z-[5] relative">
      <div class="text-[--bc-fontActivity]">
        <div v-html="info.content" />
      </div>
    </div>
  </div>
</template>

<style>

</style>
