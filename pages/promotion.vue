<script lang="ts" setup>
</script>

<template>
  <div class="max-w-[1414px]  flex mx-auto flex-col gap-y-[12px] mt-[12px] relative z-[20] sm:px-[20px] ">
    <div class=" pt-[30px] md:pt-0 px-[15px] md:px-0">
      <div class="grid mt-[20px]  md:grid-cols-3 gap-[15px] sm:grid-cols-2">
        <div
          v-for="item in 10" :key="item"
          class="bg-color2 border-radius-0 shrink-0 pb-[20px] flex flex-col items-center justify-between overflow-hidden"
        >
          <div
            class="w-full h-0 shrink-0 relative bg-no-repeat bg-cover bg-center border-radius-0 cursor-pointer pb-[41.1%]"
            style="background-image: url(https://buck.engames.com/cdn-cgi/image/format=auto/buck/AFUN/1012/EN20241119-24.jpg)"
          />
          <div
            class="flex justify-start items-center gap-x-[10px] w-full h-[max-content] mt-[20px] px-[20px] overflow-hidden"
          >
            <div class="flex-1">
              <h3 class="text-[16px] font-[500] text-color line-clamp-1">
                AFUN
                Sports Ranking Championship
              </h3>
            </div>
            <button
              class="h-[40px] border-radius-0 bg-[--bc-bgColor9] text-[16px] font-[500] px-[8px] min-w-[100px] w-[max-content] text-[--bc-color2] shrink-0"
            >
              Detail
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
