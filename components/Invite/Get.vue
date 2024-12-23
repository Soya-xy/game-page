<script lang="ts" setup>
const show = defineModel<boolean>('show', {
  required: true,
})

const number = ref(0)
const animationDuration = 1500 // 2秒动画
const startTime = ref(0)
const animationRef = ref<number>()

watch(
  show,
  (val) => {
    if (val) {
      const targetAmount = spinResult.value?.spinAmount
      if (!targetAmount)
        return
      startTime.value = performance.now()

      const animate = (currentTime: number) => {
        // 计算动画进度 (0 到 1 之间)
        const progress = Math.min((currentTime - startTime.value) / animationDuration, 1)

        // 使用 easeOutQuart 缓动函数使动画更自然
        const eased = 1 - (1 - progress) ** 4

        // 计算当前数值
        number.value = progress === 1
          ? targetAmount
          : targetAmount * eased

        // 继续动画直到完成
        if (progress < 1) {
          animationRef.value = requestAnimationFrame(animate)
        }
      }

      animationRef.value = requestAnimationFrame(animate)
    }
  },
  { immediate: true },
)

// 清理动画
onUnmounted(() => {
  if (animationRef.value) {
    cancelAnimationFrame(animationRef.value)
  }
})
</script>

<template>
  <BaseModal v-model:show="show" content-class="mx-auto min-w-[444px] max-w-[1414px] px-32px" no-close>
    <div
      class="text-center flex flex-col justify-between absolute left-0 right-0 top-0 bottom-0 m-auto border-radius-1 bg-no-repeat bg-[length:100%] w-[520px] h-[422px] pt-[35px] px-[45px] pb-[37px]"
      style="background-image: url(https://web-res-ccc.afunimg8.com/cdn-cgi/image/format=auto/C02/_E/activity/inviteWheel2/bg2.png);"
    >
      <Image
        src="https://web-res-ccc.afunimg8.com/cdn-cgi/image/format=auto/C02/_E/activity/inviteWheel2/award_title.png?t=20241121"
        alt="" importance="auto" class="absolute left-0 right-0 mx-auto !h-[99px] top-[-51px]"
      />
      <div>
        <h3 class="font-bold text-e-linear-color-10 italic text-[26px]">
          Get {{ toCurrency(freeAmount) }} for free
        </h3>
        <Image
          src="https://web-res-ccc.afunimg8.com/cdn-cgi/image/format=auto/C02/_E/activity/inviteWheel2/award1.png"
          alt="" importance="auto" class="-rotate-90 mx-auto !h-[91px]"
        />
        <div class="mt-[20px]">
          <div
            class="invite-wheel2-sum font-[800] relative text-[54px]"
            :data-text="toCurrency(number)"
          >
            {{ toCurrency(number) }}
          </div>
          <p class="text-white font-medium leading-[1] text-[24px]">
            <span class="text-[--bc-bgColor10]">{{ toCurrency(freeAmount - (rouletteInfo?.totalSpinAmount ?? 0))
            }}</span> more for withdrawal.
          </p>
        </div>
      </div><button class="h-[69px] font-bold text-[--bc-textColor3] rounded-full bg-color-linear-24">
        <h3 class="text-[21px]">
          Convide amigos
        </h3>
        <h4 class="text-[15px]">
          To help with withdrawals
        </h4>
      </button>
      <i
        class="inline-block h-[max-content] w-[max-content] icon-new-clean-6 cursor-pointer text-[--bc-transparentColor80] absolute left-0 right-0 mx-auto translate-y-[100%] text-[40px] bottom-[-28px]"
        @click="show = false"
      />
    </div>
  </BaseModal>
</template>
