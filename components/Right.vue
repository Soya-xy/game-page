<script lang="ts" setup>
import Spin from './Spin.vue'

const show = defineModel<boolean>('show')
const type = defineProp<string>()

const components = computed(() => {
  if (!type.value)
    return

  return defineAsyncComponent({
    loader: () => import(`~/components/Base/${type.value}.vue`),
    delay: 200,
    loadingComponent: Spin,
    timeout: 10000,
    suspensible: false,
  })
})
</script>

<template>
  <div
    class="w-[300px] h-full shrink-0 overflow-hidden transition-all duration-300 relative z-[100]"
    :class="{
      'ml-[0]': show,
      '-ml-[310px]': !show,
    }"
  >
    <div
      class="w-[300px] h-[calc(100vh-60px)] top-[60px] pb-[10px] bg-[--bc-searchColor] fixed z-[250] overflow-hidden max-h-full transition-all duration-300 flex flex-col box-shadow-07"
      :class="{
        'right-0': show,
        'right-[-310px]': !show,
      }"
    >
      <div class="color-linear-12 px-[15px] bg-linear-12 flex items-center justify-between h-[52px] shrink-0">
        <div class="text-[16px] text-white font-bold">
          {{ type }}
        </div>
        <i
          class="inline-block h-[max-content] w-[max-content] icon-new-clean-1 cursor-pointer text-color-text-2 text-[12px]"
          @click="() => {
            show = false
            type = ''
          }"
        />
      </div>
      <component :is="components" v-if="type" />
    </div>
  </div>
</template>

<style></style>
