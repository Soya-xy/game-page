<script lang="ts" setup>
const type = defineProp<number>(undefined, true)
const showIcon = defineProp<boolean>(false)
const name = defineProp('')
const img = defineProp('', true)
const description = defineProp('')
</script>

<template>
  <div
    class="flex-1 h-full flex-col justify-between px-[12px] pt-[20px] h-[180px] pb-[26px] bg-color2 rounded-[10px] overflow-hidden relative cursor-pointer flex"
    :class="`bg-image${type}`"
  >
    <Image
      :src="img"
      class="!w-auto absolute top-0 right-0" lazy
    />
    <div class="xl:text-[14px] text-[14px] sm:text-[24px] font-extrabold text-white flex items-center gap-x-[2px] uppercase">
      <div v-if="showIcon" class="flex items-center justify-center" style="width: 32px; height: 32px;">
        <i-svg-casino v-if="type === 1" class="scale-[1.5]" />
        <i-svg-sport v-else-if="type === 2" class="scale-[1.5]" />
        <i-svg-lotter v-else class="scale-[1.5]" />
      </div>
      {{ name }}
    </div>
    <p class="w-[65.22%] xl:text-[14px] font-semibold text-color relative z-[1]">
      {{ description }}
    </p>
  </div>
</template>

<style scoped>
.bg-image1 {
  background-image: linear-gradient(270deg, rgba(250, 123, 82, 0.3), transparent 75%);
}

.bg-image2 {
  background-image: linear-gradient(270deg, rgba(255, 218, 24, 0.2), transparent 75%);
}

/* .bg-image3 {
  background-image: linear-gradient(270deg, rgba(239, 56, 255, 0.2), transparent 75%);
} */
.bg-image3 {
  background-image: linear-gradient(90deg, #1874ff00 0.28%, #1874ff33 83.61%);
}
</style>
