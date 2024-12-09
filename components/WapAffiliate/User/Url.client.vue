<script lang="ts" setup>
import { useClipboard } from '@vueuse/core'
import VueQrcode from 'vue-qrcode'
import { useToast } from '~/components/ui/toast'

const { copy } = useClipboard()
const { toast } = useToast()
function copyUrl(str: string) {
  copy(str)
  toast({
    description: 'Copied to clipboard',
    duration: 2000,
    class: 'my-toast',
  })
}
</script>

<template>
  <div
    class="p-[15px] bg-color-4 border-radius-0 !bg-[length:100%_auto] !bg-no-repeat !bg-bottom"
    style="background-image: url(https://web-res-ccc.afunimg8.com/cdn-cgi/image/format=auto/C02/C0E/referAndEarn/share_bg.jpg?20241031);"
  >
    <div class="flex">
      <div
        class="w-[76px] h-[72px] bg-no-repeat bg-cover bg-center shrink-0 mr-[10px]"
        style="background-image: url(https://web-res-ccc.afunimg8.com/cdn-cgi/image/format=auto/C02/referAndEarn/trumpet.png);"
      />
      <div class="flex-1">
        <div class="text-white font-semibold text-[14px] mb-[5px] uppercase">
          INVITE FRIENDS TO EARN
        </div>
        <div class="text-color-linear-20 font-black text-[18px] whitespace-pre-wrap">
          70%Commission
        </div>
      </div>
    </div>
    <div>
      <div class="text-white text-[14px] font-semibold mt-[10px] mb-[6px]">
        Invite via:
      </div>
      <div class="flex">
        <div class="w-[86px] h-[86px] p-[3px] bg-[#FFF]">
          <VueQrcode
            :margin="2" value="https://www.1stg.me" :color="{ dark: '#000000ff', light: '#ffffffff' }"
            type="image/png"
          />
        </div>
        <div class="flex-1 ml-[6px] min-w-[100px]">
          <div class="mb-[6px]">
            <div
              class="field-container w-full border-radius-0 flex items-center shrink-0 border-[--bc-bgColor5] border border-solid relative h-[40px] pl-[10px] pr-[14px] text-[12px] gap-[12px]  bg-[--bc-searchColor]"
            >
              <div class="text-color w-[3em]">
                Link
              </div>
              <div class="h-full flex items-center flex-1 shrink-0 relative overflow-hidden">
                <input class="h-full flex-1 min-w-[60px] bg-transparent text-white placeholder:font-normal">
              </div>
              <button
                class="bg-active text-font font-bold text-[12px] rounded-[3px] h-[30px] px-[8px]"
                @click="copyUrl('url')"
              >
                Copy
              </button>
            </div>
          </div>
          <div>
            <div
              class="field-container w-full border-radius-0 flex items-center shrink-0 border-[--bc-bgColor5] border border-solid relative h-[40px] pl-[10px] pr-[14px] text-[12px] gap-[12px] bg-[--bc-searchColor]"
            >
              <div class="text-color w-[3em]">
                Code
              </div>
              <div class="h-full flex items-center flex-1 shrink-0 relative overflow-hidden">
                <input class="h-full flex-1 min-w-[60px] bg-transparent text-white placeholder:font-normal">
              </div>
              <button
                class="bg-active text-font font-bold text-[12px] rounded-[3px] h-[30px] px-[8px]"
                @click="copyUrl('code')"
              >
                Copy
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="mt-[10px]">
        <div class="flex items-center">
          <div class="h-[1px] flex-1 bg-color-btn-2" />
          <div class="mx-[10px] text-color text-[14px]">
            OR
          </div>
          <div class="h-[1px] flex-1 bg-color-btn-2" />
        </div>
        <div class="flex items-center pt-[6px] justify-around">
          <Image
            src="https://web-res-ccc.afunimg8.com/cdn-cgi/image/format=auto/C02/share/facebook.png?20240416" alt=""
            importance="auto" class="!h-[40px]"
          />
          <Image
            src="https://web-res-ccc.afunimg8.com/cdn-cgi/image/format=auto/C02/share/telegram.png?20240416" alt=""
            importance="auto" class="!h-[40px]"
          />
          <Image
            src="https://web-res-ccc.afunimg8.com/cdn-cgi/image/format=auto/C02/share/whatsapp.png?20240416" alt=""
            importance="auto" class="!h-[40px]"
          />
          <Image
            src="https://web-res-ccc.afunimg8.com/cdn-cgi/image/format=auto/C02/share/bulesky.png" alt=""
            importance="auto" class="!h-[40px]"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>
