<script lang="ts" setup>
import { getChatCount } from '~/api/chat'

const count = ref(0)

watch(conversationId, async () => {
  if (!conversationId.value)
    return
  count.value = await getChatCount(conversationId.value)
})
</script>

<template>
  <i class="inline-block h-[max-content] w-[max-content] icon-new-personal cursor-pointer text-[16px] mx-[8px] text-[--bc-color20]" />
  <span class="text-green font-bold text-[16px]">{{ count }}</span>
</template>

<style>

</style>
