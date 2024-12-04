<script lang="ts" setup>
import { ref } from 'vue'

const show = ref<boolean>(false)
const search = ref<string>('')
const isLoading = ref<boolean>(false)

function searchGame(evt: any) {
  console.log('🚀 ~ searchGame ~ evt:', evt)
  isLoading.value = true
  setTimeout(() => {
    isLoading.value = false
  }, 4000)
}

const eventHandler = useThrottleFn((evt: any) => {
  searchGame(evt)
}, 3000)
</script>

<template>
  <BaseIconButton @click="show = true">
    <i-svg-search class="w-[25px] h-[24px]" />
  </BaseIconButton>
  <BaseModal v-model:show="show" content-class="mx-auto w-[90%] min-w-[640px] max-w-[1414px] px-32px">
    <div
      class="flex-wrap p-[40px] search-pc bg-color2 shadow-bc2 border-radius-1 mx-auto w-full flex flex-col min-h-[360px] overflow-hidden relative"
    >
      <button class="absolute right-0 top-0 p-[20px]">
        <i
          class="inline-block h-[max-content] w-[max-content] icon sysicon-new-clean-3 cursor-pointer hover:-rotate-[180deg] text-color-text-2 hover-text-color transition-all duration-300 text-[16px]"
        />
      </button>
      <div class="w-full shrink-0 items-center search-bg overflow-hidden flex flex-col" style="flex: 1 1 0%;">
        <div class="text-color font-bold text-[26px]">
          Search
        </div>
        <div class="flex shrink-0 items-center w-full my-[16px] overflow-hidden">
          <div class="flex-1 shrink-0 z-[1] relative overflow-hidden">
            <BaseInput v-model="search" placeholder="Game or Providers" @input="eventHandler">
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
        <div class="shrink-0 text-color-text-2 flex items-center justify-center text-[14px] mb-[10px]">
          Search requires at least 3 characters
        </div>
        <Spin :loading="isLoading">
          <!-- 最近搜索记录 -->
          <div class="flex mb-[20px] w-full shrink-0 items-center justify-between">
            <div class="flex flex-1  flex-nowrap gap-[10px] overflow-x-auto">
              <button
                v-for="v in 20" :key="v"
                class="bg-[--bc-color19] text-[14px] h-[46px] px-[14px] flex items-center justify-center rounded-[20px] "
              >
                <p class="truncate mr-[8px] leading-[1]">
                  4421413
                </p><i
                  class="inline-block h-[max-content] w-[max-content] icon-new-clean-1 cursor-pointer text-color-text-2 text-[12px]"
                />
              </button>
            </div>
            <div
              class="pl-[20px] text-[14px] cursor-pointer shrink-0 h-[46px] flex items-center justify-center text-active font-bold"
            >
              Clear All
            </div>
          </div>
          <!-- 搜索结果 -->
          <div class="flex w-full items-center mb-[10px]">
            <i
              class="inline-block h-[max-content] w-[max-content] icon-new-search-max cursor-pointer text-linearColor1 text-[26px]"
            /><span
              class="flex text-[20px] text-white font-bold ml-[4px] mt-[2px]"
            >Results</span>
          </div>
          <BaseEmpty />
        </Spin>
        <!-- 热门推荐 -->
        <div class="flex w-full items-center mb-[10px]">
          <i
            class="inline-block h-[max-content] w-[max-content] icon-new-recommend-max cursor-pointer text-linearColor1 text-[26px]"
          /><span
            class="flex text-[20px] text-white font-bold ml-[4px] mt-[2px]"
          >Popular</span>
        </div>
        <div class=" w-full">
          <BaseGameList id="" />
        </div>
      </div>
    </div>
  </BaseModal>
</template>

<style></style>
