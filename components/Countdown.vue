<script setup lang="ts">
import NumberFlow, { NumberFlowGroup } from '@number-flow/vue'
import { computed } from 'vue'

const time = defineProp<number>(undefined, true)
const seconds = ref()
const i = ref<any>()
onMounted(() => {
  i.value = setInterval(() => {
    // 转换为秒并取整
    seconds.value = Math.floor((time.value - new Date().getTime()) / 1000)
  }, 1000)
})
onUnmounted(() => {
  clearInterval(i.value)
})

const dd = computed(() => Math.floor(seconds.value / 86400))
const hh = computed(() => Math.floor(seconds.value / 3600))
const mm = computed(() => Math.floor((seconds.value % 3600) / 60))
const ss = computed(() => seconds.value % 60)
</script>

<template>
  <NumberFlowGroup v-if="seconds > 0">
    <div
      style="font-variant-numeric: tabular-nums; --number-flow-char-height: 0.85em"
      class="~text-3xl/4xl flex items-baseline font-semibold gap-x-[4px] text-white"
    >
      <NumberFlow v-if="dd > 0" :suffix="`${dd > 0 ? 'D' : ''}`" :trend="-1" :value="dd" :format="{ minimumIntegerDigits: 1 }" />
      <NumberFlow
        v-if="hh > 0" :suffix="`${hh > 0 ? 'h' : ''}`" :trend="-1" :value="hh"
        :format="{ minimumIntegerDigits: 1 }"
      />
      <NumberFlow
        v-if="mm > 0" :suffix="`${mm > 0 ? 'm' : ''}`" :trend="-1" :value="mm" :digits="{ 1: { max: 5 } }"
        :format="{ minimumIntegerDigits: 1 }"
      />
      <NumberFlow
        :suffix="`${ss > 0 ? 's' : ''}`" :trend="-1" :value="ss" :digits="{ 1: { max: 5 } }"
        :format="{ minimumIntegerDigits: 1 }"
      />
    </div>
  </NumberFlowGroup>
</template>
