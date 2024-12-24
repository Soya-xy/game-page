<script lang="ts" setup>
import { cn } from '@/lib/utils'

const placeholder = defineProp<string>()
const type = defineProp<HTMLInputElement['type']>('text')
const iconClass = defineProp<string>()
const allowClear = defineProp<boolean>(false)
const modelValue = defineModel<string>()
const error = defineProp<boolean>(false)
const clickIcon = defineEmit()

const isFocus = ref(false)
</script>

<template>
  <div
    class="w-full rounded-[10px] flex items-center shrink-0 border-[--bc-bgColor5] border border-solid relative  h-[40px] text-[14px] hover:border-[--bc-activeColor] bg-[--bc-searchColor] "
    :class="{
      '!border-[--bc-errorColor]': error,
      '!border-[--bc-activeColor]': isFocus,
    }"
  >
    <slot v-if="$slots.prefix" name="prefix" />
    <Input
      v-model="modelValue"
      class="h-full px-[13px] min-w-[60px] border-0 text-white rounded-[10px] bg-[--bc-searchColor] placeholder:font-normal"
      :type
      :placeholder
      v-bind="$attrs"
      @focus="isFocus = true"
      @blur="isFocus = false"
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
        class="inline-block h-[max-content] w-[max-content] cursor-pointer icon-new-clean-1 text-[12px] text-[--bc-color20]"
        @click="modelValue = ''"
      />
    </div>
    <slot v-if="$slots.suffix" name="suffix" />
  </div>
</template>

<style></style>
