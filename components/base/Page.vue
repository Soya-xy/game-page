<script setup lang="ts">
import {
  Pagination,
  PaginationList,
  PaginationNext,
  PaginationPrev,
} from '@/components/ui/pagination'

const change = defineEmit()
const total = defineProp<number>()
const size = defineProp<number>(10)
const page = defineModel<number>()
</script>

<template>
  <Pagination v-model:page="page" :total :items-per-page="size" show-edges @update:page="change">
    <PaginationList class="flex items-center gap-1">
      <PaginationPrev class="bg-page w-[30px] h-[32px] rounded-[8px] hover:bg-page" />
      <PaginationNext class="bg-page w-[30px] h-[32px] rounded-[8px] hover:bg-page" />
    </PaginationList>
  </Pagination>
</template>
