<script lang="ts" setup>
const userStore = useUserStore()
const { token } = storeToRefs(userStore)

const defaultValue = ref('item-1')

const accordionItems = [
  { value: 'item-1', title: '1.What is the afun.com affiliate program?', content: 'afun.com affiliates is a program where we offer you the opputunity to earn money every day, simply by giving us the chance to welcome more players.' },
  { value: 'item-2', title: '2.How much does it cost to participate?', content: 'Absolutely nothing. It\'s completely free.' },
  { value: 'item-3', title: '3.Can it be animated?', content: 'Yes! You can use the transition prop to configure the animation.' },
]

const containerRef = ref()

const _swiper = useSwiper(containerRef, {
  slidesPerView: 4,
  slidesPerGroup: 2,
  spaceBetween: 8,
  autoplay: true,
  direction: 'vertical',
})

const dataList = ref([
  {
    id: 1,
    name: '123123123',
    commission: 100,
  },
  {
    id: 1,
    name: '123123123',
    commission: 100,
  },
  {
    id: 1,
    name: '123123123',
    commission: 100,
  },
  {
    id: 1,
    name: '123123123',
    commission: 100,
  },
  {
    id: 1,
    name: '123123123',
    commission: 100,
  },
])

definePageMeta({
  pageIndex: PageIndexEnum.affiliate,
})

const modelValue = ref([50])
</script>

