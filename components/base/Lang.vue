<script lang="ts" setup>
import type { Locale } from '@intlify/core-base'
import { currentSupportedLanguages } from '~/@types/constants'

const nowLang = useCookieLocale().value
const change = defineEmit<[value: Locale]>()
</script>

<template>
  <div class="p-[10px]">
    <div
      v-for="v in currentSupportedLanguages" :key="v"
      class="bg-color3 h-[47px] flex justify-between items-center px-[20px] font-medium cursor-pointer hover:bg-color4"
      @click="change(v)"
    >
      <p>
        {{ $t(`lang.langs_${v}`) }}
      </p>
      <i
        v-if="v === nowLang"
        class="inline-block h-[max-content] w-[max-content] icon-new-hook cursor-pointer text-[--bc-langColor]"
      />
    </div>
  </div>
</template>

<style></style>
