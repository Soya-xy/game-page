<script lang="ts" setup>
import { getGameByTag } from '~/api/home'
import { capitalizeFirstLetter, getRouterHash } from '~/lib/utils'

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
    e?.error()
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
  <div class="md:flex hidden justify-between text-white items-center h-[54px] px-[20px] bg-color2 md:rounded-[10px]">
    {{ title || capitalizeFirstLetter(getRouterHash(hash)) }}
  </div>
  <div
    ref="containerRef"
    class="md:w-[700px] md:h-[max-content] w-full md:max-h-[70vh] px-[15px] md:py-0 py-[15px] flex flex-col mx-auto rounded-[10px] overflow-y-auto h-[calc(100vh-100px)]"
  >
    <div
      class="grid md:grid-cols-5 grid-cols-3 gap-[10px]"
    >
      <div v-for="(item, index) in gameList" :key="index">
        <BaseGameCard :info="item" />
      </div>
    </div>
    <LoadMore :load="loadGames" />
  </div>
</template>

<style></style>
