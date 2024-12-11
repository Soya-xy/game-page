<script lang="ts" setup>
import { cn } from '@/lib/utils'

const placeholder = defineProp<string>()
const type = defineProp<HTMLInputElement['type']>('text')
const iconClass = defineProp<string>()
const allowClear = defineProp<boolean>(false)
const modelValue = defineModel<string>()
const clickIcon = defineEmit()
</script>

<template>
  <div
    class="w-full rounded-[10px] flex items-center shrink-0 border-[--bc-bgColor5] border border-solid relative  h-[40px] text-[14px] hover:border-[--bc-activeColor] bg-[--bc-searchColor]"
  >
    <slot v-if="$slots.prefix" name="prefix" />
    <Input
      v-model="modelValue"
      class="h-full px-[13px] min-w-[60px] border-0 text-white rounded-[10px] bg-[--bc-searchColor] placeholder:font-normal"
      :type
      :placeholder
      v-bind="$attrs"
    />
    <div
      v-if="$slots.icon"
      :class="cn(
        'text-[--bc-textColor] flex items-center absolute inset-y-0 right-[10px] justify-center text-[16px]',
        iconClass,
      )"
      @click="clickIcon"
    >
      <slot name="icon" />
    </div>
    <div
      v-if="allowClear"
      :class="cn(
        'text-[--bc-textColor] flex items-center absolute inset-y-0 right-[10px] justify-center text-[16px]',
        iconClass,
      )"
      @click="clickIcon"
    >
      <i
        class="inline-block h-[max-content] w-[max-content] cursor-pointer icon-new-clean-1 text-[12px] text-color-text-2"
        @click="modelValue = ''"
      />
    </div>
  </div>
</template>

<style></style>
