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
const open = ref(false)
const { isPc } = useDevice()
const contentClass = defineProp<string>('')
</script>

<template>
  <Select
    v-model="value"
    v-model:open="open"
  >
    <SelectTrigger
      class="max-w-[325px] bg-color2 border-[--bc-transparentColor]"
    >
      <SelectValue
        :placeholder="placeholder"
        :as-child="!!$slots.placeholder"
      >
        <slot
          v-if="$slots.placeholder"
          name="placeholder"
        />
      </SelectValue>
    </SelectTrigger>
    <SelectContent v-if="isPc" :class="`bg-color2 p-0 ${contentClass}`">
      <SelectGroup>
        <SelectItem v-for="item in option" :key="item.value" :value="item.value" class="hover:bg-color6 min-h-[40px] h-[40px] text-[12px] text-color">
          {{ item.label }}
        </SelectItem>
      </SelectGroup>
    </SelectContent>
  </Select>

  <BaseDrawer v-if="!isPc" v-model:open="open" content-class="z-[555]" overlay-class="z-[550]" header-class="bg-transparent">
    <template #title>
      Select
    </template>
    <div class="flex flex-col gap-y-[2px] max-h-[350px] overflow-y-auto overscroll-contain">
      <div
        v-for="item in option"
        :key="item.value"
        :value="item"
        class="hover:bg-color6 min-h-[40px] h-[40px] text-[12px]"
        @click="() => {
          open = false
          value = item.value
        }"
      >
        {{ item.label }}
      </div>
    </div>
  </BaseDrawer>
</template>
