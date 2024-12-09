<script lang="ts" setup>
const sliderPosition = ref(0)
const isDragging = ref(false)
const startX = ref(0)
const startPosition = ref(0)

const change = defineEmit<[number]>()

function handlePointerDown(e: PointerEvent) {
  isDragging.value = true
  startX.value = e.clientX
  startPosition.value = sliderPosition.value
  // 设置指针捕获
  const target = e.target as HTMLElement
  target.setPointerCapture(e.pointerId)
}

function handlePointerMove(e: PointerEvent) {
  if (!isDragging.value)
    return

  // 计算偏移量并更新位置
  const offset = Math.floor((e.clientX - startX.value) / 2)
  const newPosition = Math.min(Math.max(startPosition.value + offset, 0), 100)
  if (newPosition === sliderPosition.value)
    return

  sliderPosition.value = newPosition
  change(newPosition)
}

function handlePointerUp(e: PointerEvent) {
  isDragging.value = false
  const target = e.target as HTMLElement
  target.releasePointerCapture(e.pointerId)
}
</script>

<template>
  <div
    class="absolute z-[1] -top-[7px] h-[22px] overflow-hidden cursor-pointer"
    :style="{ left: `${sliderPosition}%` }"
    @pointerdown="handlePointerDown"
    @pointermove="handlePointerMove"
    @pointerup="handlePointerUp"
    @pointercancel="handlePointerUp"
  >
    <div class="bg-[--bc-color20] w-[20px] h-[10px] relative z-[1]" />
    <div
      class="w-[20px] h-[20px] bg-[--bc-color20] rounded-bl-[4px] absolute z-[0] -top-[2px]"
      style="transform: rotate(-45deg);"
    />
  </div>
</template>

<style>

</style>
