<template>
  <div class="w-full" style="min-height: 261px;">
    <!-- css 渐变 -->
    <div class="bg-color2 rounded overflow-hidden">
      <div
        class="h-[261px] py-[30px] rounded-[inherit] font-extrabold text-white flex flex-col justify-center bg-color3-linear relative bg-no-repeat bg-cover pl-[clamp(20px,10%,100px)]"
      >
        <Image
          src="/images/afun/banner.avif" class="h-full absolute top-0
          right-[-25%] md:right-[-15%] xl:right-0"
        />
        <h3 class="text-[26px] leading-[36px] z-[1]">
          Sign Up &amp; Get
        </h3>
        <div
          class="
          p-[20px] w-[max-content]
          min-w-[300px]
          rounded-[10px] bg-color4 mt-[16px] mb-[20px]" style="backdrop-filter: blur(205px);"
        >
          <h4 class="text-[24px] leading-[32px]">
            UP TO <div class="text-linearColor inline-block">
              $ 1.000
            </div>
          </h4>
        </div>
        <button
          class="rounded-sm w-[max-content] min-w-[300px] main-color-btn h-[42px] text-[15px] text-black flex items-center justify-center px-[30px] z-[1] hover:brightness-105"
          @click="routerPush('/login')"
        >
          Join
          Now
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.bg-linear {
  background: linear-gradient(to right, #3d674c, var(--bc-bgColor2));
}
</style>
