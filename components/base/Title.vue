<script lang="ts" setup>
const name = defineProp<string>('')
const icon = defineProp<boolean>(false)
</script>

<template>
  <div class="flex items-center justify-start space-x-[8px] pt-[3px] mb-[8px]">
    <div v-if="icon" class="rounded-full bg-active shrink-0 flex items-center justify-center font-bold w-[8px] h-[8px]" />
    <div class="flex items-center justify-center font-extrabold text-white text-[14px]">
      {{ name }}
    </div>
  </div>
</template>

<style></style>
