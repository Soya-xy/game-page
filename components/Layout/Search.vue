<script lang="ts" setup>
import { isEmpty } from 'ramda'
import { ref } from 'vue'
import { getProductList } from '~/api/game'

const historySearch = ref<string[]>(localStorage.getItem('historySearch') ? JSON.parse(localStorage.getItem('historySearch') || '[]') : [])
const show = ref<boolean>(false)
const search = ref<string>('')
const isLoading = ref<boolean>(false)
const list = ref<any[]>([])

async function searchGame() {
  if (isEmpty(search.value)) {
    list.value = []
    return
  }

  if ((!search.value || search.value.length < 3))
    return
  isLoading.value = true
  // 判断是否在历史记录中在的就不push
  if (!historySearch.value.includes(search.value)) {
    historySearch.value.unshift(search.value)
    localStorage.setItem('historySearch', JSON.stringify(historySearch.value))
  }

  const res = await getProductList({
    name: search.value,
  })
  list.value = res
  isLoading.value = false
}

// const eventHandler = useDebounceFn(() => {
//   searchGame()
// }, 300)

watch(search, useDebounceFn(() => {
  searchGame()
}, 300))

function clearHistory() {
  historySearch.value = []
  localStorage.removeItem('historySearch')
}
</script>

<template>
  <BaseIconButton @click="show = true">
    <i-svg-search class="w-[25px] h-[24px]" />
  </BaseIconButton>
  <BaseModal v-model:show="show" content-class="mx-auto min-w-[640px] px-0 min-h-[360px] max-h-[unset] container w-[80%]">
    <div
      class="flex-wrap p-[40px] bg-color2 shadow-bc2 border-radius-1 mx-auto w-full flex flex-col min-h-[360px] overflow-hidden relative"
    >
      <div class="w-full shrink-0 items-center overflow-y-auto flex flex-col">
        <div class="text-color font-bold text-[26px]">
          Search
        </div>
        <div class="flex shrink-0 items-center w-full my-[16px] overflow-hidden">
          <div class="flex-1 shrink-0 z-[1] relative overflow-hidden">
            <BaseInput v-model="search" placeholder="Game or Providers">
              <template #prefix>
                <i-svg-search class="w-[25px] h-[24px] ml-2" />
              </template>
              <template v-if="search.length" #icon>
                <button
                  class="w-[30px] h-[30px] rounded-[4px] bg-[--bc-searchBtnColor] flex items-center justify-center"
                  @click="search = ''"
                >
                  <i
                    class="inline-block h-[max-content] w-[max-content] icon-new-clean-3 cursor-pointer text-[12px] text-white"
                  />
                </button>
              </template>
            </BaseInput>
          </div>
        </div>
        <div class="shrink-0 text-[--bc-color20] flex items-center justify-center text-[14px] mb-[10px]">
          Search requires at least 3 characters
        </div>
        <Spin :loading="isLoading" class="min-h-[300px]">
          <!-- 最近搜索记录 -->
          <div v-if="historySearch.length" class="flex mb-[20px] w-full shrink-0 items-center justify-between">
            <HScroll>
              <button
                v-for="(v, k) in historySearch" :key="k"
                class="bg-[--bc-color19] text-[14px] h-[46px] px-[14px] flex items-center justify-center rounded-[20px] "
                @click="() => {
                  search = v
                  // searchGame()
                }"
              >
                <p class="truncate mr-[8px] leading-[1]">
                  {{ v }}
                </p><i
                  class="inline-block h-[max-content] w-[max-content] icon-new-clean-1 cursor-pointer text-[--bc-color20] text-[12px]"
                />
              </button>
            </HScroll>
            <div
              class="pl-[20px] text-[14px] cursor-pointer shrink-0 h-[46px] flex items-center justify-center text-active font-bold"
              @click="clearHistory"
            >
              Clear All
            </div>
          </div>
          <!-- 搜索结果 -->
          <div class="flex w-full items-center">
            <i
              class="inline-block h-[max-content] w-[max-content] icon-new-search-max cursor-pointer text-linearColor1 text-[26px]"
            /><span
              class="flex text-[20px] text-white font-bold ml-[4px] mt-[2px]"
            >Results</span>
          </div>
          <BaseEmpty v-if="!list?.length" />
          <BaseGameSearchList v-else :list="list" :have-more="false" :slides-per-view="7" />
        </Spin>
        <!-- 热门推荐 -->
        <div class="flex w-full items-center mt-[10px]">
          <i
            class="inline-block h-[max-content] w-[max-content] icon-new-recommend-max cursor-pointer text-linearColor1 text-[26px]"
          /><span
            class="flex text-[20px] text-white font-bold ml-[4px] mt-[2px]"
          >Popular</span>
        </div>
        <div class=" w-full">
          <BaseGameSearchList type="recommend" :slides-per-view="7" />
        </div>
      </div>
    </div>
  </BaseModal>
</template>

<style></style>
