<script lang="ts" setup>
import type { Game } from '~/api/game/type'
import type { PageData } from '~/api/type'
import { faviconGameCount, faviconGameUrl } from '~/api/game/favorite'

const list: any = {
  0: 'Favorites',
  1: 'Recent',
}
const route = useRoute()
const title = ref(list[Number(route.query.type)])

const { data: count } = useAPI(faviconGameCount)
const { data } = useAPI<PageData<Game>>(faviconGameUrl)
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
    <div class="grid gap-x-[15px] gap-y-[16px] md:grid-cols-7 grid-cols-3 h-full">
      <BaseGameCard
        v-for="item, idx in data?.list" :key="idx" :info="item"
      />
    </div>
    <div class="mt-[20px] text-center text-[16px]">
      <div class="shrink-0 flex items-center justify-center flex-col gap-y-[8px]">
        <div class="flex items-center justify-center gap-[10px] text-[12px]">
          <span>3 / 3</span>
          <div class="w-[75px] h-[10px] bg-color2 border-radius-0 relative overflow-hidden">
            <p class="border-radius-0 bg-active  h-full" style="width: 50%;" />
          </div>
          <span>100%</span>
        </div>
      </div>
    </div>
  </section>
</template>

<style></style>
