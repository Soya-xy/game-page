<script lang="ts" setup>
import type { Game } from '~/api/game/type'
import { faviconGameCount, getFavoriteGameList } from '~/api/game/favorite'

definePageMeta({
  noFooter: true,
})

const list: any = {
  0: 'Favorites',
  1: 'Recent',
}
const route = useRoute()
const title = ref(list[Number(route.query.type)])
const pageSize = 10
const page = ref(1)
const data = ref<Game[]>([])
const { data: count } = useAPI<number>(faviconGameCount)

const totalPages = computed(() => Math.ceil(count.value / pageSize))
const progressPercentage = computed(() => ((page.value / totalPages.value) * 100).toFixed(0))

async function loadGames(e: any) {
  if (page.value > totalPages.value) {
    page.value = totalPages.value
    return e?.complete()
  }

  try {
    const res = await getFavoriteGameList({
      pageNo: page.value,
      pageSize: 10,
    })

    if (data.value.length > res.total || !res.list.length) {
      return e?.complete()
    }

    if (res.list) {
      data.value.push(...res.list)
      e.loaded()
      page.value++
    }
  }
  catch {
    e.error()
  }
}
</script>

<template>
  <section class="container @container px-[20px]">
    <div class="pb-[20px] h-[106px] flex items-center justify-between w-full">
      <div class="flex shrink-0 text-[20px] flex-[3] h-full items-center">
        <i
          class="inline-block h-[max-content] w-[max-content] icon-new-favorites cursor-pointer text-[26px] text-color-linear-05"
        />
        <span class="ml-[8px] mr-[20px] text-white font-bold">{{ title }}</span>
        <span class="text-color font-bold">{{ count }}</span>
      </div>
    </div>

    <template v-if="count > 0">
      <div class="grid gap-x-[15px] gap-y-[16px] md:grid-cols-7 grid-cols-3 h-full">
        <BaseGameCard v-for="item, idx in data" :key="idx" :info="item" />
      </div>
      <LoadMore :load="loadGames" />
    </template>
    <BaseEmpty v-else />
    <div class="mt-[20px] text-center text-[16px] pb-[20px]">
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
