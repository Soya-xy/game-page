<script lang="ts" setup>
const info = defineProp<{
  name: string
  picUrl: string
}>(undefined, true)
</script>

<template>
  <div class="bg-color2 h-0 pb-[48.95%] relative rounded-[8px] overflow-hidden cursor-pointer">
    <div class="absolute top-0 left-0 right-0 bottom-0">
      <div class="flex justify-center items-center px-[9px] py-[10px] h-full">
        <Image :src="info.picUrl" alt="" importance="auto" class="max-w-[90%] max-h-[90%] !h-auto transition-all duration-200" lazy />
      </div>
    </div>
  </div>
</template>

<style>

</style>
