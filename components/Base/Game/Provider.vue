<script lang="ts" setup>
const info = defineProp<{
  name: string
  picUrl: string
}>(undefined, true)
</script>

<template>
  <div>
    <div class="bg-color2 relative rounded-[8px] overflow-hidden cursor-pointer">
      <div class="flex justify-center items-center px-[9px] md:py-[25px] py-[10px] h-full">
        <Image :src="info.picUrl" alt="" importance="auto" class="md:!max-w-[90%] !max-w-[80%] !max-h-[90%] !h-auto transition-all duration-200" lazy />
      </div>
    </div>
  </div>
</template>

<style>

</style>
