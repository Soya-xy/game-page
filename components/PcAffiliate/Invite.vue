<script lang="ts" setup>
import { Dropdown } from 'floating-vue'
import { ref } from 'vue'
import VueQrcode from 'vue-qrcode'
import { useToast } from '../ui/toast'

const user = useUserStore()
const { token } = storeToRefs(user)
const { copy } = useClipboard()
const { toast } = useToast()
const date = ref()
function copyUrl(str: string | undefined) {
  if (!str)
    return

  copy(str)
  toast({
    title: 'Copied',
    description: 'Copied to clipboard',
  })
}

const affiliate = useAffiliate()
const { summary, code, maxReward } = storeToRefs(affiliate)
const showDetail = ref<boolean>(false)
</script>

<template>
  <div
    v-if="!token" class="mt-[30px] mb-[20px] h-[330px] pt-[40px] pl-[40px]"
    style="background-size: auto 100%; background-repeat: no-repeat; background-position: right center; background-image: url(https://web-res-ccc.afunimg8.com/cdn-cgi/image/format=auto/C02/C0E/referAndEarn/banner_pc.png?20241031);"
  >
    <div>
      <div class="text-white text-[30px] font-black uppercase mb-[10px]">
        INVITE FRIENDS TO EARN
      </div>
      <div class="text-[40px] text-color-linear-20 font-black max-w-[80%] mt-[4px] whitespace-pre-wrap w-[max-content]">
        {{ maxReward }}Commission
      </div>
    </div>
    <button
      class="text-[14px] bg-[--bc-activeColor3] text-font font-bold border-radius-0 h-[46px] w-[max-content] min-w-[220px] px-[10px] mt-[40px]"
    >
      Sign Up &amp; Earn
    </button>
  </div>
  <ClientOnly v-else>
    <div class="mt-[40px] w-full">
      <div class="text-[20px] font-bold text-white">
        Affiliate
      </div>
      <div class="flex mt-[10px] gap-[20px] flex-wrap flex-row-reverse">
        <!-- 邀请码 -->
        <div
          class="flex-[2] bg-color2 min-w-[430px] pt-[32px] border-radius-1 !bg-[length:100%_auto] !bg-no-repeat"
          style="background-image: url(https://web-res-ccc.afunimg8.com/cdn-cgi/image/format=auto/C02/C0E/referAndEarn/share_bg_pc.jpg?20241031);"
        >
          <div class="px-[10%] flex flex-col justify-between h-full">
            <div>
              <div class="flex flex-col h-[142px]">
                <div class="text-[25px] text-color-linear-20 font-black w-[80%] mb-[4px] whitespace-pre-wrap">
                  {{ maxReward }}Commission
                </div>
                <div class="text-white text-[20px] font-bold uppercase">
                  INVITE FRIENDS TO EARN
                </div>
              </div>
              <div class="text-[18px] text-white font-semibold mb-[13px]">
                Invite via:
              </div>
              <div class="flex">
                <div class="w-[105px] h-[105px] p-[3px] bg-[#FFF]">
                  <VueQrcode
                    v-if="code?.brokeragePromotionUrl" :margin="2" :value="code.brokeragePromotionUrl"
                    :color="{ dark: '#000000ff', light: '#ffffffff' }" type="image/png"
                  />
                </div>
                <div class="flex-1 ml-[10px] min-w-[100px]">
                  <div class="mb-[13px]">
                    <div
                      class="w-full border-radius-0 flex items-center shrink-0 border-[--bc-bgColor5] border border-solid relative h-[46px]  text-[14px] px-[16px] gap-[8px]  bg-[--bc-searchBtnColor]"
                    >
                      <div class="text-color !w-[3em] shrink-0">
                        Link
                      </div>
                      <div class="h-full flex items-center flex-1 shrink-0 relative overflow-hidden">
                        <input
                          class="h-full flex-1 min-w-[60px] bg-transparent text-white placeholder:font-normal"
                          disabled :value="code?.brokeragePromotionUrl"
                        >
                      </div>
                      <i
                        class="inline-block h-[max-content] w-[max-content] icon-new-copy cursor-pointer text-[20px] text-[--bc-color20]"
                        @click="copyUrl(code?.brokeragePromotionUrl)"
                      />
                    </div>
                  </div>
                  <div>
                    <div
                      class="field-container w-full border-radius-0 flex items-center shrink-0 border-[--bc-bgColor5] border border-solid relative h-[46px]  text-[14px] px-[16px] gap-[8px] field-container-pc h-[46px] bg-[--bc-searchBtnColor]"
                    >
                      <div class="text-color !w-[3em] shrink-0">
                        Code
                      </div>
                      <div class="h-full flex items-center flex-1 shrink-0 relative overflow-hidden">
                        <input
                          class="h-full flex-1 min-w-[60px] bg-transparent text-white placeholder:font-normal"
                          disabled :value="code?.brokeragePromotionCode"
                        >
                      </div>
                      <i
                        class="inline-block h-[max-content] w-[max-content] icon-new-copy cursor-pointer text-[20px] text-[--bc-color20]"
                        @click="copyUrl(code?.brokeragePromotionCode)"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div class="mt-[20px]">
                <div class="flex items-center">
                  <div class="h-[1px] flex-1 bg-[--bc-bgColor9]" />
                  <div class="mx-[10px] text-color text-[14px]">
                    OR
                  </div>
                  <div class="h-[1px] flex-1 bg-[--bc-bgColor9]" />
                </div>
                <div class="flex gap-[36px] items-center pt-[20px] pb-[40px] justify-center">
                  <Image
                    src="https://web-res-ccc.afunimg8.com/cdn-cgi/image/format=auto/C02/share/facebook.png?20240416"
                    alt="" importance="auto" class="!h-[50px] cursor-pointer"
                  />
                  <Image
                    src="https://web-res-ccc.afunimg8.com/cdn-cgi/image/format=auto/C02/share/telegram.png?20240416"
                    alt="" importance="auto" class="!h-[50px] cursor-pointer"
                  />
                  <Image
                    src="https://web-res-ccc.afunimg8.com/cdn-cgi/image/format=auto/C02/share/whatsapp.png?20240416"
                    alt="" importance="auto" class="!h-[50px] cursor-pointer"
                  />
                  <Image
                    src="https://web-res-ccc.afunimg8.com/cdn-cgi/image/format=auto/C02/share/bulesky.png" alt=""
                    importance="auto" class="!h-[50px] cursor-pointer"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- 明细 -->
        <div class="flex-[5] flex flex-col min-w-[900px]">
          <div class="flex gap-[20px]">
            <div class="flex flex-1 flex-col gap-[20px] items-center">
              <div class="flex-1 flex flex-col bg-color2 w-full px-[10%] py-[20px] border-radius-1">
                <div class="flex items-center mb-[10px]">
                  <div class="text-white font-bold text-[20px] relative">
                    Today team data
                  </div>
                  <Dropdown :distance="6" placement="right">
                    <i
                      class="inline-block h-[max-content] w-[max-content] icon-new-wenhao cursor-pointer text-[20px] ml-[10px] relative text-[--bc-color20] hover-question-modal hover-text-white pr-[10px] -mr-[10px]"
                    />
                    <template #popper>
                      <div
                        class=" w-[280px] left-[24px]  p-[10px] box-shadow-02 border-radius-0 bg-[--bc-bgColor9] z-10"
                      >
                        <ul class="text-[14px] list-disc list-outside text-color leading-[1.2] pl-[20px]">
                          <li>Sign up:Number of users who signed up today</li>
                          <li>First Deposit:Number of first deposit users today</li>
                          <li>Valid bets:Valid betting for today’s team</li>
                        </ul>
                      </div>
                    </template>
                  </Dropdown>
                </div>
                <div class="flex-1 grid grid-cols-2 gap-[10px]">
                  <div
                    class="flex flex-col items-center justify-center shrink-0 border-[1px] border-dashed border-[--bc-bgColor9] border-radius-0"
                  >
                    <div class="text-[14px] text-[--bc-color20] mb-[2px]">
                      Sign Up
                    </div>
                    <div class="text-[16px] text-color font-semibold">
                      {{ summary?.todayBrokerageUserCount }}
                    </div>
                  </div>
                  <div
                    class="flex flex-col items-center justify-center shrink-0 border-[1px] border-dashed border-[--bc-bgColor9] border-radius-0"
                  >
                    <div class="text-[14px] text-[--bc-color20] mb-[2px]">
                      First Deposit
                    </div>
                    <div class="text-[16px] text-color font-semibold">
                      {{ summary?.todayFirstDeposit }}
                    </div>
                  </div>
                  <div
                    class="flex flex-col items-center justify-center shrink-0 border-[1px] border-dashed border-[--bc-bgColor9] border-radius-0"
                  >
                    <div class="text-[14px] text-[--bc-color20] mb-[2px]">
                      Valid bet
                    </div>
                    <div class="text-[16px] text-color font-semibold">
                      <span class="whitespace-pre">{{ toCurrency(summary?.todayBrokerageUserCount) }}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="flex-1 flex flex-col bg-color2 w-full px-[10%] py-[20px] border-radius-1">
                <div class="flex items-center mb-[10px]">
                  <div class="text-white font-bold text-[20px]">
                    Total team data
                  </div>
                  <Dropdown :distance="6" placement="bottom-end">
                    <i
                      class="inline-block h-[max-content] w-[max-content] icon sysicon-new-wenhao cursor-pointer text-[20px] ml-[10px] relative hover-question-modal text-[--bc-color20] hover-text-white pr-[10px] -mr-[10px]"
                    />
                    <template #popper>
                      <div
                        class="absolute w-[280px] left-[24px] top-0 p-[10px] box-shadow-02 border-radius-0 bg-[--bc-bgColor9] z-[10]"
                      >
                        <ul class="text-[14px] list-disc list-outside text-color leading-[1.2] pl-[20px]">
                          <li>Sign up: Teams Total number of sign ups</li>
                          <li>First Deposit: Total number of first-time depositors</li>
                          <li>Valid bets:The team’s total effective bet amount</li>
                        </ul>
                      </div>
                    </template>
                  </Dropdown>
                </div>
                <div class="flex-1 grid grid-cols-2 gap-[10px]">
                  <div
                    class="flex flex-col items-center justify-center shrink-0 border-[1px] border-dashed border-[--bc-bgColor9] border-radius-0"
                  >
                    <div class="text-[14px] text-[--bc-color20] mb-[2px]">
                      Sign Up
                    </div>
                    <div class="text-[16px] text-color font-semibold">
                      {{ summary?.totalBrokerageUserCount }}
                    </div>
                  </div>
                  <div
                    class="flex flex-col items-center justify-center shrink-0 border-[1px] border-dashed border-[--bc-bgColor9] border-radius-0"
                  >
                    <div class="text-[14px] text-[--bc-color20] mb-[2px]">
                      First Deposit
                    </div>
                    <div class="text-[16px] text-color font-semibold">
                      {{ summary?.totalFirstDeposit }}
                    </div>
                  </div>
                  <div
                    class="flex flex-col items-center justify-center shrink-0 border-[1px] border-dashed border-[--bc-bgColor9] border-radius-0"
                  >
                    <div class="text-[14px] text-[--bc-color20] mb-[2px]">
                      Valid bet
                    </div>
                    <div class="text-[16px] text-color font-semibold">
                      <span class="whitespace-pre">{{ toCurrency(summary?.totalBrokerageUserCount) }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="bg-color2 h-[524px] py-[20px] flex-1 shrink-0 border-radius-1">
              <div class="px-[10%] flex flex-col gap-[10px] h-full">
                <div class="bg-color2 border-radius-1 flex-1 shrink-0 flex flex-col items-center justify-center">
                  <div
                    class="flex items-center border border-dashed border-[--bc-bgColor5] border-radius-1 w-full min-h-[100px] max-h-[136px] px-[20px]"
                  >
                    <div
                      class="w-[100px] shrink-0 h-[100px] bg-no-repeat bg-cover bg-center mr-[20px]"
                      style="background-image: url(https://web-res-ccc.afunimg8.com/cdn-cgi/image/format=auto/C02/C0E/referAndEarn/upgrade.png?20241031);"
                    />
                    <div class="flex-1">
                      <div class="text-[15px] font-bold text-color mb-[10px]">
                        Total Rewards
                      </div>
                      <div class="text-[30px] font-bold text-color-linear-20">
                        <span class="whitespace-pre">
                          {{ toCurrency(summary?.withdrawPrice) }}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div
                    class="flex items-center border border-dashed border-[--bc-bgColor5] border-radius-1 w-full min-h-[100px] max-h-[136px] px-[20px] mt-[10px]"
                  >
                    <div
                      class="w-[100px] shrink-0 h-[100px] bg-no-repeat bg-cover bg-center mr-[20px]"
                      style="background-image: url(https://web-res-ccc.afunimg8.com/cdn-cgi/image/format=auto/C02/C0E/referAndEarn/friend.png?20241031);"
                    />
                    <div class="flex-1">
                      <div class="text-[15px] font-bold text-color mb-[10px]">
                        Total Friends
                      </div>
                      <div class="text-[30px] font-bold flex justify-between items-center">
                        <div class="text-color-linear-20">
                          {{ summary?.totalBrokerageUserCount }}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="flex justify-between shrink-0">
                  <div class="text-white font-bold text-[20px]">
                    Uncollected commissions
                  </div>
                  <button
                    class="underline text-[--bc-color20] text-[14px] cursor-pointer hover:text-white"
                    @click="showDetail = true"
                  >
                    Details
                  </button>
                </div>
                <div class="flex-1 grid grid-cols-2 font-normal gap-[10px]">
                  <div
                    class="text-center h-[64px] border-[1px] border-dashed border-[--bc-bgColor9] border-radius-0 flex flex-col items-center justify-center"
                  >
                    <div class="text-[14px] text-[--bc-color20]">
                      Exclusive Commission
                    </div>
                    <div class="text-[16px] text-color mt-[2px]">
                      <span class="whitespace-pre">
                        {{ toCurrency(summary?.brokeragePrice) }}
                      </span>
                    </div>
                  </div>
                </div>
                <div class="text-white font-bold text-center text-[30px] shrink-0 leading-[1]">
                  <span class="whitespace-pre">
                    {{ toCurrency(summary?.brokeragePrice) }}
                  </span>
                </div>
                <button
                  class="shrink-0 text-[14px] border-radius-0 -mt-[6px] text-font bg-active h-[46px] font-bold w-full pointer-events-none cursor-pointer"
                >
                  Claim
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </ClientOnly>
  <BaseModal v-model:show="showDetail" content-class="!rounded-[10px] bg-popup min-w-[700px] max-w-[800px]">
    <template #title>
      <div class="flex justify-between items-center h-[76px] px-[20px] bg-color-pop-16 text-white rounded-[10px]">
        History
      </div>
    </template>
    <div class="h-[max-content] px-[15px] flex flex-col gap-[10px] overflow-hidden mb-[15px]">
      <div class="flex justify-between items-center gap-x-[10px] h-[40px] w-[200px]">
        <BaseDatePicker v-model:date="date" placeholder="Select date" />
      </div>
      <AffiliateTable :time="date" />
    </div>
  </BaseModal>
</template>

<style></style>
