<script lang="ts" setup>

</script>

<template>
  <div>
    <div class="flex justify-between items-center h-[54px] px-[20px] bg-color2">
      Profile
    </div>
    <main class="overflow-y-auto overflow-x-hidden flex-1 px-[40px] mb-[20px] py-[20px] relative">
      <div class="w-[80px] shrink-0 absolute top-0 left-[30px] h-[max-content]">
        <Image
          src="https://web-res-ccc.afunimg8.com/cdn-cgi/image/format=auto/C02/vip/l/vip1_l.png?t202411291700"
          alt="" importance="auto" class="w-full"
        />
      </div>
      <div class="flex flex-col gap-[16px]">
        <div class="flex flex-col items-center relative">
          <div class="w-[80px] rounded-full overflow-hidden bg-color-btn-3 p-[3px]">
            <Image
              src="https://web-res-ccc.afunimg8.com/cdn-cgi/image/format=auto/C02/userinfo/header/h_9.jpg?t=20231004"
              alt="" importance="auto" class="w-full rounded-full"
            />
          </div><span class="text-white mt-[10px] text-[18px] font-bold">85***66</span><span
            class="mt-[6px] text-[14px] flex items-center"
          > ID:600075693 <i
            class="inline-block h-[max-content] w-[max-content] icon-new-copy cursor-pointer ml-[14px] text-[20px] text-[--bc-color20] hover:text-white"
          /></span><span
            class="w-[36px] h-[36px] bg-color2 text-[20px] flex items-center justify-center border-radius-0 absolute top-0 right-0"
          ><i
            class="inline-block h-[max-content] w-[max-content] icon-new-edit cursor-pointer text-[--bc-color20] hover:text-white"
          /></span>
        </div>
        <div class="flex items-center gap-[5px]">
          <div class="bg-[--bc-color-3] flex-1 flex flex-col justify-center items-center gap-[10px] h-[72px] border-radius-0">
            <span class="text-[14px] text-[--bc-color20]">Join</span><span
              class="text-[16px] text-white font-bold text-center"
            >2024-11-04</span>
          </div>
          <div class="bg-[--bc-color-3] flex-1 flex flex-col justify-center items-center gap-[10px] h-[72px] border-radius-0">
            <span class="text-[14px] text-[--bc-color20]">Total Bet</span><span
              class="text-[16px] text-white font-bold"
            ><span class="whitespace-pre">R$0.00</span></span>
          </div>
          <div class="bg-[--bc-color-3] flex-1 flex flex-col justify-center items-center gap-[10px] h-[72px] border-radius-0">
            <span class="text-[14px] text-[--bc-color20]">Total Rewards</span><span
              class="text-[16px] text-white font-bold"
            ><span class="whitespace-pre">R$0.00</span></span>
          </div>
        </div>
        <div class="h-[321px] p-[20px] bg-[--bc-color-3] border-radius-0 flex flex-col gap-[10px]">
          <div class="text-white font-[500] text-[14px]">
            Favorite Games
          </div>
          <div class="w-full h-full flex flex-col justify-center items-center">
            <div class="flex flex-col items-center justify-center">
              <Image
                src="https://web-res-ccc.afunimg8.com/cdn-cgi/image/format=auto/C02/home/empty.png?t20231225"
                alt="" importance="auto" class="shrink-0 w-[220px]"
              />
              <p class="text-center mt-[10px] text-[16px]">
                <span>Oops! No data yet!</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<style></style>
