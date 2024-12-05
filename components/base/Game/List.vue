<script lang="ts" setup>
import { ChevronLeft, ChevronRight } from 'lucide-vue-next'
import { asyncHotGameData, asyncModuleData } from '~/api/home'

const id = defineProp('')
const type = defineProp('')
const list = defineProp<any[]>([])

const haveMore = defineProp(true)

const title = defineProp('')
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

const data = ref<any[]>([])

async function fetchGameData(pageNo = 1) {
  if (type.value) {
    const { data: gameList } = await asyncHotGameData()
    if (gameList.value)
      return gameList.value.list || []
  }

  if (id.value) {
    const { data: gameList } = await asyncModuleData({
      id: id.value,
      pageNo,
      pageSize: 30,
    })
    if (gameList.value)
      return gameList.value.list || []
  }

  return []
}

// 加载更多
async function moreFetch(opt: any) {
  if (type.value) {
    const { data: gameList } = await asyncHotGameData()
    if (gameList.value)
      return gameList.value.list || []
  }

  if (id.value) {
    const { data: gameList } = await asyncModuleData({
      ...opt,
      id: id.value,
    })
    if (gameList.value)
      return gameList.value.list || []
  }

  return []
}
// 初始化数据
onMounted(async () => {
  if (list.value.length > 0) {
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
              text-sm text-primary cursor-pointer
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
    <BaseModal v-model:show="drawerOpen">
      <template #title>
        <div class="flex justify-between items-center h-[54px] px-[20px] bg-color2">
          {{ title }}
        </div>
      </template>
      <BaseGameMore :get-data="moreFetch" />
    </BaseModal>
  </div>
</template>

<style></style>
