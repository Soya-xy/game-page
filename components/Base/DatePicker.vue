<script setup lang="ts">
import VueDatePicker from '@vuepic/vue-datepicker'
import '@vuepic/vue-datepicker/dist/main.css'

const date = defineModel<string | Date>()
const placeholder = defineProp<string>('')
const contentClass = defineProp<string>('')
const isOpen = ref(false)
const datePickerRef = ref(null)
</script>

<template>
  <VueDatePicker
    ref="datePickerRef"
    v-model="date"
    :class="`text-input relative ${contentClass}`"
    auto-apply
    hide-input-icon
    dark
    :placeholder
    :enable-time-picker="false"
    :action-row="{
      showSelect: false,
      showCancel: false,
      showNow: false,
      showPreview: false,
    }"
    v-bind="$attrs"
    @open="isOpen = true"
    @closed="isOpen = false"
  >
    <template #clear-icon>
      <i
        class="inline-block h-[max-content] w-[max-content] icon-new-arrow cursor-pointer my-auto transition-all duration-300 text-color mr-[10px]"
        :class="{ 'rotate-[90deg]': !isOpen, 'rotate-[270deg] text-white': isOpen }"
      />
    </template>
  </VueDatePicker>
</template>

<style>
.dp__action_row {
  display: none;
}

.dp__menu.dp__menu_index.dp__theme_dark {
  background: var(--bc-bgColor9) !important;
  border: none;
}

.dp__input_readonly {
  border: none !important;
  height: 100%;
  user-select: none;
}
.dp__input_wrap {
  height: 100%;
}

.dp__arrow_top,
.dp__overlay,
.dp__theme_dark {
  background: var(--bc-bgColor9) !important;
}

.dp__arrow_top {
  opacity: 0;
}

.dp__theme_dark {
  --dp-background-color: var(--bc-bgColor9);
  --dp-font-size: 14px;
  --dp-input-padding: 15px 12px;
  --dp-input-icon-padding: 12px;
  --dp-text-color: #fff !important;
  --dp-hover-color: #33363c;
  --dp-hover-text-color: #fff;
  --dp-hover-icon-color: #959595;
  --dp-primary-color: #2dee88 !important;
  --dp-primary-text-color: #fff;
  --dp-secondary-color: #adb7ba !important;
  --dp-border-color: transparent;
  --dp-menu-border-color: #383e48;
  --dp-border-color-hover: #aaaeb7;
  --dp-disabled-color: #737373;
  --dp-scroll-bar-background: #383e48;
  --dp-scroll-bar-color: #33363c;
  --dp-success-color: #00701a;
  --dp-success-color-disabled: #428f59;
  --dp-icon-color: #adb7ba !important;
  --dp-danger-color: #e53935;
  --dp-highlight-color: rgba(0, 92, 178, 0.2);
  --dp-cell-border-radius: 50%;
}

.dp__main {
  height: 100%;
}

.dp__main > div:not(.dp__outer_menu_wrap) {
  height: 100%;
  width: 100%;
}

.dp__input_icon {
  position: unset !important;
}
</style>
