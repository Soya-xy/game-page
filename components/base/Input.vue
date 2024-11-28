<script lang="ts" setup>
const placeholder = defineProp<string>()
const type = defineProp<HTMLInputElement['type']>('text')
const clickIcon = defineEmit()
</script>

<template>
  <div>
    <Input
      class="h-full flex-1 min-w-[60px] field-base text-white rounded-[10px] bg-[--bc-searchColor] placeholder:font-normal hover:border-[--bc-activeColor]"
      :type
      :placeholder
    />
    <div
      v-if="$slots.icon"
      class="absolute inset-y-0 right-[10px]"
      @click="clickIcon"
    >
      <slot name="icon" />
    </div>
  </div>
</template>

<style></style>
