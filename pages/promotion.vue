<script lang="ts" setup>
import type { PromotionArticleResponse } from '~/api/promotion/type'
import { asyncPromotionArticleList } from '~/api/promotion'

const listData = ref<PromotionArticleResponse[]>([])

onMounted(async () => {
  const { list } = await asyncPromotionArticleList({
    pageNo: 1,
    pageSize: 100,
  })
  listData.value = list
})

const showModal = ref(false)
const modalData = ref<PromotionArticleResponse | null>(null)

function handleModal(item: PromotionArticleResponse) {
  modalData.value = item
  showModal.value = true
}
</script>

<template>
  <div class="max-w-[1414px] flex mx-auto flex-col gap-y-[12px] mt-[12px] relative z-[20] sm:px-[20px] ">
    <div class="pt-[30px] md:pt-0 px-[15px] md:px-0">
      <div class="grid mt-[20px]  md:grid-cols-3 gap-[15px] sm:grid-cols-2">
        <div
          v-for="(item, idx) in listData" :key="idx"
          class="bg-color2 border-radius-0 shrink-0 pb-[20px] flex flex-col items-center justify-between overflow-hidden"
        >
          <div
            class="w-full h-0 shrink-0 relative bg-no-repeat bg-cover bg-center border-radius-0 cursor-pointer pb-[41.1%]"
            :style="{ 'background-image': `url(${item.picUrl})` }"
          />
          <div
            class="flex justify-start items-center gap-x-[10px] w-full h-[max-content] mt-[20px] px-[20px] overflow-hidden"
          >
            <div class="flex-1">
              <h3 class="text-[16px] font-[500] text-color line-clamp-1">
                {{ item.introduction }}
              </h3>
            </div>
            <button
              class="h-[40px] border-radius-0 bg-[--bc-bgColor9] text-[16px] font-[500] px-[8px] min-w-[100px] w-[max-content] text-[--bc-color2] shrink-0"
              @click="handleModal(item)"
            >
              Detail
            </button>
          </div>
        </div>
      </div>
    </div>

    <BaseModal v-model:show="showModal" content-class="!rounded-[10px] bg-popup min-w-[700px] max-w-[800px]">
      <template #title>
        <div class="flex justify-between items-center h-[54px] px-[20px] bg-color-pop-16 rounded-t-[10px] text-white">
          Promotion
        </div>
      </template>
      <div class="h-[700px] overflow-y-auto px-[40px] py-[20px]">
        <div v-html="modalData?.content" />
      </div>
    </BaseModal>
  </div>
</template>
