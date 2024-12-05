<script setup lang="ts">
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

const option = defineProp<{
  value: string
  label: string
}[]>(undefined, true)

const placeholder = defineProp<string>('Select a fruit')
const value = defineModel<string>()
</script>

<template>
  <Select v-model="value">
    <SelectTrigger class="max-w-[325px] bg-color2 border-[--bc-transparentColor]">
      <SelectValue :placeholder as-child>
        <slot name="placeholder" />
      </SelectValue>
    </SelectTrigger>
    <SelectContent class="bg-color2 p-0">
      <SelectGroup>
        <SelectItem v-for="item in option" :key="item.value" :value="item.value" class="hover:bg-color6 focus:bg-color6 min-h-[40px] h-[40px] text-[12px]">
          {{ item.label }}
        </SelectItem>
      </SelectGroup>
    </SelectContent>
  </Select>
</template>
