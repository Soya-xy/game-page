<script lang="ts" setup>
const title = defineProp<string>('')
</script>

<template>
  <div v-if="title" class="text-[14px] font-bold text-white mb-[10px]">
    {{ title }}
  </div>
  <div class="text-[12px] text-color">
    <p>
      <strong class="text-white bg-[#66b966]">How do I get commission?</strong>
    </p>
    <p>1. The system calculates the commission every 24 hours.</p>
    <p>2. A friend's bet will earn you commission.</p>
    <p>3. Your friends' friends will also bring you commission.</p>
  </div>
</template>

<style>

</style>
