<script setup lang="ts">
import type { StateHandler } from 'v3-infinite-loading/lib/types'
import InfiniteLoading from 'v3-infinite-loading'
import 'v3-infinite-loading/lib/style.css'

const load = defineProp<(e: StateHandler) => void>(undefined, true)
const firstLoad = defineProp<boolean>(true)
</script>

<template>
  <InfiniteLoading :firstload="firstLoad" @infinite="load">
    <slot />
    <template #spinner>
      <div class="text-center py-4 text-sm text-gray-500">
        <div class="flex justify-center items-center">
          <div class="spin " />
        </div>
      </div>
    </template>
    <template #complete>
      <div class="text-center py-4 text-sm text-gray-500">
        No more data
      </div>
    </template>
  </InfiniteLoading>
</template>
