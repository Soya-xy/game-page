<script lang="ts" setup>
definePageMeta({
  pageIndex: PageIndexEnum.register,
})

const router = useRouter()

function close() {
  router.back()
}
</script>

<template>
  <div class="fixed inset-0 flex flex-col items-center justify-center z-[999] h-full bg-color2">
    <div
      class=" flex items-center text-white px-[15px] w-full min-h-[56px] h-[max-content] py-[4px] bg-inherit shrink-0 border-b-[0.5px] border-solid border-[--bc-searchBtnColor]"
    >
      <div class="flex items-center w-full justify-between">
        <Image src="/images/logo.avif" alt="logo" class="w-[100px] h-[100px]" />
        <button
          class="flex justify-center items-center shrink-0 w-[28px] h-[28px] rounded-[6px] bg-button text-white"
          @click="close"
        >
          <i class="inline-block  icon-new-clean-1 text-[8px] font-bold" />
        </button>
      </div>
    </div>
    <Register />
  </div>
</template>

<style></style>
