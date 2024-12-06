<script setup lang="ts">
const src = defineProp<string>('')
const lazy = defineProp<boolean>(true)

const img = useImage()
const isError = ref(false)
</script>

<template>
  <NuxtImg
    v-if="!isError"
    :src="src" class="max-w-full h-full" :loading="lazy ? 'lazy' : 'eager'"
    :placeholder="img(src, { h: 10, f: 'png', blur: 2, q: 50 })" v-bind="$attrs"
    @error="isError = true"
  />

  <div
    v-else
    class="flex flex-col items-center justify-center gap-4 "
  >
    <NuxtImg
      src="/images/afun/game_img_fial.png" class="w-[54%]"
      loading="lazy"
      :placeholder="img('/images/afun/game_img_fial.png', { h: 10, f: 'png', blur: 2, q: 50 })"
    />
    <p class="text-color text-sm w-full overflow-hidden text-ellipsis">
      Image is unavailable
    </p>
  </div>
</template>
