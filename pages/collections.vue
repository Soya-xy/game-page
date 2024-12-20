<script lang="ts" setup>
import type { Game } from '~/api/game/type'
import { ref } from 'vue'
import { getFavoriteGameList, getRecentGameList } from '~/api/game/favorite'

definePageMeta({
  noFooter: true,
})

const list: any = {
  0: 'Favorites',
  1: 'Recent',
}
const route = useRoute()
const title = ref()
const pageSize = 10
const page = ref(1)
const data = ref<Game[]>([])
const loaded = ref(false)
const noData = ref(false)
const count = ref(0)
const totalPages = computed(() => Math.ceil(count.value / pageSize) || 0)
const progressPercentage = computed(() => (((page.value / totalPages.value) || 0) * 100).toFixed(0))
async function loadGames(e?: any) {
  try {
    let res
    if (title.value === 'Favorites') {
      res = await getFavoriteGameList({
        pageNo: page.value,
        pageSize: 10,
      })
    }
    else {
      res = await getRecentGameList({
        pageNo: page.value,
        pageSize: 10,
      })
    }

    count.value = res.total

    if (res.total === 0) {
      e?.complete()
      return noData.value = true
    }

    if (page.value > totalPages.value) {
      page.value = totalPages.value
      return e?.complete()
    }

    if (data.value.length > res.total || !res.list.length) {
      return e?.complete()
    }

    if (res.list) {
      data.value.push(...res.list)
      e?.loaded()
      page.value++
    }
  }
  catch {
    e?.error()
  }
  finally {
    loaded.value = true
  }
}

watch(() => route.query, () => {
  title.value = list[Number(route.query.type)]
  noData.value = false
  loaded.value = false
  data.value = []
  page.value = 1
  loadGames()
}, {
  immediate: true,
  deep: true,
})
</script>

<template>
  <section class="container @container px-[20px]">
    <div class="pb-[20px] h-[76px] md:flex items-center justify-between w-full hidden">
      <div class="flex shrink-0 text-[20px] flex-[3] h-full items-center">
        <i
          class="inline-block h-[max-content] w-[max-content] icon-new-favorites cursor-pointer text-[26px] text-color-linear-05"
        />
        <span class="ml-[8px] mr-[20px] text-white font-bold">{{ title }}</span>
        <span class="text-color font-bold">{{ count }}</span>
      </div>
    </div>

    <div
      class="border-b-[1px] border-solid border-[--bc-bgColor9] flex fixed left-0 top-[48px] w-full z-[20] bg-color2 h-[46px] overflow-x-auto md:hidden"
    >
      <div
        v-for="(item, index) in list" :key="index"
        class="h-full flex-[0_0_auto] md:flex-none w-[50%] px-[4px] flex items-center cursor-pointer justify-center text-xs relative"
        :class="{ 'bg-linear-color-4 text-white font-bold': item === title }" @click="() => {
          routerPush(`/collections?type=${index}`)
        }"
      >
        <div class="flex items-center flex-col gap-x-[2px]">
          <i
            class="inline-block h-[max-content] w-[max-content] cursor-pointer mr-[4px] text-[16px]" :class="{
              'icon-new-favorites': Number(index) === 0,
              'icon-new-recent-useless': Number(index) === 1,
            }"
          />
          {{ item }}
        </div>
      </div>
    </div>

    <div class="grid gap-x-[15px] mt-[55px] md:mt-0 gap-y-[16px] md:grid-cols-7 grid-cols-3 h-full">
      <BaseGameCard v-for="item, idx in data" :key="idx" :info="item" />
    </div>
    <LoadMore v-if="!noData" :load="loadGames" />
    <BaseEmpty v-if="loaded && noData" />

    <div v-if="loaded && data.length > 0" class="mt-[20px] text-center text-[16px] pb-[20px]">
      <div class="shrink-0 flex items-center justify-center flex-col gap-y-[8px]">
        <div class="flex items-center justify-center gap-[10px] text-[12px]">
          <span>{{ page }} / {{ totalPages }}</span>
          <div class="w-[75px] h-[10px] bg-color2 border-radius-0 relative overflow-hidden">
            <p class="border-radius-0 bg-active  h-full" :style="{ width: `${progressPercentage}%` }" />
          </div>
          <span>{{ progressPercentage }}%</span>
        </div>
      </div>
    </div>
  </section>
</template>

<style></style>
