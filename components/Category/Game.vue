<script lang="ts" setup>
const data = defineProp<any[]>([], true)
</script>

<template>
  <div>
    <div class="grid gap-[12px] md:grid-cols-[repeat(auto-fill,minmax(133px,1fr))] grid-cols-[repeat(auto-fill,minmax(100px,1fr))]">
      <div v-for="(game, index) in data" :key="index">
        <BaseGameCard :info="game" />
      </div>
    </div>
  </div>
</template>

<style>

</style>
