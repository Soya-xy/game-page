<script lang="ts" setup>
const router = useRouter()
const userStore = useUserStore()
const { user } = storeToRefs(userStore)
</script>

<template>
  <div class="h-[48px] fixed top-0 left-0 right-0 z-[51] flex items-center justify-between px-[10px] bg-inherit">
    <div class="flex items-center gap-[8px] h-full">
      <Image src="/images/logo.avif" class="!h-[30px]" @click="router.push('/')" />
    </div>
    <div class="flex items-center h-full text-[12px]">
      <div v-if="!user" class="flex items-center gap-[5px]">
        <button
          class="h-[35px] min-w-[62px] font-extrabold flex items-center justify-center bg-button px-[10px] rounded-[10px] text-white"
          @click="router.push('/login')"
        >
          Sign In
        </button>
        <button
          class="px-[10px] h-[35px] min-w-[62px] font-extrabold text-font rounded-[10px] main-color-btn flex items-center justify-center"
          @click="router.push('/register')"
        >
          Sign Up
        </button>
        <div class="w-[34px] h-[34px] flex items-center justify-center relative bg-button rounded-[10px]">
          <i class="inline-block h-[max-content] w-[max-content] icon-n-lang text-[20px]" />
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>