<template>
  <div class="max-w-[1350px] mx-auto">
    <!-- 已登录 -->
    <template v-if="token">
      <h2>已登录</h2>
    </template>
    <!-- 未登录 -->
    <template v-else>
      <div class="wrap relative flex flex-col gap-[40px]">
        <div class="mt-[30px] mb-[20px] h-[330px] pt-[40px] pl-[40px]" style="background-size: auto 100%; background-repeat: no-repeat; background-position: right center; background-image: url(https://web-res-ccc.afunimg8.com/cdn-cgi/image/format=auto/C02/C0E/referAndEarn/banner_pc.png?20241031);">
          <div>
            <div class="text-white text-[15px] md:text-[30px] font-black uppercase mb-[10px]">
              INVITE FRIENDS TO EARN
            </div>
            <div class="text-[20px] md:text-[40px] text-linearColor2 font-black max-w-[80%] mt-[4px] w-[max-content]">
              70%Commission
            </div>
          </div><button class="text-[14px] bg-[--bc-bgColor10] text-[--bc-fontColor] font-bold border-radius-0 h-[46px] w-[max-content] min-w-[220px] px-[10px] mt-[40px]">
            Sign Up &amp; Earn
          </button>
        </div>
        <div class="px-[16px] md:px-[25px]">
          <div class="text-[--bc-textColor]">
            <div class="text-[15px] md:text-[20px] font-bold text-white md:bg-transparent py-[10px] px-[15px] md:px-0 bg-[--bc-searchBtnColor]">
              Rules <i class="inline-block h-[max-content] w-[max-content] icon-new-wenhao cursor-pointer relative ml-[10px] text-[15px] md:text-[20px] text-[--bc-color20] hover-text-white" />
            </div>
            <div class="bg-[--bc-bgColor2] border-radius-1 py-[20px] px-[15px] md:px-[40px] flex flex-col">
              <div class="flex items-center justify-between shrink-0 mb-[5px] w-full md:w-[342px]">
                <p class="text-[12px] font-bold">
                  Unlimited development of subordinates
                </p>
                <p class="text-[--bc-color20] underline text-[14px] cursor-pointer">
                  Rules
                </p>
              </div>
              <div class="md:flex gap-[40px]">
                <div class="w-full md:w-[342px] h-[199.5px] border-radius-0 bg-cover bg-no-repeat" style="background-image: url(https://web-res-ccc.afunimg8.com/cdn-cgi/image/format=auto/C02/C0E/referAndEarn/proxy_pc.jpg?20241031);" /><div class="flex-1 flex flex-col">
                  <div class="text-linearColor2 text-[14px] font-bold mt-[20px] md:mt-0">
                    You can make money by referring friends to  and earn up to  commission rewards！
                  </div>
                  <div class="flex flex-row flex-wrap items-center flex-1 max-h-[110px]" style="justify-content: left;">
                    <div class="text-[12px] md:text-[14px] w-[360px] flex items-center mt-[16px] md:mt-0 mb-[10px] md:mb-0">
                      <div class="w-[36px] h-[36px] mr-[10px] bg-no-repeat bg-center" style="background-image: url(https://web-res-ccc.afunimg8.com/cdn-cgi/image/format=auto/C02/bonusCenter/task_weekly_icon.png?t=20231205); background-size: 100%;" /><div>
                        <div class="md:mb-[16px]">
                          Recommended <span class="text-white">&gt; 100</span>
                          <i class="inline-block h-[max-content] w-[max-content] icon-new-personal cursor-pointer text-[14px] md:text-[20px] text-[--bc-textColor] ml-[4px]" />
                        </div>
                        <div>Commission<span class="text-white">R$5,000 / Month</span></div>
                      </div>
                    </div>
                    <!-- <div class="w-[220px] h-[50px] flex items-center hidden">
                      <div class="relative slider bg-color-btn-2 h-[6px] w-[200px] rounded-tl-[3px] rounded-bl-[3px]">
                        <div class="absolute z-[1] -top-[7px] h-[22px] overflow-hidden cursor-pointer" style="left: 0%;">
                          <div class="bg-color-text-2 w-[20px] h-[10px] relative z-[1]" /><div class="w-[20px] h-[20px] bg-color-text-2 rounded-bl-[4px] absolute z-[0] -top-[2px]" style="transform: rotate(-45deg);" />
                        </div>
                      </div>
                      <div class="relative slider bg-color-btn-2 h-[6px] w-[20px] rounded-tr-[3px] rounded-br-[3px]" />
                    </div> -->
                    <BaseFormSlider
                      v-model="modelValue"
                      :max="100"
                      :step="1"
                    />
                  </div>
                  <ul class="text-[12px] list-inside list-decimal mt-[10px] md:mt-0">
                    <li class="mb-[10px]">
                      Every time your recommended player places a bet, wins or loses, you will receive a different commission percentage.
                    </li>
                    <li>The system calculates commission every <span class="text-white">3 minutes</span>.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div class="text-[15px] md:text-[20px] font-bold text-white mb-[10px] mt-[10px] md:mt-[25px]">
              Live Rewards
            </div>
            <div class="border-radius-0 md:flex items-center justify-between py-[10px] px-[20px] bg-[--bc-bgColor2]">
              <div class=" md:min-w-[350px] flex items-center shrink-0">
                <div class="w-[45px] h-[45px] md:w-[85px] md:h-[85px] shrink-0 bg-no-repeat bg-cover bg-center" style="background-image: url(https://web-res-ccc.afunimg8.com/cdn-cgi/image/format=auto/C02/bonusCenter/task_weekly_icon.png?t=20231205);" />
                <div class="flex md:block  items-center mr-[25px] ml-[10px] text-left">
                  <div class="text-[12px] md:text-[14px] text-[--bc-textColor] mb-[6px]">
                    Send total commission
                  </div>
                  <div class="text-linearColor2 text-[13px] md:text-[24px] font-black whitespace-pre ml-[5px] md:ml-[auto]">
                    <span class="whitespace-pre">R$21,916,480.52</span>
                  </div>
                </div>
              </div>
              <div class=" h-[1px] md:w-[1px] md:h-[60px] mb-[10px] md:mb-0 shrink-0 bg-[--bc-bgColor5]" />
              <div class="flex-1 shrink-0 h-[100px]">
                <ClientOnly>
                  <swiper-container ref="containerRef" :init="false" class=" flex">
                    <swiper-slide v-for="(game, index) in dataList" :key="index" class="flex-shrink-0">
                      <div class=" md:pl-[50px] text-[12px] md:text-[14px] shrink-0">
                        <div class="h-[28px] md:h-[50px]">
                          <div class="h-full flex items-center mr-[8px]">
                            <div class="w-[15px] h-[15px] md:w-[30px] md:h-[30px] rounded-full bg-no-repeat bg-cover bg-center relative mr-[20px]" style="background-image: url(https://web-res-ccc.afunimg8.com/cdn-cgi/image/format=auto/C02/userinfo/header/h_4.jpg?t=20231004);">
                              <div class="w-[9px] h-[10px] md:w-[18px] md:h-[20px] bg-no-repeat bg-cover bg-center absolute -right-[8px] top-[10px]" style="background-image: url(https://web-res-ccc.afunimg8.com/cdn-cgi/image/format=auto/C02/vip/s/vip2.png);" />
                            </div>
                            <div class="flex flex-wrap gap-[4px]">
                              <div class="text-white">
                                489***763{{ game }}
                              </div>
                              <div class="text-[--bc-textColor]">
                                Commission <span class="text-[--bc-greenColor]">R$7.76</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </swiper-slide>
                  </swiper-container>
                </ClientOnly>
              </div>
            </div>
          </div><div>
            <div class="mb-[20px] text-[20px] text-white font-bold mt-[10px] md:mt-[25px]">
              Rewards
            </div>
            <div class="grid md:grid-cols-2 gap-[22px]">
              <div class="px-[20px] md:px-[40px] border-radius-1 min-h-[138px] md:h-[247px] flex overflow-hidden bg-[--bc-bgColor2]">
                <div class="flex justify-around flex-col flex-1 h-full pb-[10px] md:pb-[40px] pt-[8px] md:pt-[33px]">
                  <div class="text-white font-black text-[15px] md:text-[20px] uppercase">
                    Invite Roulette
                  </div><div class="text-[--bc-textColor] text-[12px] md:text-[16px]">
                    Invite users and get a <span class="text-white font-bold">R$100.00</span> cash reward.
                  </div>
                  <button class="px-[15px] h-[38px] md:h-[46px] shrink-0 font-bold min-w-[120px] md:min-w-[240px] w-[max-content] border-radius-0 bg-[--bc-activeColor] text-[--bc-fontColor] text-[12px] md:text-[14px]">
                    Details
                  </button>
                </div>
                <div class="w-[120px] h-[120px] md:h-[230px] md:w-[230px] bg-no-repeat bg-cover bg-center relative translate-x-[10px]">
                  <div class="w-[120px] h-[120px] md:h-[230px] md:w-[230px] bg-no-repeat bg-cover bg-center z-[2] absolute top-0 left-0" style="background-image: url(https://web-res-ccc.afunimg8.com/cdn-cgi/image/format=auto/C02/referAndEarn/22.png);" />
                </div>
              </div>
              <div class="px-[20px] md:px-[40px] border-radius-1 min-h-[138px] md:h-[247px] flex overflow-hidden bg-[--bc-bgColor2]">
                <div class="flex justify-around flex-col flex-1 h-full pb-[10px] md:pb-[40px] pt-[8px] md:pt-[33px]">
                  <div class="text-white font-black text-[15px] md:text-[20px] uppercase">
                    Commission
                  </div><div class="text-[--bc-textColor] text-[12px] md:text-[16px]">
                    Earn up to <span class="text-white font-bold">70%</span> commission when your friend bet.
                  </div>
                  <button class="px-[15px] h-[38px] md:h-[46px] shrink-0 font-bold min-w-[120px] md:min-w-[240px] w-[max-content] border-radius-0 bg-[--bc-activeColor] text-[--bc-fontColor] text-[12px] md:text-[14px]">
                    Details
                  </button>
                </div><div class="w-[120px] h-[120px] md:h-[230px] md:w-[230px] bg-no-repeat bg-cover bg-center relative translate-x-[10px]">
                  <div class="w-[120px] h-[120px] md:h-[230px] md:w-[230px] bg-no-repeat bg-cover bg-center z-[2] absolute top-0 left-0" style="background-image: url(https://web-res-ccc.afunimg8.com/cdn-cgi/image/format=auto/C02/C0E/referAndEarn/commission.png?20241031);" />
                </div>
              </div>
            </div>
          </div>
          <div class="mt-[20px]">
            <div class="p-[20px] md:p-[40px] border-radius-0 bg-[--bc-bgColor2]">
              <div class="text-[15px] md:text-[30px] font-black text-white">
                LEARN MORE ABOUT OUR AFFILIATE PROGRAM
              </div>
              <div class="text-[--bc-textColor] text-[14px] md:text-[18px] my-[10px] md:my-[18px]">
                If you have a large audience and followers. We have special conditions for you to customize your referral program!
              </div>
              <div class="flex gap-[20px]">
                <button class="border-radius-0 text-white text-[12px] px-[15px] w-full md:w-[max-content] min-w-[300px] h-[46px] bg-[--bc-bgColor]">
                  Telegram:@ThaliaSilva55
                </button>
              </div>
            </div>
          </div><div>
            <h3 class="text-[20px] font-bold text-white mb-[20px] mt-[10px] md:mt-[25px]">
              FAQ
            </h3><div class="flex flex-col gap-[4px] hidden">
              <div class="overflow-hidden border-radius-0 shrink-0">
                <div class="">
                  <div class="flex h-[40px] cursor-pointer px-[20px] items-center justify-between text-[14px] bg-[--bc-bgColor2]">
                    <div class="text-[--bc-textColor]">
                      1.What is the afun.com affiliate program?
                    </div><i class="inline-block h-[max-content] w-[max-content] icon-new-arrow cursor-pointer transition-all text-[20px] rotate-[90deg] text-[--bc-color20]" />
                  </div>
                </div><div class="overflow-hidden transition-all" style="height: 0px;">
                  <div class="py-[20px] px-[24px] border-[1px] border-solid text-[--bc-textColor] rounded-bl-[5px] rounded-br-[5px] text-[14px] bg-[--bc-bgColor] border-color-btn-1">
                    <span>afun.com affiliates is a program where we offer you the opputunity to earn money every day, simply by giving us the chance to welcome more players.</span>
                  </div>
                </div>
              </div><div class="overflow-hidden border-radius-0 shrink-0">
                <div class="">
                  <div class="flex h-[40px] cursor-pointer px-[20px] items-center justify-between text-[14px] bg-[--bc-bgColor2]">
                    <div class="text-[--bc-textColor]">
                      2.How much does it cost to participate?
                    </div><i class="inline-block h-[max-content] w-[max-content] icon-new-arrow cursor-pointer transition-all text-[20px] rotate-[90deg] text-[--bc-color20]" />
                  </div>
                </div><div class="overflow-hidden transition-all" style="height: 0px;">
                  <div class="py-[20px] px-[24px] border-[1px] border-solid text-[--bc-textColor] rounded-bl-[5px] rounded-br-[5px] text-[14px] bg-[--bc-bgColor] border-color-btn-1">
                    <span>Absolutely nothing. It's completely free.</span>
                  </div>
                </div>
              </div><div class="overflow-hidden border-radius-0 shrink-0">
                <div class="">
                  <div class="flex h-[40px] cursor-pointer px-[20px] items-center justify-between text-[14px] bg-[--bc-bgColor2]">
                    <div class="text-[--bc-textColor]">
                      3.How much do I earn?
                    </div><i class="inline-block h-[max-content] w-[max-content] icon-new-arrow cursor-pointer transition-all text-[20px] rotate-[90deg] text-[--bc-color20]" />
                  </div>
                </div><div class="overflow-hidden transition-all" style="height: 0px;">
                  <div class="py-[20px] px-[24px] border-[1px] border-solid text-[--bc-textColor] rounded-bl-[5px] rounded-br-[5px] text-[14px] bg-[--bc-bgColor] border-color-btn-1">
                    <div class="bg-[--bc-bgColor2] border-radius-1 py-[20px] px-[40px] flex flex-col !bg-transparent !p-0">
                      <div class="mb-[10px]">
                        As part of our affiliate network, you will be paid on a revenue share model. You earn more than 70% commission reward.
                      </div><div class="flex gap-[40px]">
                        <div class="shrink-0 w-[342px] h-[199.5px] border-radius-0 bg-cover bg-no-repeat" style="background-image: url(https://web-res-ccc.afunimg8.com/cdn-cgi/image/format=auto/C02/C0E/referAndEarn/proxy_pc.jpg?20241031);" /><div class="flex-1 flex flex-col">
                          <div class="flex justify-between flex-wrap gap-[10px]">
                            <div class="text-color-main-1 text-[15px] underline text-left cursor-pointer">
                              Commission calculation rules
                            </div><div class="text-color-main-1 text-[15px] underline cursor-pointer text-left min-w-[345px]">
                              Commission reward rules
                            </div>
                          </div><div class="flex flex-row flex-wrap items-center flex-1 max-h-[110px]" style="justify-content: left;">
                            <div class="text-[14px] w-[360px] flex items-center">
                              <div class="w-[75px] h-[75px] mr-[10px] bg-no-repeat bg-center" style="background-image: url(https://web-res-ccc.afunimg8.com/cdn-cgi/image/format=auto/C02/bonusCenter/task_weekly_icon.png?t=20231205); background-size: 100%;" /><div>
                                <div class="mb-[16px]">
                                  Recommended <span class="text-white">&gt; 100</span><i class="inline-block h-[max-content] w-[max-content] icon-new-personal cursor-pointer text-[20px] text-[--bc-textColor] ml-[4px]" />
                                </div><div>Commission <span class="text-white">R$5,000 / Month</span></div>
                              </div>
                            </div><div class="w-[220px] h-[50px] flex items-center">
                              <div class="relative slider bg-color-btn-2 h-[6px] w-[200px] rounded-tl-[3px] rounded-bl-[3px]">
                                <div class="absolute z-[1] -top-[7px] h-[22px] overflow-hidden cursor-pointer" style="left: 0%;">
                                  <div class="bg-color-text-2 w-[20px] h-[10px] relative z-[1]" /><div class="w-[20px] h-[20px] bg-color-text-2 rounded-bl-[4px] absolute z-[0] -top-[2px]" style="transform: rotate(-45deg);" />
                                </div>
                              </div><div class="relative slider bg-color-btn-2 h-[6px] w-[20px] rounded-tr-[3px] rounded-br-[3px]" />
                            </div>
                          </div><ul class="text-[12px] list-inside list-decimal">
                            <li class="mb-[10px]">
                              Every time your recommended player places a bet, wins or loses, you will receive a different commission percentage.
                            </li><li>The system calculates commission every <span class="text-white">3 minutes</span>.</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <BaseAccordion type="single" class="w-full" collapsible :default-value="defaultValue">
              <BaseAccordionItem v-for="item in accordionItems" :key="item.value" :value="item.value" @click="defaultValue = item.value">
                <BaseAccordionTrigger class="bg-[--bc-bgColor41] px-[18px] text-[13px]" :class="{ 'text-white font-bold': item.value === defaultValue }">
                  {{ item.title }}
                </BaseAccordionTrigger>
                <BaseAccordionContent class="bg-[--bc-bgColor41] p-[3px]">
                  <div class="bg-[--bc-bgColor] p-[20px]">
                    {{ item.content }}
                  </div>
                </BaseAccordionContent>
              </BaseAccordionItem>
            </BaseAccordion>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<style></style>
