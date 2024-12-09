<script lang="ts" setup>
const search = ref('')
</script>

<template>
  <div class="container @container flex flex-col gap-y-[12px] mt-[12px] relative z-[20] sm:px-[24px] pb-[24px]">
    <HomeSwiper />
    <!-- search -->
    <BaseInput v-model="search" placeholder="Search games" class="bg-color2">
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
    <!-- category -->
    <CategoryList />
  </div>
</template>

<style></style>
