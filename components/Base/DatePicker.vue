<script setup>
import VueDatePicker from '@vuepic/vue-datepicker'
import '@vuepic/vue-datepicker/dist/main.css'

const date = defineModel('date')
const isOpen = ref(false)
</script>

<template>
  <VueDatePicker
    v-model="date" class="text-input relative" auto-apply :enable-time-picker="false"
    placeholder="Start Typing ..." :action-row="{
      showSelect: false,
      showCancel: false,
      showNow: false,
      showPreview: false,
    }" dark
    @open="isOpen = true" @closed="isOpen = false"
  >
    <template #clear-icon>
      <i
        class="inline-block h-[max-content] w-[max-content] icon-new-arrow cursor-pointer my-auto transition-all duration-300 text-color"
        :class="{ 'rotate-[90deg]': !isOpen, 'rotate-[270deg] text-white': isOpen }"
      />
    </template>
  </VueDatePicker>
</template>

<style scoped>
.text-input :deep(.dp__action_row) {
  display: none;
}

:deep(.dp__menu.dp__menu_index.dp__theme_dark) {
  background: var(--bc-bgColor) !important;
  border: none;
}

:deep(.dp__input_readonly) {
  border: none !important;
  user-select: none;
}

:deep(.dp__arrow_top, .dp__overlay, .dp__theme_dark) {
  background: var(--bc-bgColor) !important;
}

:deep(.dp__arrow_top) {
  opacity: 0;
}

:global(.dp__theme_dark) {
  --dp-background-color: var(--bc-bgColor9);
  --dp-text-color: #fff;
  --dp-hover-color: #484848;
  --dp-hover-text-color: #fff;
  --dp-hover-icon-color: #959595;
  --dp-primary-color: #005cb2;
  --dp-primary-disabled-color: #61a8ea;
  --dp-primary-text-color: #fff;
  --dp-secondary-color: #a9a9a9;
  --dp-border-color: #2d2d2d;
  --dp-menu-border-color: #2d2d2d;
  --dp-border-color-hover: #aaaeb7;
  --dp-disabled-color: #737373;
  --dp-disabled-color-text: #d0d0d0;
  --dp-scroll-bar-background: #212121;
  --dp-scroll-bar-color: #484848;
  --dp-success-color: #00701a;
  --dp-success-color-disabled: #428f59;
  --dp-icon-color: #959595;
  --dp-danger-color: #e53935;
  --dp-marker-color: #e53935;
  --dp-tooltip-color: #3e3e3e;
  --dp-highlight-color: rgba(0, 92, 178, 0.2);
}
</style>
