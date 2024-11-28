<script lang="ts" setup>
const router = useRouter()

function close() {
  router.back()
}
</script>

<template>
  <BaseDrawer open direction="right" have-close content-class="h-[100vh] z-[9999]" @close="close">
    <template #title>
      <Image src="/images/logo.avif" alt="logo" class="w-[100px] h-[100px]" />
    </template>
    <Login />
  </BaseDrawer>
</template>

<style>

</style>
