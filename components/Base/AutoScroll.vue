<script lang="ts" setup>
import { TransitionPresets, useTransition } from '@vueuse/core'
import { VirtList } from 'vue-virt-list'

withDefaults(defineProps<{
  list: any[]
  idKey?: string
  fixed?: boolean
  minSize?: number
  itemGap?: number
}>(), {
  idKey: 'id',
  fixed: true,
  minSize: 20,
  itemGap: 20,
})

const el = ref<any>()

const isScrolling = ref(false)
const source = ref(0)
const smoothIndex = useTransition(source, {
  duration: 1000,
  transition: TransitionPresets.linear,
})

watch(smoothIndex, (newValue) => {
  if (el.value) {
    const itemSize = el.value.getItemSize(Math.floor(newValue))
    el.value.clientRefEl.scrollTop = newValue * itemSize
  }
})

function startAutoScroll() {
  const scroll = () => {
    if (!isScrolling.value) {
      isScrolling.value = true
      source.value++

      setTimeout(() => {
        isScrolling.value = false
      }, 1400)
    }
  }

  setTimeout(() => {
    scroll()
    setInterval(scroll, 3000)
  }, 500)
}

onMounted(() => {
  if (el.value) {
    startAutoScroll()
  }
})
</script>

<template>
  <ClientOnly>
    <VirtList
      ref="el" :fixed :item-key="idKey" :list="list" :min-size :item-gap
    >
      <template #default="{ itemData }">
        <slot :item-data="itemData" />
      </template>
    </VirtList>
  </ClientOnly>
</template>

<style>

</style>
