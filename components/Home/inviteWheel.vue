<script lang="ts" setup>
import { Vue3Lottie } from 'vue3-lottie'
import { getFreeAmountUrl } from '~/api/roulette'

const { data, status } = useAPI<number>(getFreeAmountUrl, {
  default: () => 0,
})

watch(status, (newVal) => {
  if (newVal === 'success') {
    freeAmount.value = data.value
  }
}, { immediate: true })

const userStore = useUserStore()
const { token } = storeToRefs(userStore)
const { isPageLoading } = useLoading()

const show = ref(false)

async function showTurnTable() {
  if (!token.value) {
    routerPush('/login')
    return
  }
  isPageLoading.value = true
  await initRoulette()
  isPageLoading.value = false
  show.value = true
}
</script>

<template>
  <div @click="showTurnTable">
    <client-only>
      <Vue3Lottie animation-link="/images/animation/inviteWheel/index.json" :width="120" />
    </client-only>
    <div
      class="font-[600] text-font flex items-center justify-center rounded-full bg-active text-center leading-[1] overflow-hidden text-[12px] h-[23px] px-[10px]"
    >
      Cash {{ toCurrency(data) }}
    </div>
  </div>
  <TurnTable v-if="token" v-model:show="show" />
</template>

<style></style>
