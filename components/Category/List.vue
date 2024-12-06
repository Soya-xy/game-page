<script lang="ts" setup>
import type { CategoryListDetailResponse } from '~/api/category/type'
import type { Option } from '~/api/type'
import { cn } from '@/lib/utils'
import { ref } from 'vue'
import { asyncCategoryList, asyncCategoryListDetail, getCategoryListDetailGame } from '~/api/category'

const { data } = await asyncCategoryList()
const { makeTree } = useTree({
  id: 'id',
  pid: 'parentId',
  children: 'children',
})
const loadGameing = ref(false)

const tree = makeTree(data.value!)

const activeIndex = ref(0)
const list = ref<any[]>([])
const option = ref([
  {
    value: 'Popular',
    label: 'Popular',
  },
  {
    value: 'A-Z',
    label: 'A-Z',
  },
  {
    value: 'Z-A',
    label: 'Z-A',
  },
  {
    value: 'New',
    label: 'New',
  },
])
const providerList = ref<Option[]>([])
const loading = ref(false)
const page = ref(1)
const value = ref('Popular')
const providerValue = ref<string[]>([])

const type = ref<'game' | 'gameList' | 'provider'>()

watch(activeIndex, async () => {
  list.value = []
  page.value = 1

  loading.value = true
  await loadGames()

  loading.value = false
}, {
  immediate: true,
})

async function loadGames() {
  const nowItem = tree[activeIndex.value]

  const itemList = nowItem.children.length > 0
    ? nowItem.children
    : [nowItem]

  loadGameing.value = true

  await Promise.all(itemList.map(async (item: any) => {
    const { data: gameList } = await asyncCategoryListDetail({
      id: item.id,
      pageNo: page.value,
      pageSize: 20,
    })
    page.value++

    const data = gameList.value?.providerList
      ? gameList.value.providerList
      : gameList.value?.gamesRespVO || []

    type.value = gameList.value?.providerList ? 'provider' : (nowItem.children.length > 0 ? 'gameList' : 'game')
    loadGameing.value = false
    const gameResult = (data as CategoryListDetailResponse).pageResult?.list
    // 游戏卡牌
    if (gameResult?.length <= 0 || !gameResult) {
      return
    }

    if (type.value === 'game') {
      list.value = [...list.value, ...gameResult]
    }
    else {
      list.value.push({
        name: item.name,
        id: item.id,
        data: gameResult,
        type: type.value,
      })
    }

    // 游戏提供商
    if ((data as CategoryListDetailResponse).providerData?.length <= 0) {
      return
    }

    providerList.value = (data as CategoryListDetailResponse).providerData?.map(v => ({
      value: v.id,
      label: v.name,
      picUrl: v.picUrl,
      count: v.count,
    }))
  }))
}

async function getMore(id: number, opt: any) {
  const gameList = await getCategoryListDetailGame({ id, ...opt })
  return gameList.providerList
    ? gameList.providerList
    : gameList.gamesRespVO?.pageResult?.list || []
}

function changeHandler(e: string[]) {
  providerValue.value = e
}

const target = ref<HTMLElement>()
useIntersectionObserver(
  target,
  ([entry]) => {
    if (entry?.isIntersecting) {
      loadGames()
    }
  },
)
</script>

<template>
  <HScroll>
    <button
      v-for="(item, index) in tree" :key="item.id" :class="cn(
        `group px-[10px] h-[40px] border-[1px] border-solid rounded-[6px]
          border-transparent`,
        `flex items-center justify-center`,
        `font-semibold text-[13px] text-[--bc-color20]`,
        `hover:bg-color2 hover:text-white`,
        activeIndex === index ? 'bg-color2 text-white' : '',
      )" @click="activeIndex = index"
    >
      <i
        class="inline-block h-[max-content] w-[max-content] cursor-pointer text-[16px] mr-[8px] text-icon group-hover:text-white"
        :class="item.picUrl.replaceAll('sysicon-', 'icon-')"
      />
      <div class="font-bold text-nowrap">
        {{ item.name }}
      </div>
    </button>
  </HScroll>
  <div v-if="list.length === 1" class="flex items-center gap-2">
    <FilterSelect v-model="value" :option="option">
      <template #placeholder>
        <div class="text-white">
          Sort by:  {{ value }}
        </div>
      </template>
    </FilterSelect>

    <FilterProviderSelect
      :option="providerList"
      @change="changeHandler"
    >
      <template #placeholder>
        <div class="text-white">
          Provider:  {{ providerValue.length ? `+${providerValue.length}` : 'All' }}
        </div>
      </template>
    </FilterProviderSelect>
  </div>
  <Spin
    :loading="loading"
  >
    <template
      v-if="type === 'gameList'"
    >
      <BaseGameList
        v-for="(item, idx) in list" :key="idx"
        :list="item.data" :title="item.name"
        :more-fetch="(opt: any) => getMore(item.id, opt)"
      />
    </template>
    <template v-if="type === 'game'">
      <CategoryGame :data="list" />
      <Loading ref="target" :is-loading="loadGameing" :has-more="true" />
    </template>

    <template v-if="type === 'provider'">
      <template v-for="(item, idx) in list" :key="idx">
        <div class="grid gap-[12px] grid-cols-[repeat(auto-fill,minmax(180px,1fr))]">
          <BaseGameProvider v-for="provider in item.data" :key="provider.id" :info="provider" />
        </div>
      </template>
    </template>
  </Spin>
</template>

<style></style>
