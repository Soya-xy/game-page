<script lang="ts" setup>
const router = useRouter()
const back = defineProp<boolean>()
const close = defineEmit()
function handleBack() {
  if (back.value) {
    close()
  }
  else {
    router.back()
  }
}
</script>

<template>
  <div class=" flex items-center text-white w-full h-[56px] top-0 z-[20] shrink-0 bg-[--bc-color-3] !fixed">
    <div class="flex-1 flex items-center">
      <button class="pr-[10px] pl-[15px] text-[15px] h-full flex items-center" @click="handleBack">
        <i class="inline-block h-[max-content] w-[max-content] icon-new-back" />
      </button>
      <span class="text-[16px] font-bold text-color-linear-20">VIP Club</span>
    </div>
    <button class="flex items-center overflow-hidden mr-[15px] h-full">
      <i
        class="inline-block h-[max-content] w-[max-content] icon-new-live-support text-[15px] mt-[1px] text-green"
      /><span
        class="flex-1 truncate text-left text-[12px] ml-[4px] text-color"
      >VIP support</span>
    </button>
  </div>
</template>

<style></style>
