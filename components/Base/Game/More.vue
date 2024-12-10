<script lang="ts" setup>
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

async function loadGames(e?: any) {
  if (isLoading.value)
    return

  try {
    isLoading.value = true
    let data
    if (getData.value) {
      data = await getData.value({ pageNo: page.value, pageSize: 20 })
    }
    else {
      const tag = getRouterHash(hash.value)
      if (tag) {
        data = await getGameByTag(tag)
      }
    }

    if (!data?.length) {
      return e?.complete()
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
    <LoadMore :load="loadGames" />
  </div>
</template>

<style></style>
