<script lang="ts" setup>
import { Vue3Lottie } from 'vue3-lottie'
</script>

<template>
  <div>
    <client-only>
      <Vue3Lottie
        animation-link="/images/animation/inviteWheel/index.json"
        :height="120"
        :width="120"
      />
    </client-only>
    <div class="font-[600] text-font flex items-center justify-center rounded-full bg-active text-center leading-[1] overflow-hidden text-[12px] h-[23px] px-[10px]">
      Cash R$100.00
    </div>
  </div>
</template>

<style>

</style>
