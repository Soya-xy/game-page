<script lang="ts" setup>
import VueQrcode from 'vue-qrcode'
import { asyncInstallRecords } from '~/api/install'

const router = useRouter()
const { isPc } = useDevice()
const open = ref<boolean>(false)
const current = ref<string>('Download Google PWA')
const currentList = ref<string[]>(['Download Google PWA', 'Download iOS App'])
function toggleOpen() {
  open.value = !open.value
}
async function download(type: string) {
  switch (type) {
    case 'Android':
      // const { data } = await asyncInstall('Android')
      await asyncInstallRecords('Android')
      break

    default:
      break
  }
}
function pwaInstall() {
  const pwa = useNuxtApp().$pwa

  if (pwa?.showInstallPrompt) {
    pwa.install()
  }
  else {
    throw createError({
      statusCode: 400,
      message: 'Something went wrong installing the application, please try again later or contact support.',
    })
  }
}
</script>

<template>
  <div @click="pwaInstall">
    <div v-if="isPc" id="page-pc" class="min-h-[100vh] flex flex-col overflow-auto">
      <div class="flex overflow-x-hidden">
        <div class="flex-1 overflow-x-hidden">
          <div class="flex justify-center items-center flex-col">
            <div class="relative w-[1600px]">
              <Image
                src="https://web-res-ccc.afunimg8.com/cdn-cgi/image/format=auto/C02/install/bg_pc_1.jpg"
                alt="install" importance="auto" class="w-full !h-auto"
              />
              <div class="absolute w-[160px] h-[160px] top-[445px] left-[814px] p-[5px]">
                <VueQrcode
                  :margin="2" value="https://www.baidu.com" :color="{ dark: '#000000ff', light: '#ffffffff' }" type="image/png"
                  class="w-full h-full"
                />
              </div>
              <div class="cursor-pointer temp-btn-item absolute w-[164px] h-[52px] top-[497px] left-[1000px]" />
              <div
                class="cursor-pointer temp-btn-item absolute w-[164px] h-[52px] top-[497px] left-[1174px]"
                @click="download('Android')"
              />
              <div class="cursor-pointer temp-btn-item absolute w-[338px] h-[52px] top-[559px] left-[1000px]" />
            </div>
          </div>
        </div>
        <div
          class="w-[300px] h-full shrink-0 relative overflow-hidden transition-all duration-300 bg-color-2 z-[100] -ml-[310px]"
        >
          <div
            class="w-[300px] chat-height bg-[--bc-searchColor] fixed z-[250] overflow-hidden max-h-full transition-all duration-300 flex flex-col -right-[310px]"
          >
            <div class="flex-1 flex flex-col overflow-hidden w-full">
              <div class="app-loading back-color-1 !absolute">
                <div class="w-[max-content] h-[max-content] absolute left-0 right-0 top-0 bottom-0 m-auto">
                  <icon-svg name="install" />
                </div>
              </div>
              <div
                class="sticky top-0 z-[20] w-full flex items-center bg-linear-12 text-white shrink-0 !h-[52px] !px-[15px]"
              >
                <div class="flex-1 flex items-center">
                  <div class="text-[18px] font-bold text-white">
                    Chat
                  </div><i
                    class="inline-block h-[max-content] w-[max-content] icon-new-personal cursor-pointer text-[16px] mx-[8px] "
                  /><span
                    class="font-bold text-[16px]"
                  >0</span>
                </div>
                <div class="flex items-center">
                  <div class="live-btn relative px-[15px]" />
                  <div class="chat-help-btn relative mr-[14px]">
                    <button>
                      <i
                        class="inline-block h-[max-content] w-[max-content] icon-new-info-normal hover-text-white cursor-pointer text-[18px] "
                      />
                    </button>
                  </div><i
                    class="inline-block h-[max-content] w-[max-content] icon-new-clean-3 cursor-pointer hover:-rotate-[180deg]  hover-text-white transition-all duration-300 !text-[14px]"
                  />
                </div>
              </div>
              <div
                class="flex flex-col-reverse overflow-x-hidden chat-content-box pb-[20px] modal-flex1-scroll-container w-full relative z-[0]"
              />
              <div class="flex flex-col min-h-[76px] relative p-[10px] pb-[20px] bg-color-4">
                <div class="chat-bottom flex w-full">
                  <div
                    class="chat-content relative items-start rounded-lg bg-color-2 flex flex-1 pl-[16px] overflow-hidden"
                  >
                    <div class="hide-text relative flex-1 overflow-hidden min-h-[46px] py-[16px]">
                      <div
                        class="text-[14px] line-clamp-4 h-[max-content] w-full invisible select-none opacity-0 pointer-events-none break-words"
                      />
                      <textarea
                        id="editorId"
                        class="editorss w-full overflo-hidden block !resize-none bg-transparent text-[14px] absolute left-0 top-[16px] z-[11] text-white"
                        spellcheck="false" placeholder="Write a message..."
                      />
                    </div><i
                      class="inline-block h-[max-content] w-[max-content] icon-new-chat-emoji cursor-pointer p-[8px] py-[14px] text-[24px] "
                      tabindex="-1"
                    />
                  </div>
                  <div
                    class="h-[42px] w-[42px] shrink-0 border-radius-0 flex items-center justify-center bg-[--bc-activeColor] ml-[8px] mt-[2px]"
                  >
                    <i
                      class="inline-block h-[max-content] w-[max-content] icon-new-send cursor-pointer text-[22px] text-[--bc-fontColor]"
                      ix-pos="upright" tabindex="-1"
                    />
                  </div>
                </div>
                <div class="flex w-full mt-[10px] items-center">
                  <div
                    class="select-bg border-radius-0 relative overflow-visible text-[12px] shrink-0 h-[36px] bg-[--bc-bgColor9] z-[10]w-[160px] cursor-pointer"
                  >
                    <div class="h-full flex items-center justify-between px-[10px]">
                      <div class="flex items-center text-white font-medium">
                        <i
                          class="inline-block  w-[max-content] icon-new-lang cursor-pointer text-[20px]  mr-[14px] shrink-0 h-[20px]"
                        /><span>English</span>
                      </div><button class="text-[10px] transition-all duration-200 flex items-center -rotate-[90deg] ">
                        <i class="inline-block h-[max-content] w-[max-content] icon-new-back cursor-pointer" />
                      </button>
                    </div>
                    <ul
                      class="bg-color-4 border-radius-0 w-full absolute z-[15] left-0 top-[0] -translate-y-[100%] transition-all overflow-hidden box-shadow-02 max-h-0"
                    >
                      <li
                        class="flex items-center justify-center px-[15px] relative cursor-pointer bg-[--bc-searchBtnColor] text-white font-bold min-h-[36px]"
                      >
                        <span>English</span><button class="absolute inset-y-0 right-[15px] flex items-center">
                          <i
                            class="inline-block h-[max-content] w-[max-content] icon-new-hook cursor-pointer text-color-main-1"
                          />
                        </button>
                      </li>
                      <li class="flex items-center justify-center px-[15px] relative cursor-pointer min-h-[36px]">
                        <span>Português</span>
                      </li>
                    </ul>
                  </div>
                  <div class="pl-[15px] space-x-[15px] flex items-center">
                    <i
                      class="inline-block h-[max-content] w-[max-content] icon-new-chat-rank cursor-pointer  text-[20px] hover-text-white"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <div class="flex flex-col px-[15px] mb-[15px]">
        <DropdownMenu v-model:open="open" class="!p-0 w-full">
          <DropdownMenuTrigger disabled>
            <div class="relative text-[12px] mt-[15px]">
              <button
                class="absolute right-[-15px] flex justify-center items-center w-[40px] h-[40px]"
                @click="router.back()"
              >
                <i class="inline-block h-[max-content] w-[max-content] icon-new-clean-1 text-white text-[12px]" />
              </button>
              <button
                class="flex items-center gap-x-[10px] px-[20px] h-[40px] bg-[--bc-bgColor9] border-radius-0 text-white text-xs"
                @click="toggleOpen"
              >
                {{ current }} <i
                  class="inline-block h-[max-content] w-[max-content] icon-new-back  transform duration-200 text-[--bc-textColor] transition-all rotate-[-180deg]"
                  :class="{ 'rotate-[-90deg]': open }"
                />
              </button>
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            class="text-color relative w-[calc(100vw-25px)] text-[14px] overflow-hidden border-radius-0 flex flex-col shadow-[0_4px_20px_#00000060] bg-transparent"
          >
            <DropdownMenuItem class="w-full !p-0">
              <ul class="w-full">
                <li
                  v-for="(item, index) in currentList" :key="index"
                  class="h-[47px] flex items-center px-[16px] text-xs"
                  :class="{ 'bg-[--bc-bgColor5] font-[500] text-white': current === item, 'bg-[--bc-bgColor9]': current !== item }"
                  @click="current = item"
                >
                  {{ item }}
                </li>
              </ul>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div v-if="current === currentList[0]">
        <div class="flex flex-col px-[15px] gap-[15px]  page-container overflow-auto">
          <div class="text-[13px] font-medium">
            <h2 class="text-white">
              1.Click the download button to install
            </h2>
            <p class=" mt-[5px]">
              Click "Download" in the image to download the app
            </p>
          </div>
          <div class="flex flex-col items-center">
            <Image
              src="https://web-res-ccc.afunimg8.com/cdn-cgi/image/format=auto/C02/C0E/install/download/android_pwa_1.png?20241104"
              alt="" importance="auto" class="w-[63.77%] mx-auto !h-auto"
            />
            <button
              class="relative w-[57.975%] h-[42px] text-[13px] font-medium bg-[--bc-bgColor9] border-radius-0 mx-auto "
            >
              <span class="flex justify-center items-center absolute z-[1] top-0 left-0 w-full h-full">Download
                Complete!</span>
            </button>
          </div>
          <div class="text-[13px] font-medium">
            <h2 class="text-white">
              2.Or open in Chrome
            </h2>
            <p class=" mt-[5px]">
              If you are using another browser, please open this page in Chrome
            </p>
          </div>
          <Image
            src="https://web-res-ccc.afunimg8.com/cdn-cgi/image/format=auto/C02/install/download/android_pwa_2.png?20240626"
            alt="" importance="auto" class="w-[63.77%] mx-auto !h-auto"
          />
          <div class="text-[13px] font-medium">
            <h2 class="text-white flex items-center">
              3.Click <i
                class="inline-block h-[max-content] w-[max-content] icon sysicon-new-android-more text-[16px] text-color-main-1"
              />
            </h2>
            <p class=" mt-[5px] flex items-center">
              Click in the browser <i
                class="inline-block h-[max-content] w-[max-content] icon sysicon-new-android-more text-[14px] text-color-main-1"
              />
            </p>
          </div>
          <Image
            src="https://web-res-ccc.afunimg8.com/cdn-cgi/image/format=auto/C02/C0E/install/download/android_pwa_3.png?20241104"
            alt="" importance="auto" class="w-[63.77%] mx-auto !h-auto"
          />
          <div class="text-[13px] font-medium">
            <h2 class="text-white">
              4.Click "Install app"
            </h2>
            <p class=" mt-[5px]">
              Click the "Install app" icon in the menu. A dialog box will open.
            </p>
          </div>
          <Image
            src="https://web-res-ccc.afunimg8.com/cdn-cgi/image/format=auto/C02/C0E/install/download/android_pwa_4.png?20241104"
            alt="" importance="auto" class="w-[63.77%] mx-auto !h-auto"
          />
          <div class="h-[20px] w-full" />
        </div>
      </div>
      <div
        v-else-if="current === currentList[1]"
        class="px-[15px] gap-[15px]  page-container flex flex-col overflow-auto"
      >
        <div class="text-[13px] font-medium">
          <h2 class="text-white">
            1.Open in Safari
          </h2>
          <p class=" mt-[5px]">
            If you are using another browser, please open this page in Safari
          </p>
        </div>
        <Image
          src="https://web-res-ccc.afunimg8.com/cdn-cgi/image/format=auto/C02/install/download/ios_app_1.png"
          alt="" importance="auto" class="w-[63.77%] mx-auto !h-auto"
        />
        <div class="text-[13px] font-medium">
          <h2 class="text-white">
            2.Download iOS App
          </h2>
          <p class=" mt-[5px]">
            Click "Download" in the image to download the app
          </p>
        </div>
        <Image
          src="https://web-res-ccc.afunimg8.com/cdn-cgi/image/format=auto/C02/C0E/install/download/ios_app_2.png?20241104"
          alt="" importance="auto" class="w-[63.77%] mx-auto !h-auto"
        /><button
          class="w-[57.975%] h-[42px] text-[13px] font-medium text-[--bc-fontColor] bg-[--bc-activeColor] border-radius-0 mx-auto"
        >
          Download
        </button>
        <div class="text-[13px] font-medium">
          <h2 class="text-white">
            3.Install iOS App
          </h2>
          <p class=" mt-[5px]">
            Step 1: Tap "Setting"
          </p>
          <p class="">
            Step 2: Tap "General"
          </p>
          <p class="">
            Step 3: Tap "Profiles &amp; Device Management"
          </p>
          <p class="">
            Step 4: Select "Lite-APP"
          </p>
          <p class="">
            Step 5: Press "Install"
          </p>
        </div>
        <Image
          src="https://web-res-ccc.afunimg8.com/cdn-cgi/image/format=auto/C02/install/download/ios_app_3.png"
          alt="" importance="auto" class="w-[63.77%] mx-auto !h-auto"
        />
        <div class="h-[20px] w-full" />
      </div>
    </div>
  </div>
</template>
