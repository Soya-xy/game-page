<script lang="ts" setup>
import { ref } from 'vue'

const open = ref<boolean>(false)
const mobileOpen = ref<boolean>(false)
const { isPc } = useDevice()
const userStore = useUserStore()
const { userInfo } = storeToRefs(userStore)
const showBonus = ref<boolean>(false)
function toggleOpen() {
  if (isPc.value) {
    open.value = !open.value
  }
  else {
    mobileOpen.value = !mobileOpen.value
  }
}
</script>

<template>
  <div class="flex items-center border-radius-0 bg-button cursor-pointer relative">
    <div class="flex items-center text-[14px] h-[34px] md:h-[40px] font-bold text-white mx-[10px]">
      <Image
        src="https://web-res-ccc.afunimg8.com/cdn-cgi/image/format=auto/dev_skin/C02/wallet/currency/BRL.png"
        importance="auto" class=" shrink-0 w-[24px] !h-[24px]"
      />
      <div class="mr-[12px] ml-[6px]">
        <span class="whitespace-pre">{{ toCurrency(userInfo?.balance) }}</span>
        <div class="text-[12px] text-color">
          <span class="whitespace-pre font-[400]">{{ toCurrency(userInfo?.giveAmountPoint) }}</span>
        </div>
      </div>
      <DropdownMenu v-model:open="open" class="!p-0">
        <DropdownMenuTrigger disabled>
          <button
            class="hover:bg-[--bc-bgColor7]  hover:text-white p-[2px] rounded-[4px] transition-all duration-300 text-[0px] text-icon"
            :class="{
              'rotate-[90deg]': !open,
              'rotate-[270deg]': open,
            }" @click="toggleOpen"
          >
            <i class="inline-block h-[max-content] w-[max-content] icon-new-arrow cursor-pointer text-[16px]" />
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          align="center"
          class="text-color bg-color2  p-0 hover:bg-color2  relative text-[14px] overflow-hidden border-radius-0 pt-[10px] min-w-[220px] flex flex-col shadow-[0_4px_20px_#00000060] w-[380px]"
        >
          <DropdownMenuItem class="w-full !p-0 hover:bg-color2 ">
            <div
              class="relative z-[352] w-full shadow-[0_4px_20px_#00000060] h-[max-content] flex flex-col max-h-[550px] border-radius-1 overflow-hidden py-[20px]"
            >
              <div class="px-[13px] flex-1 flex flex-col overflow-y-auto overscroll-contain">
                <div class="shrink-0 text-white text-[14px] font-semibold">
                  <div class="mt-[20px] mb-[14px] text-color">
                    Fiat
                  </div>
                  <div
                    class="min-h-[60px] max-h-[70px] p-[10px] flex justify-between items-center border-radius-0 cursor-pointer bg-color6"
                  >
                    <div class="flex items-center gap-x-[10px]">
                      <Image
                        src="https://web-res-ccc.afunimg8.com/cdn-cgi/image/format=auto/dev_skin/C02/wallet/currency/BRL.png"
                        importance="auto" class="shrink-0 w-[24px] !h-[24px]"
                      />
                      <div class="text-[16px]">
                        BRL
                      </div>
                    </div>
                    <div class="flex flex-col items-end">
                      <div class="ml-[10px]">
                        <div class="flex items-center justify-end">
                          <div class="text-color mr-[10px]">
                            Cash
                          </div>
                          <span class="whitespace-pre">{{ toCurrency(userInfo?.balance) }}</span>
                        </div>
                        <div class="flex items-center justify-end mt-[12px]">
                          <div class="flex items-center px-[4px]">
                            <i
                              class="inline-block h-[max-content] w-[max-content] icon-new-wenhao cursor-pointer text-[--bc-color20]"
                              @click="showBonus = true"
                            />
                          </div>
                          <div class="text-color mr-[10px]">
                            Bonus
                          </div>
                          <span class="whitespace-pre">{{ toCurrency(userInfo?.giveAmountPoint) }}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
    <div
      class="hidden md:flex items-center px-[12px] h-[32px] mr-[6px] relative font-bold rounded-[8px] hover:brightness-105 shadow-[inset_0_-2px_var(--bc-activeColor)] bg-button-linear"
    >
      <span class="text-[13px] font-extrabold">Deposit</span>
    </div>
    <div
      class="flex md:hidden relative h-[28px] w-[28px] mx-[4px] shrink-0 items-center justify-center text-font rounded-[6px] bg-linear-color-1"
    >
      <i class="inline-block h-[max-content] w-[max-content] icon-new-clean-3 rotate-45 text-[9px]" />
    </div>
  </div>
  <div
    class="md:w-[50px] w-[44px] h-[34px] md:h-[40px] flex items-center justify-center shadow-[inset_0_-1.176px_#edea8740,inset_0_1.176px_1.176px_#ffde306e] relative rounded-[6px] cursor-pointer bg-chest"
    @click="routerPush('/bonus')"
  >
    <div
      class="rounded-full text-[11px] bg-[--bc-activeColor2] shrink-0 text-font flex items-center justify-center font-bold px-[2px] min-w-[16px] h-[14px] text-[11px] absolute -right-[4px] top-0"
    >
      3
    </div>
    <Image src="https://web-res-ccc.afunimg8.com/C02/_E/home/bonus.gif" importance="auto" class="w-[28px] !h-[28px]" />
  </div>
  <!-- 手机端弹窗 -->
  <BaseDrawer v-model:open="mobileOpen" content-class="z-[555]" overlay-class="z-[550]" header-class="bg-transparent">
    <template #title>
      Wallet
    </template>
    <div
      class="relative pb-[15px] z-[352] w-full h-[max-content] flex flex-col max-h-[550px] border-radius-1 overflow-hidden"
    >
      <div class="flex-1 flex flex-col overflow-y-auto overscroll-contain">
        <div class="shrink-0 text-white text-[14px] font-semibold">
          <div class="mt-[20px] mb-[14px] text-color">
            Fiat
          </div>
          <div
            class="min-h-[60px] max-h-[70px] p-[10px] flex justify-between items-center border-radius-0 cursor-pointer bg-color6"
          >
            <div class="flex items-center gap-x-[10px]">
              <Image
                src="https://web-res-ccc.afunimg8.com/cdn-cgi/image/format=auto/dev_skin/C02/wallet/currency/BRL.png"
                importance="auto" class="shrink-0 w-[24px] !h-[24px]"
              />
              <div class="text-[16px]">
                BRL
              </div>
            </div>
            <div class="flex flex-col items-end">
              <div class="ml-[10px]">
                <div class="flex items-center justify-end">
                  <div class="text-color mr-[10px]">
                    Cash
                  </div>
                  <span class="whitespace-pre">R$0.07</span>
                </div>
                <div class="flex items-center justify-end mt-[12px]">
                  <div class="flex items-center px-[4px]">
                    <i
                      class="inline-block h-[max-content] w-[max-content] icon-new-wenhao cursor-pointer text-[--bc-color20]"
                    />
                  </div>
                  <div class="text-color mr-[10px]">
                    Bonus
                  </div>
                  <span class="whitespace-pre">R$0.00</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </BaseDrawer>
  <BaseModal v-model:show="showBonus" content-class="mx-auto min-w-[444px] w-[500px] max-w-[1414px] px-32px">
    <template #title>
      <div class="flex justify-between items-center h-[54px] px-[20px] bg-color2">
        Wallet
      </div>
    </template>
    <WalletRule />
  </BaseModal>
</template>
