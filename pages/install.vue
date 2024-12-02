<script lang="ts" setup>
definePageMeta({
  noFooter: true,
})

const { isPc } = useDevice()
const open = ref<boolean>(false)
const current = ref<string>('Download Google PWA')
const currentList = ref<string[]>(['Download Google PWA', 'Download iOS App'])
function toggleOpen() {
  open.value = !open.value
}
</script>

<template>
  <div
    v-if="isPc" id="page-pc" class="min-h-[100vh] flex flex-col overflow-auto"
    style="padding-left: var(--menu-open);"
  >
    <div class="flex overflow-x-hidden">
      <div class="flex-1 overflow-x-hidden">
        <div class="flex justify-center items-center flex flex-col">
          <div class="relative w-[1600px]">
            <img
              src="https://web-res-ccc.afunimg8.com/cdn-cgi/image/format=auto/C02/install/bg_pc_1.jpg"
              alt="install" importance="auto" class="w-full"
            >
            <div class="absolute w-[160px] h-[160px] top-[445px] left-[814px] p-[5px]">
              <image
                src="data:image/png;base64,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"
                alt="" importance="auto" class="w-full h-full"
              />
            </div>
            <div
              class="cursor-pointer temp-btn-item absolute w-[164px] h-[52px] top-[497px] left-[1000px]"
            />
            <div
              class="cursor-pointer temp-btn-item absolute w-[164px] h-[52px] top-[497px] left-[1174px]"
            />
            <div
              class="cursor-pointer temp-btn-item absolute w-[338px] h-[52px] top-[559px] left-[1000px]"
            />
          </div>
        </div><!---->
      </div><!---->
      <div
        class="w-[300px] h-full shrink-0 relative overflow-hidden transition-all duration-300 bg-color-2 z-[100] -ml-[310px]"
      >
        <div
          class="w-[300px] chat-height bg-color-search-1 fixed z-[250 overflow-hidden max-h-full transition-all duration-300 flex flex-col -right-[310px]"
        >
          <div class="flex-1 flex flex-col overflow-hidden w-full">
            <!---->
            <div data-v-4a8f7307="" class="app-loading back-color-1 !absolute">
              <div
                data-v-4ba16216="" data-v-1d666f6a="" data-v-4a8f7307=""
                class="w-[max-content] h-[max-content] absolute left-0 right-0 top-0 bottom-0 m-auto"
              >
                <svg
                  data-v-4ba16216="" width="20px" height="20px" viewBox="0 0 20 20"
                  class="e-loading-10"
                >
                  <circle data-v-4ba16216="" cx="10" cy="10" r="8" stroke-width="3" fill="none" />
                  <circle
                    data-v-4ba16216="" cx="10" cy="10" r="8" stroke-width="3" fill="none"
                    stroke-linecap="round" stroke-dasharray="50.26548245743669"
                    stroke-dashoffset="15.079644737231007"
                  />
                </svg>
              </div>
            </div>
            <div
              class="sticky top-0 z-[20] w-full flex items-center px-[30px] bg-color-linear-12 text-white h-[76px] shrink-0 !h-[52px] !px-[15px]"
            >
              <div class="flex-1 flex items-center">
                <!---->
                <div class="text-[18px] font-bold text-white">
                  Chat
                </div><i
                  class="inline-block h-[max-content] w-[max-content] icon sysicon-new-personal cursor-pointer text-[16px] mx-[8px] text-color-text-2"
                /><span
                  class="text-color-tip-1 font-bold text-[16px]"
                >0</span>
              </div>
              <div class="flex items-center">
                <div class="live-btn relative px-[15px]">
                  <!---->
                </div>
                <div class="chat-help-btn relative mr-[14px]">
                  <button>
                    <i
                      class="inline-block h-[max-content] w-[max-content] icon sysicon-new-info-normal hover-text-white cursor-pointer text-[18px] text-color-text-2"
                    />
                  </button>
                </div><i
                  class="inline-block h-[max-content] w-[max-content] icon sysicon-new-clean-3 cursor-pointer hover:-rotate-[180deg] text-color-text-2 hover-text-white transition-all duration-300 !text-[14px]"
                />
              </div>
            </div><!----><!----><!----><!----><!----><!---->
            <div
              class="flex flex-col-reverse overflow-x-hidden chat-content-box pb-[20px] modal-flex1-scroll-container w-full relative z-[0]"
            />
            <div class="flex flex-col min-h-[76px] relative p-[10px] pb-[20px] bg-color-4">
              <div class="chat-bottom flex w-full">
                <!----><!----><!----><!----><!---->
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
                    class="inline-block h-[max-content] w-[max-content] icon sysicon-new-chat-emoji cursor-pointer p-[8px] py-[14px] text-[24px] text-color-text-2"
                    tabindex="-1"
                  />
                </div>
                <div
                  class="h-[42px] w-[42px] shrink-0 border-radius-0 flex items-center justify-center bg-color-main-1 ml-[8px] mt-[2px]"
                >
                  <i
                    class="inline-block h-[max-content] w-[max-content] icon sysicon-new-send cursor-pointer text-[22px] text-color-btn-4"
                    ix-pos="upright" tabindex="-1"
                  />
                </div>
              </div>
              <div class="flex w-full mt-[10px] items-center">
                <div
                  data-v-87948940=""
                  class="select-bg border-radius-0 relative overflow-visible text-[12px] text-color-text-1 shrink-0 z-10 h-[36px] bg-[--bc-bgColor9] z-10 z-[2] w-[160px] bg-color-alpha-black-02 cursor-pointer"
                >
                  <div class="h-full flex items-center justify-between px-[10px]">
                    <div class="flex items-center text-white font-medium">
                      <i
                        class="inline-block h-[max-content] w-[max-content] icon sysicon-new-lang cursor-pointer text-[20px] text-color-text-1 mr-[14px] shrink-0 h-[20px]"
                      /><span>English</span>
                    </div><button
                      class="text-[10px] transition-all duration-200 flex items-center -rotate-[90deg] text-color-text-2"
                    >
                      <i
                        class="inline-block h-[max-content] w-[max-content] icon sysicon-new-back cursor-pointer"
                      />
                    </button>
                  </div>
                  <ul
                    class="bg-color-4 border-radius-0 w-full absolute z-[15] left-0 top-[0] -translate-y-[100%] transition-all overflow-hidden box-shadow-02 max-h-0"
                  >
                    <li
                      class="flex items-center justify-center px-[15px] relative cursor-pointer bg-color-btn-1 text-white font-bold min-h-[36px]"
                    >
                      <span>English</span><button
                        class="absolute inset-y-0 right-[15px] flex items-center"
                      >
                        <i
                          class="inline-block h-[max-content] w-[max-content] icon sysicon-new-hook cursor-pointer text-color-main-1"
                        />
                      </button>
                    </li>
                    <li
                      class="flex items-center justify-center px-[15px] relative cursor-pointer min-h-[36px]"
                    >
                      <span>Português</span><!---->
                    </li>
                  </ul>
                </div>
                <div class="pl-[15px] space-x-[15px] flex items-center">
                  <!----><!----><i
                    class="inline-block h-[max-content] w-[max-content] icon sysicon-new-chat-rank cursor-pointer text-color-text-2 text-[20px] cursor-pointer hover-text-white"
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
      <DropdownMenu v-model:open="open" class="!p-0 w-full seleBox">
        <DropdownMenuTrigger disabled>
          <div class="relative text-[12px] mt-[15px]" @click="toggleOpen">
            <button class="absolute right-[-15px] flex justify-center items-center w-[40px] h-[40px]">
              <i class="inline-block h-[max-content] w-[max-content] icon-new-clean-1 text-white text-[12px]" />
            </button>
            <button class="flex items-center gap-x-[10px] px-[20px] h-[40px] bg-[--bc-bgColor9] border-radius-0 text-white text-xs">
              {{ current }} <i class="inline-block h-[max-content] w-[max-content] icon-new-back  transform duration-200 text-[--bc-textColor] transition-all rotate-[-180deg]" :class="{ 'rotate-[-90deg]': open }" />
            </button>
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          class="text-color bg-color2  p-0 hover:bg-color2 focus:bg-color2 relative w-[calc(100vw-30px)] text-[14px] overflow-hidden border-radius-0 flex flex-col shadow-[0_4px_20px_#00000060]"
        >
          <DropdownMenuItem class="w-full  !p-0 hover:bg-color2 focus:bg-color2">
            <ul class="w-full">
              <!-- <li class="h-[47px] flex items-center px-[16px] bg-[--bc-bgColor5] text-white font-[500]">
                Download Google PWA
              </li> -->
              <li v-for="(item, index) in currentList" :key="index" class="h-[47px] flex items-center px-[16px] text-xs" :class="{ 'bg-[--bc-bgColor5] font-[500] text-white': current === item }" @click="current = item">
                {{ item }}
              </li>
            </ul>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>

    <div v-if="current === currentList[0]">
      <div class="flex flex-col px-[15px] gap-[15px]  page-container flex flex-col overflow-auto">
        <div class="text-[13px] font-medium">
          <h2 class="text-white">
            1.Click the download button to install
          </h2><p class="text-color-text-1 mt-[5px]">
            Click "Download" in the image to download the app
          </p>
        </div><div class="flex flex-col items-center">
          <Image src="https://web-res-ccc.afunimg8.com/cdn-cgi/image/format=auto/C02/C0E/install/download/android_pwa_1.png?20241104" alt="" importance="auto" class="w-[63.77%] mx-auto !h-auto" />
          <button class="relative w-[57.975%] h-[42px] text-[13px] font-medium bg-[--bc-bgColor9] border-radius-0 mx-auto text-color-text-1">
            <div class="h-full bg-color-main-1 border-radius-0" style="width: 0%;" /><span class="flex justify-center items-center absolute z-[1] top-0 left-0 w-full h-full">Download Complete!</span>
          </button>
        </div><div class="text-[13px] font-medium">
          <h2 class="text-white">
            2.Or open in Chrome
          </h2><p class="text-color-text-1 mt-[5px]">
            If you are using another browser, please open this page in Chrome
          </p>
        </div><img src="https://web-res-ccc.afunimg8.com/cdn-cgi/image/format=auto/C02/install/download/android_pwa_2.png?20240626" alt="" importance="auto" class="w-[63.77%] mx-auto"><div class="text-[13px] font-medium">
          <h2 class="text-white flex items-center">
            3.Click <i class="inline-block h-[max-content] w-[max-content] icon sysicon-new-android-more text-[16px] text-color-main-1" />
          </h2><p class="text-color-text-1 mt-[5px] flex items-center">
            Click in the browser <i class="inline-block h-[max-content] w-[max-content] icon sysicon-new-android-more text-[14px] text-color-main-1" />
          </p>
        </div><img src="https://web-res-ccc.afunimg8.com/cdn-cgi/image/format=auto/C02/C0E/install/download/android_pwa_3.png?20241104" alt="" importance="auto" class="w-[63.77%] mx-auto"><div class="text-[13px] font-medium">
          <h2 class="text-white">
            4.Click "Install app"
          </h2><p class="text-color-text-1 mt-[5px]">
            Click the "Install app" icon in the menu. A dialog box will open.
          </p>
        </div><img src="https://web-res-ccc.afunimg8.com/cdn-cgi/image/format=auto/C02/C0E/install/download/android_pwa_4.png?20241104" alt="" importance="auto" class="w-[63.77%] mx-auto"><div class="h-[20px] w-full" />
      </div>
    </div>
    <div v-else-if="current === currentList[1]" class="flex flex-col px-[15px] gap-[15px] text-white page-container flex flex-col overflow-auto">
      <div class="relative text-[12px] mt-[15px]">
        <button class="absolute right-[-15px] flex justify-center items-center w-[40px] h-[40px]">
          <i class="inline-block h-[max-content] w-[max-content] icon sysicon-new-clean-1 text-color-text-1 text-[12px]" />
        </button><button class="flex items-center gap-x-[10px] px-[20px] h-[40px] bg-color-btn-2 border-radius-0">
          Download iOS App <i class="inline-block h-[max-content] w-[max-content] icon sysicon-new-back text-color-text-1 rotate-[-180deg] transition-all" />
        </button><ul class="w-full text-color-text-1 absolute bottom-[-5px] translate-y-[100%] transition-all bg-color-btn-2 border-radius-0 overflow-hidden max-h-0">
          <li class="h-[47px] flex items-center px-[16px]">
            Save to desktop
          </li><li class="h-[47px] flex items-center px-[16px] bg-color-btn-3 text-white font-[500]">
            Download iOS App
          </li>
        </ul>
      </div><div class="text-[13px] font-medium">
        <h2 class="text-white">
          1.Open in Safari
        </h2><p class="text-color-text-1 mt-[5px]">
          If you are using another browser, please open this page in Safari
        </p>
      </div><img src="https://web-res-ccc.afunimg8.com/cdn-cgi/image/format=auto/C02/install/download/ios_app_1.png" alt="" importance="auto" class="w-[63.77%] mx-auto"><div class="text-[13px] font-medium">
        <h2 class="text-white">
          2.Download iOS App
        </h2><p class="text-color-text-1 mt-[5px]">
          Click "Download" in the image to download the app
        </p>
      </div><img src="https://web-res-ccc.afunimg8.com/cdn-cgi/image/format=auto/C02/C0E/install/download/ios_app_2.png?20241104" alt="" importance="auto" class="w-[63.77%] mx-auto"><button class="w-[57.975%] h-[42px] text-[13px] font-medium text-color-btn-4 bg-color-main-1 border-radius-0 mx-auto">
        Download
      </button><div class="text-[13px] font-medium">
        <h2 class="text-white">
          3.Install iOS App
        </h2><p class="text-color-text-1 mt-[5px]">
          Step 1: Tap "Setting"
        </p><p class="text-color-text-1">
          Step 2: Tap "General"
        </p><p class="text-color-text-1">
          Step 3: Tap "Profiles &amp; Device Management"
        </p><p class="text-color-text-1">
          Step 4: Select "Lite-APP"
        </p><p class="text-color-text-1">
          Step 5: Press "Install"
        </p>
      </div><img src="https://web-res-ccc.afunimg8.com/cdn-cgi/image/format=auto/C02/install/download/ios_app_3.png" alt="" importance="auto" class="w-[63.77%] mx-auto"><div class="h-[20px] w-full" />
    </div>
  </div>
</template>
