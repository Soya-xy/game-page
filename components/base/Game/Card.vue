<script lang="ts" setup>
const info = defineProp<{
  rtp: number
  name: string
  src: string
  isHot: boolean
}>(undefined, true)
</script>

<template>
  <div class="flex flex-col w-full" style="row-gap: 8px;">
    <div class="space-y-[10px]">
      <div class="rounded-[10px]">
        <div
          class="h-[0] relative bg-no-repeat bg-cover bg-center rounded-[inherit] game_cursor pb-[133.333333%] bg-linear-12 cursor-pointer"
        >
          <Image
            :src="info.src" alt=""
            class="absolute top-[0] left-[0] rounded-[inherit] w-full h-full object-cover"
          />
          <div class="rounded-[inherit]">
            <div v-if="info.isHot" class="absolute top-0 left-0 right-0 bottom-0 rounded-[inherit]">
              <div
                class="text-white font-bold flex items-center justify-center overflow-hidden relative text-[12px] w-[49px] h-[25px] pb-[6px]"
              >
                <i-svg-game-tag class="absolute -left-[1px] top-0" />
                <span class="relative z-[2]">HOT</span>
              </div>
            </div>
            <div
              class="truncate uppercase font-normal text-white absolute z-[10] hover-gplat left-0 right-0 bottom-[3.96%] text-center"
              style="font-size: min(max(10px, 0.625vw), 12px);"
            >
              {{ info?.name }}
            </div>
          </div>
          <div
            class="game_hover absolute top-[-1px] left-[-1px] right-[-1px] bottom-[-1px] m-auto rounded-[inherit] bg-alpha-black-06 backdrop-blur-[5px] z-[11]"
          >
            <div class="flex justify-between items-center pt-[3.255%] mr-[3.255%] ml-[3.255%]">
              <div class="text-[12px]">
                RTP <span class="text-linear-19">{{ info?.rtp }}%</span>
              </div>
              <BaseTooltip>
                <i
                  class=" text-white rounded-[10px]
                  i-mdi-information-variant-box
                   cursor-pointer text-[25px] info-button hover-text-color-text-0 hover-question-modal relative z-[15]"
                />
                <template #content>
                  <div
                    class="flex bg-color2 shadow-bc2 text-color text-[14px] w-[320px] h-[150px] border-radius-1 p-[10px] flex-col justify-between"
                  >
                    <div class="mt-[6px] w-full flex flex-col gap-[10px]">
                      <div class="flex justify-between items-center h-[30px] px-[10px] w-full bg-color2 rounded-[10px]">
                        <span>RTP:</span><span class="text-color-linear-19">96.55%</span>
                      </div>
                      <div class="flex justify-between items-center h-[30px] px-[10px] w-full bg-color2 rounded-[10px]">
                        <span>Great victory:</span><span>10000X</span>
                      </div>
                    </div>
                    <div
                      class="mt-[24px] text-[12px] w-full h-[20px] flex items-center justify-between gap-[15px] overflow-hidden"
                    >
                      <div class="flex flex-1 items-center gap-[4px] h-full overflow-hidden">
                        <button
                          class="hover:text-white hover:bg-color5 py-0 bg-color4 h-full rounded-[10px] px-[8px] truncate min-w-[37px]"
                        >
                          Easy WinEasy
                        </button>
                      </div>
                      <button class="shrink-0">
                        Tada
                      </button>
                    </div>
                  </div>
                </template>
              </BaseTooltip>
            </div>
            <div
              class="w-[86.33%] min-h-[15.98%] m-[auto] mt-[15%] text-[16px] text-white flex items-end justify-center"
              style="font-size: min(max(10px, 0.83334vw), 16px);"
            >
              <p class="text-center font-bold line-clamp-2 text-ellipsis">
                Money Coming
              </p>
            </div>
            <!-- <div
              class="text-color-text-1 w-full px-[2%] mt-[3.3%] flex items-center justify-center invisible opacity-0 select-none pointer-events-none"
              style="font-size: min(max(8px, 0.625vw), 12px);"
            >
              <i
                class="inline-block h-[max-content] w-[max-content] icon sysicon-new-a-bonus cursor-pointer text-[1.2em] mr-[4px]"
              />
              <p class="truncate">
                Bonus cannot be wagered
              </p>
            </div> -->
            <div
              class="w-[82%] h-[16.4%] m-[auto] mt-[6.1%] rounded-[10px] bg-active flex justify-center items-center cursor-pointer"
            >
              <i
                class="inline-block  i-mdi-play-circle-outline cursor-pointer mr-2 text-font"
                style="font-size: min(max(12px, 1.0417vw), 20px);"
              /><span
                class="text-font font-bold"
                style="font-size: min(max(11px, 0.9375vw), 18px);"
              >Sign Up</span>
            </div>
            <div
              class="truncate uppercase font-normal text-color absolute z-[10] left-0 right-0 bottom-[3.96%] text-center"
              style="font-size: min(max(10px, 0.625vw), 12px);"
            >
              {{ info?.name }}
            </div>
            <span
              class="absolute bottom-0 right-0 mr-[6px] mb-[5px] flex z-[10]"
              style="font-size: min(max(12px, 1.0417vw), 20px);"
            ><i
              class="inline-block i-mdi-heart-outline  text-[18px] cursor-pointer text-color-text-0"
            /></span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>
