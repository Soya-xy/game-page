<script lang="ts" setup>
import { Vue3Lottie } from 'vue3-lottie'
import { getFreeAmountUrl } from '~/api/roulette'

const { data: freeAmount } = useAPI<number>(getFreeAmountUrl, {
  default: () => 0,
})

const userStore = useUserStore()
const { token } = storeToRefs(userStore)

const show = ref(false)

function showTurnTable() {
  if (!token.value) {
    routerPush('/login')
    return
  }
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
      Cash {{ toCurrency(freeAmount) }}
    </div>
  </div>
  <TurnTable v-if="token" v-model:show="show" />
</template>

<style></style>
