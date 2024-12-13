<script lang="ts" setup>
import { ChevronLeft, ChevronRight } from 'lucide-vue-next'
import { getGameByTag, getModuleDataGame } from '~/api/home'

const id = defineProp('')
const type = defineProp('')
const list = defineProp<any[]>([])
const haveMore = defineProp(true)
const title = defineProp('')
const moreFetch = defineProp<(opt: any) => Promise<any[]>>()
const containerRef = ref()
const page = ref(1)
const drawerOpen = ref(false)
const swiper = useSwiper(containerRef, {
  slidesPerView: 3,
  slidesPerGroup: 3,
  spaceBetween: 8,
  breakpoints: {
    320: {
      slidesPerView: 3,
      slidesPerGroup: 3,
    },
    480: {
      slidesPerView: 3,
      spaceBetween: 3,
    },
    640: {
      slidesPerView: 3,
      slidesPerGroup: 3,
    },
    700: {
      slidesPerView: 4,
      slidesPerGroup: 4,
    },
    864: {
      slidesPerView: 5,
      slidesPerGroup: 5,
    },
    1024: {
      slidesPerView: 6,
      slidesPerGroup: 6,
    },
    1280: {
      slidesPerView: 8,
      slidesPerGroup: 8,
    },
  },
})

const data = ref<any>([])

async function fetchGameData(pageNo = 1) {
  if (type.value) {
    const gameList = await getGameByTag(type.value)

    if (gameList)
      return gameList || []
  }

  if (id.value) {
    const gameList = await getModuleDataGame({
      id: id.value,
      pageNo,
      pageSize: 30,
    })

    if (gameList)
      return gameList.list || []
  }

  return []
}

// 加载更多
async function getMoreFetch(opt: any) {
  if (moreFetch.value) {
    return moreFetch.value(opt)
  }

  if (type.value) {
    const { data: gameList } = await getGameByTag(type.value)

    if (gameList.value)
      return gameList.value || []
  }

  if (id.value) {
    const gameList = await getModuleDataGame({
      ...opt,
      id: id.value,
    })
    if (gameList)
      return gameList.list || []
  }

  return []
}
// 初始化数据
onMounted(async () => {
  if (list.value?.length > 0) {
    data.value = list.value
  }
  else {
    data.value = await fetchGameData(page.value)
  }
})

const progress = ref(0)
function next(type: 'up' | 'down') {
  if (type === 'up') {
    swiper.prev()
  }
  else {
    swiper.next()
  }
  progress.value = swiper.instance.value?.progress || 0
}
</script>

<template>
  <div class="w-full">
    <BaseTitle :name="title">
      <template #action>
        <div class="flex items-center gap-2 h-full  ">
          <div
            v-if="haveMore" class="
              h-[32px] px-2 font-bold
              text-sm text-white cursor-pointer
              bg-page rounded-[8px] flex justify-center items-center
            " @click="drawerOpen = true"
          >
            <span>More</span>
            <i class="i-mdi-chevron-right font-bold" />
          </div>
          <div class="flex items-center gap-2">
            <Button
              :disabled="progress === 0" class="bg-page w-[30px] h-[32px] rounded-[8px] hover:bg-page text-white"
              @click="next('up')"
            >
              <ChevronLeft class="h-4 w-4" />
            </Button>
            <Button
              :disabled="progress === 1" class="bg-page w-[30px] h-[32px] rounded-[8px] hover:bg-page text-white"
              @click="next('down')"
            >
              <ChevronRight class="h-4 w-4" />
            </Button>
          </div>
        </div>
      </template>
    </BaseTitle>
    <ClientOnly>
      <swiper-container ref="containerRef" class="w-full flex h-full">
        <swiper-slide v-for="(game, index) in data" :key="index" class="flex-shrink-0">
          <BaseGameCard :key="index" :info="game" />
        </swiper-slide>
      </swiper-container>
    </ClientOnly>
    <BaseModal
      v-model:show="drawerOpen" wap-content-class="h-[100vh] z-[555] p-0" content-class="z-[555] pb-[15px]" overlay-class="z-[550]"
      direction="right"
    >
      <template #title>
        {{ title }}
      </template>
      <BaseGameMore :get-data="getMoreFetch" :title="title" />
    </BaseModal>
  </div>
</template>

<style></style>
