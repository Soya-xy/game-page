<script lang="ts" setup>
import { useInfiniteScroll } from '@vueuse/core'
import { getGameByTag } from '~/api/home'
import { getRouterHash } from '~/lib/utils'

const title = defineProp<string>('')
const hash = defineProp<string>('')
const getData = defineProp<any>(undefined)
// const route = useRoute()
const containerRef = ref<HTMLElement | null>(null)
const page = ref(1)
const gameList = ref<any[]>([])
const isLoading = ref(false)
const hasMore = ref(true)

async function loadGames() {
  if (isLoading.value || !hasMore.value)
    return

  try {
    isLoading.value = true
    let data
    if (getData.value) {
      data = await getData.value({ pageNo: page.value, pageSize: 20 })
      console.log('🚀 ~ loadGames ~ data:', data)
    }
    else {
      const tag = getRouterHash(hash.value)
      if (tag) {
        data = await getGameByTag(tag)
      }
    }

    // 如果没有数据返回，表示已经加载完所有数据
    if (!data?.length) {
      hasMore.value = false
      return
    }

    gameList.value = [...gameList.value, ...data]
    page.value++
  }
  catch (error) {
    console.error('Failed to load games:', error)
  }
  finally {
    isLoading.value = false
  }
}

useInfiniteScroll(
  containerRef,
  loadGames,
  {
    distance: 50, // 距离底部50px时触发
    throttle: 300, // 节流，避免频繁触发
  },
)
// 初始加载
onMounted(async () => {
  loadGames()
})
</script>

<template>
  <div class="flex justify-between items-center h-[54px] px-[20px] bg-color2">
    {{ title }}
  </div>
  <div
    ref="containerRef"
    class="w-[700px] h-[90vh] max-h-[70vh] px-[15px] flex flex-col m-auto rounded-[10px]  overflow-y-auto"
  >
    <div
      class="grid grid-cols-5 gap-[10px]"
    >
      <div v-for="(item, index) in gameList" :key="index">
        <BaseGameCard :info="item" />
      </div>
    </div>
    <!-- 加载状态和无更多数据提示 -->
    <div v-if="isLoading || !hasMore" class="text-center py-4 text-sm text-gray-500">
      <div v-if="isLoading" class="flex justify-center items-center">
        <div class="spin " />
      </div>

      <p v-else-if="!hasMore">
        没有更多数据了
      </p>
    </div>
  </div>
</template>

<style></style>
