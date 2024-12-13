<script lang="ts" setup>
import { Vue3Lottie } from 'vue3-lottie'

const show = ref(false)
</script>

<template>
  <div @click="show = true">
    <client-only>
      <Vue3Lottie animation-link="/images/animation/inviteWheel/index.json" :width="120" />
    </client-only>
    <div
      class="font-[600] text-font flex items-center justify-center rounded-full bg-active text-center leading-[1] overflow-hidden text-[12px] h-[23px] px-[10px]"
    >
      Cash R$100.00
    </div>
  </div>
  <BaseModal v-model:show="show" content-class="mx-auto w-[90%] min-w-[640px] max-w-[1414px] px-32px">
    <TurnTable />
  </BaseModal>
</template>

<style></style>
