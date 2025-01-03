<script lang="ts" setup>
import type { Game } from '~/api/game/type'
import { ref } from 'vue'
import { addFavorite, removeFavorite } from '~/api/game'
import { useToast } from '~/components/ui/toast'

const info = defineProp<Game>(undefined, true)
const favorite = defineEmit<[value: boolean]>()
const { isPc } = useDevice()
const userStore = useUserStore()
const { token } = storeToRefs(userStore)
const { toast } = useToast()
const isOpen = ref<boolean>(false)
function openGame() {
  if (!isPc.value) {
    isOpen.value = true
  }
}

function handleFavorite(item: Game) {
  if (item.favorite) {
    removeFavorite(item.id)
  }
  else {
    addFavorite(item.id)
  }

  favorite(item.favorite)

  item.favorite = !item.favorite
  toast({
    title: item.favorite ? 'Bookmarked' : 'UnBookmarked!',
    class: 'my-toast bg-green',
    duration: 1000,
  })
}
</script>

<template>
  <div class="flex flex-col w-full" style="row-gap: 8px;">
    <div class="space-y-[10px]">
      <div class="rounded-[10px]">
        <div
          class="h-[0] relative bg-no-repeat bg-cover bg-center rounded-[inherit] game_cursor pb-[133.333333%] bg-linear-12 cursor-pointer"
          @click="openGame"
        >
          <Image :src="info.picUrl" class="absolute top-[0] left-[0] rounded-[inherit] w-full h-full object-cover" />
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
              class="truncate uppercase font-normal text-white absolute z-[10] left-0 right-0 bottom-[3.96%] text-center"
              style="font-size: min(max(10px, 0.625vw), 12px);"
            >
              {{ info?.brandName }}
            </div>
          </div>
          <div
            class="game_hover hidden sm:block absolute top-[-1px] left-[-1px] right-[-1px] bottom-[-1px] m-auto rounded-[inherit] bg-alpha-black-06 backdrop-blur-[5px] z-[11]"
          >
            <div class="flex justify-between items-center pt-[3.255%] mr-[3.255%] ml-[3.255%]">
              <div class="text-[12px]">
                RTP <span class="text-linear-19">{{ info?.rtp }}%</span>
              </div>
              <BaseTooltip content-class="!z-[550]">
                <i
                  class="inline-block h-[max-content] w-[max-content] icon-new-info-normal cursor-pointer text-[20px] text-white hover:white relative z-[15]"
                />
                <template #content>
                  <div
                    class="flex bg-color2 shadow-bc2 text-color text-[14px] w-[320px] h-[150px] rounded-[10px] p-[10px] flex-col justify-between"
                  >
                    <div class="mt-[6px] w-full flex flex-col gap-[10px]">
                      <div class="flex justify-between items-center h-[30px] px-[10px] w-full bg-color2 rounded-[10px]">
                        <span>Great victory:</span><span>{{ info?.greatVictory || 0 }}X</span>
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
                        {{ info.brandName }}
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
                {{ info.gameMaintain ? 'Money Coming' : info?.name }}
              </p>
            </div>
            <div
              class="text-color w-full px-[2%] mt-[3.3%] flex items-center justify-center  select-none pointer-events-none"
              style="font-size: min(max(8px, 0.625vw), 12px);"
            >
              <i
                class="inline-block h-[max-content] w-[max-content] icon-new-a-bonus cursor-pointer text-[1.2em] mr-[4px]"
              />
              <p class="truncate">
                Bonus cannot be wagered
              </p>
            </div>
            <!-- 注册和试玩按钮 -->
            <div
              class="w-[82%] h-[16.4%] m-[auto] mt-[6.1%] rounded-[10px] bg-active flex justify-center items-center cursor-pointer"
            >
              <i
                class="inline-block  i-mdi-play-circle-outline cursor-pointer mr-2 text-font"
                style="font-size: min(max(12px, 1.0417vw), 20px);"
              />
              <span
                v-if="!token" class="text-font font-bold" style="font-size: min(max(11px, 0.9375vw), 18px);"
                @click.stop="routerPush('/login')"
              >Sign In</span>
              <span
                v-else class="text-font font-bold" style="font-size: min(max(11px, 0.9375vw), 18px);"
                @click.stop="routerPush(`/game/${info.id}`)"
              >Play</span>
            </div>

            <div
              class="truncate uppercase font-normal text-color absolute z-[10] left-0 right-0 bottom-[3.96%] text-center"
              style="font-size: min(max(10px, 0.625vw), 12px);"
            >
              {{ info.brandName }}
            </div>
            <span
              class="absolute bottom-0 right-0 mr-[6px] mb-[5px] flex z-[10]"
              style="font-size: min(max(12px, 1.0417vw), 20px);"
            ><i
              class="inline-block i-mdi-heart-outline  text-[18px] cursor-pointer text-color"
              :class="{ '!text-[--bc-textColor3] !i-mdi-heart': info.favorite }"
              @click="handleFavorite(info)"
            /></span>
          </div>
        </div>
      </div>
      <!-- 手机端弹窗 -->
      <BaseDrawer v-model:open="isOpen" content-class="z-[555]" overlay-class="z-[550]" header-class="bg-transparent">
        <template #title>
          Game Details
        </template>
        <div class="flex flex-col gap-y-[12px]">
          <div class="bg-color2 rounded-[10px] p-[12px] shrink-0 flex flex-col gap-y-[8px]">
            <div class="flex gap-x-[8px] text-[12px]">
              <div class="rounded-[10px] w-[34.37%] shrink-0">
                <div
                  class="h-[0] relative bg-no-repeat bg-cover bg-center rounded-[inherit] pb-[133.333333%] bg-linear-12"
                >
                  <Image
                    :src="info.picUrl" class="absolute top-[0] left-[0] w-full h-full rounded-[inherit]"
                    style="width: 100%; height: 100%; background-image: unset;"
                  />
                  <div class="rounded-[inherit]">
                    <div class="absolute top-0 left-0 right-0 bottom-0 rounded-[inherit]">
                      <i
                        class="inline-block h-[max-content] w-[max-content] icon-new-a-bonus text-white text-[16px] absolute top-[4px] right-[4px]"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div class="flex flex-col justify-between flex-1">
                <div class="flex-1 flex flex-col">
                  <div class="flex justify-between gap-x-[10px] text-white">
                    <div class="flex-1">
                      <div class="text-[--bc-color20] mt-[4px] text-[14px] font-bold">
                        {{ info.name }}
                      </div>
                    </div>
                    <span class="text-[20px] shrink-0">
                      <i
                        class="inline-block h-[max-content] w-[max-content] icon-new-favorites-soild"
                        @click="handleFavorite(info)"
                      />
                    </span>
                  </div>
                  <div class="text-linearColor font-[500] text-color mt-[4px]">
                    {{ info.brandName }}
                  </div>
                  <div class="text-linearColor font-[500] mt-[4px]">
                    RTP: {{ info.rtp }}%
                  </div>
                </div>
              </div>
            </div>
            <div
              class="flex items-center gap-[8px] font-extrabold" @click="() => {
                isOpen = false
                routerPush(`/game/${info.name}`)
              }"
            >
              <span
                class="flex-1 h-[40px] main-color-btn rounded flex items-center justify-center gap-x-[4px] text-font text-[14px]"
              ><i
                 class="inline-block h-[max-content] w-[max-content] icon-new-play-demo text-[20px]"
               />
                <span>Play</span>
              </span>
            </div>
          </div>
          <BaseGameList type="hot" :have-more="false" />
          <BaseGameList type="hot" :have-more="false" />
        </div>
      </BaseDrawer>
    </div>
  </div>
</template>

<style></style>
