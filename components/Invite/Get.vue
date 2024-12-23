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
  <BaseModal v-model:show="show" content-class="mx-auto min-w-[345px] md:min-w-[444px] max-w-[1414px] md:px-32px" no-close>
    <div
      class="text-center flex flex-col justify-between absolute left-0 right-0 top-0 bottom-0 m-auto border-radius-1 bg-no-repeat bg-[length:100%]  md:w-[520px] md:h-[422px] h-[280px] md:pt-[35px] pt-[23px] md:px-[45px] px-[30px] md:pb-[37px] pb-[23px] md:bg-[url(https://web-res-ccc.afunimg8.com/cdn-cgi/image/format=auto/C02/_E/activity/inviteWheel2/bg2.png)] bg-color2"
    >
      <Image
        src="https://web-res-ccc.afunimg8.com/cdn-cgi/image/format=auto/C02/_E/activity/inviteWheel2/award_title.png?t=20241121"
        alt="" importance="auto" class="absolute left-0 right-0 mx-auto md:!h-[99px] !h-[66px] md:top-[-51px] top-[-39px]"
      />
      <div>
        <h3 class="font-bold text-e-linear-color-10 italic md:text-[26px] text-[18px]">
          Get {{ toCurrency(freeAmount) }} for free
        </h3>
        <Image
          src="https://web-res-ccc.afunimg8.com/cdn-cgi/image/format=auto/C02/_E/activity/inviteWheel2/award1.png"
          alt="" importance="auto" class="-rotate-90 mx-auto md:!h-[91px] !h-[56px]"
        />
        <div class="mt-[20px] hidden md:block">
          <div
            class="invite-wheel2-sum font-[800] relative text-[54px]"
            :data-text="toCurrency(number)"
          >
            {{ toCurrency(number) }}
          </div>
          <p class="text-white font-medium leading-[1] text-[24px]">
            <span class="text-[--bc-bgColor10]">{{ toCurrency(freeAmount - (spinResult?.totalSpinAmount ?? 0))
            }}</span> more for withdrawal.
          </p>
        </div>
        <div class="bg-[--bc-bgColor12] md:hidden rounded-[8px] py-[10px] mt-[7px]">
          <div class="invite-wheel2-sum font-[800] relative text-[36px]" :data-text="toCurrency(number)">
            {{ toCurrency(number) }}
          </div>
          <p class="text-e-g-color-14 font-medium leading-[1] text-[16px]">
            <span class="text-[--bc-bgColor10]">{{ toCurrency(freeAmount - (spinResult?.totalSpinAmount ?? 0)) }}</span> more for withdrawal.
          </p>
        </div>
      </div>

      <button class="md:h-[69px] h-[46px] font-bold text-[--bc-textColor3] rounded-full bg-color-linear-24 mt-[20px] md:mt-0">
        <h3 class="md:text-[21px] text-[12px]">
          Invite friends
        </h3>
        <h4 class="md:text-[15px] text-[10px]">
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
