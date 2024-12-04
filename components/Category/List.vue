<script lang="ts" setup>
import { cn } from '@/lib/utils'
import { getCategoryList, getCategoryListDetail } from '~/api/category'

const { data } = await getCategoryList()
const { makeTree } = useTree({
  id: 'id',
  pid: 'parentId',
  children: 'children',
})
const tree = makeTree(data.value)
const activeIndex = ref(0)
const list = ref<any[]>([])

watch(activeIndex, async (newVal) => {
  list.value = []

  const itemList = tree[newVal].children.length > 0
    ? tree[newVal].children
    : [tree[newVal]]

  await Promise.all(itemList.map(async (item: any) => {
    const { data: gameList } = await getCategoryListDetail({
      id: item.id,
      pageNo: 1,
      pageSize: 30,
    })

    const data = gameList.value.providerList
      ? gameList.value.providerList
      : gameList.value?.gamesRespVO?.pageResult?.list || []

    list.value.push({
      name: item.name,
      data,
    })
  }))
}, {
  immediate: true,
})
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
  <template v-for="(item, idx) in list" :key="idx">
    <BaseGameList :list="item.data" :title="item.name" />
  </template>
</template>

<style></style>
