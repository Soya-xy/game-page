<script lang="ts" setup>
import type { CategoryListDetailResponse } from '~/api/category/type'
import type { Option } from '~/api/type'
import { cn } from '@/lib/utils'
import { asyncCategoryList, asyncCategoryListDetail } from '~/api/category'

const { data } = await asyncCategoryList()
const { makeTree } = useTree({
  id: 'id',
  pid: 'parentId',
  children: 'children',
})

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
watch(activeIndex, async (newVal) => {
  list.value = []

  const itemList = tree[newVal].children.length > 0
    ? tree[newVal].children
    : [tree[newVal]]

  await Promise.all(itemList.map(async (item: any) => {
    const { data: gameList } = await asyncCategoryListDetail({
      id: item.id,
      pageNo: 1,
      pageSize: 30,
    })

    const data = gameList.value?.providerList
      ? gameList.value.providerList
      : gameList.value?.gamesRespVO || []

    const type = gameList.value?.providerList ? 'provider' : 'game'

    list.value.push({
      name: item.name,
      id: item.id,
      data: (data as CategoryListDetailResponse).pageResult?.list,
      type,
    })

    providerList.value = (data as CategoryListDetailResponse).providerData?.map(v => ({
      value: v.id,
      label: v.name,
      picUrl: v.picUrl,
      count: v.count,
    }))
  }))
}, {
  immediate: true,
})

async function getMore(id: number, opt: any) {
  const { data: gameList } = await asyncCategoryListDetail({ id, ...opt })
  return gameList.value?.providerList
    ? gameList.value.providerList
    : gameList.value?.gamesRespVO?.pageResult?.list || []
}

const value = ref('Popular')
const providerValue = ref<string[]>([])
function changeHandler(e: string[]) {
  providerValue.value = e
}
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
  <template v-for="(item, idx) in list" :key="idx">
    <BaseGameList
      v-if="item.type === 'game'"
      :list="item.data" :title="item.name"
      :more-fetch="(opt: any) => getMore(item.id, opt)"
    />
    <template v-else-if="item.type === 'provider'">
      <div class="grid gap-[12px] grid-cols-[repeat(auto-fill,minmax(180px,1fr))]">
        <BaseGameProvider v-for="provider in item.data" :key="provider.id" :info="provider" />
      </div>
    </template>
  </template>
</template>

<style></style>
