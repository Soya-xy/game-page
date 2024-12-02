<script lang="ts" setup>
import { footerList, joinList } from '~/@types/constants'
</script>

<template>
  <div class="mt-[40px] bg-color6 px-[24px]">
    <div class="py-[25px]">
      <div class="new-wrap flex flex-col gap-y-[24px]">
        <div class="flex w-full justify-between px-[16px] pb-[24px]">
          <ul
            class="text-center w-[1000px] grid gap-x-[5%] gap-y-[40px] mr-[60px] grid-flow-col-dense text-[14px] text-color grid-cols-4"
          >
            <li v-for="item in footerList" :key="item.title">
              <h4 class="text-white font-extrabold uppercase mb-[20px] text-left truncate">
                {{ item.title }}
              </h4>
              <div class="footer-link flex flex-col flex-wrap items-start gap-[14px] text-left">
                <a v-for="v in item.list" :key="v.name" class="cursor-pointer hover:text-white">
                  {{ v.name }}
                </a>
              </div>
            </li>
          </ul>
          <div class="w-[251px] shrink-0 grow text-[14px] text-color">
            <h4 class="text-white font-extrabold uppercase mb-[20px] text-left">
              Join our Community
            </h4>
            <div class="gap-x-[30px] gap-y-[20px] flex items-center flex-wrap">
              <a v-for="item in joinList" :key="item.name" class="footer-link shrink-0 cursor-pointer" target="_blank">
                <Image :src="item.url" class="w-[40px] h-[40px]" lazy />
              </a>
            </div>
          </div>
        </div>
        <div class="flex gap-x-[140px] border-solid border-t-[1px] border-[var(--bc-color18)] px-[16px] py-[33px]">
          <div class="w-[40%]">
            <Image src="/images/logo.avif" alt="logo" style="height: 86px;" />
            <div class="mt-[24px] text-left text-[13px] font-semibold text-color leading-[22px] whitespace-pre-wrap">
              The handicap and sports odds information contained on this website is for entertainment purposes only.
              Please check the betting regulations in your jurisdiction as they vary from state to state, province to
              province and country to country. It is prohibited to use this information to violate any law or statute.
              The site is not associated with, nor endorsed by, any professional or collegiate league, association, or
              team. Afun does not target anyone under the age of 18.

              1.This product is for use by users over the age of 18 and is intended for entertainment purposes only.
              2.This game contains in-app purchases.
              3 .Just because a player plays or wins in a social gambling game does not mean that he or she will win in
              real money gambling and related games in the future.
            </div><!---->
          </div>
          <div class="flex-1">
            <div class="flex flex-col mb-[12px] gap-[8px]">
              <div class="flex items-center gap-[50px]" style="height: 90px;">
                <div class="h-full shrink-0 cursor-pointer" style="width: 90px;">
                  <iframe
                    id="koyoz" class="w-full h-full" src="https://www.afun.global/res/sel.html" frameborder="0"
                    scrolling="no" crossorigin="anonymous"
                  />
                </div>
                <div class="h-full shrink-0">
                  <img
                    src="https://web-res-ccc.afunimg8.com/cdn-cgi/image/format=auto/C02/home/footer-icon-2.png?t20231225"
                    alt="footer" importance="auto" class="h-full" lazy=""
                  >
                </div><!---->
              </div><!---->
            </div>
            <p class="text-left text-[12px] font-semibold text-color leading-[22px] whitespace-pre-wrap">
              Afun.global is owned and operated by Safeplay Technology Ltd. registration number000041280, registered
              addressSea Urchin Street, San Pedro, Ambergris Caye,Belize. Contact us Support@afun.com. Afun.global is
              licensed and regulated by the Government of the Autonomous Island of Anjouan, Union of Comoros and
              operates under License No. ALSI-152406042-FI4. Afun.global has passed all regulatory compliance and is
              legally authorized to conduct gaming operations for any and all games of chance and wagering.
            </p><!---->
          </div>
        </div>
        <div
          class="text-[12px] pt-[33px] flex items-center justify-center border-solid border-t-[1px] border-[var(--bc-color18)]"
        >
          All rights reserved 2024 ©
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>
