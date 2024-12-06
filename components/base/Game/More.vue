<script lang="ts" setup>
import { useInfiniteScroll } from '@vueuse/core'

const getData = defineProp<any>(undefined, true)

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
    const data = await getData.value({ pageNo: page.value, pageSize: 20 })

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
onMounted(() => {
  loadGames()
})
</script>

<template>
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
