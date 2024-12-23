import { spinRoulette } from '~/api/roulette'

export function useRoulette(emit?: any) {
  // 发出结束事件

  const buttonBg = computed(() => `url(https://web-res-ccc.afunimg8.com/cdn-cgi/image/format=auto/C02/_E/activity/inviteWheel2/button${rouletteInfo.value?.tickets}.png)`)

  const inviteWheel = computed(() => ({
    border: `url(https://web-res-ccc.afunimg8.com/cdn-cgi/image/format=auto/C02/_E/activity/inviteWheel2/base.png)`,
    light: `url(https://web-res-ccc.afunimg8.com/cdn-cgi/image/format=auto/C02/_E/activity/inviteWheel2/light1.png)`,
    dark: `url(https://web-res-ccc.afunimg8.com/cdn-cgi/image/format=auto/C02/_E/activity/inviteWheel2/light2.png)`,
    spin: `url(https://web-res-ccc.afunimg8.com/cdn-cgi/image/format=auto/C02/_E/activity/inviteWheel2/spin.png?t=20241126)`,
  }))

  const nowRotate = ref(0)
  const isAnimating = ref(false)
  const targetAngle = ref(0)
  const animationStart = ref(0)
  const playCount = ref(0)
  const disangle = ref(10)
  const isSlowDown = ref(false)
  const windowAnimation = ref<any>(null)
  const targetIndex = ref(0)
  const isSpinning = ref(false)
  const totalRotations = ref(0) // Speed configuration for smooth deceleration
  const speedConfig = Array.from({ length: 200 }, (_, i) => ({
    duration: 360 + i * 3,
    speed: Math.max(0.9, 10 - (i * 0.05)),
  }))
  const slowDownAngle = 360 * 1.2 // 剩余多少圈的时候开始减速,这里调整减速后的旋转时间
  const additionalRotations = 5 * 360 // 额外旋转5圈，这里调整减速前转多少圈

  // 计算目标角度
  function calculateTargetAngle(index: number) {
    const singleSlice = 360 / 8 // 每个奖品占45度
    // 计算基础角度，从270度开始，确保在0-360之间
    const baseAngle = (270 - (index * singleSlice) + 360) % 360
    return baseAngle
  }

  function updateAnimation() {
    playCount.value++

    if (!isSlowDown.value) {
      const remainingAngle = targetAngle.value - (totalRotations.value * 360 + nowRotate.value)

      if (remainingAngle < slowDownAngle) {
        isSlowDown.value = true
        const timeElapsed = new Date().getTime() - animationStart.value
        const avgSpeed = timeElapsed / playCount.value
        const decelerationSteps = Math.min(Math.max(Math.ceil(slowDownAngle / avgSpeed), 30), 199)
        disangle.value = speedConfig[decelerationSteps]!.speed
      }
    }

    if (isSlowDown.value) {
      disangle.value = Math.max(disangle.value * 0.98, 0.9)
    }

    // 更新旋转角度，保持在 0-360 之间
    nowRotate.value = (nowRotate.value + disangle.value) % 360

    // 如果过了360度，增加圈数
    if (nowRotate.value < disangle.value) {
      totalRotations.value++
    }

    // 检查是否结束
    const currentTotalAngle = totalRotations.value * 360 + nowRotate.value
    if (isSlowDown.value && currentTotalAngle >= targetAngle.value - 1) {
      nowRotate.value = targetAngle.value % 360
      isAnimating.value = false
      isSpinning.value = false
      emit('spinEnd', {
        index: targetIndex.value,
        prize: rouletteList.value[targetIndex.value],
      })
      return
    }

    windowAnimation.value = requestAnimationFrame(updateAnimation)
  }

  async function spin() {
    if (isSpinning.value)
      return

    try {
      if (!rouletteInfo.value) {
        return
      }

      if (rouletteInfo.value.totalSpinAmount === rouletteInfo.value.freeAmount) {
        return
      }

      if ((rouletteInfo.value?.tickets || 0) <= 0) {
        emit('showInvite')
        return
      }
      const res = await spinRoulette()
      spinResult.value = res
      rouletteInfo.value.tickets = (rouletteInfo.value?.tickets || 0) - 1
      const index = rouletteList.value.findIndex(item => item.id === res.spinId)
      startRotate(index)
    }
    catch (e) {
      console.error(e)
    }
  }

  // 修改 startRotate 函数
  function startRotate(index: number) {
    if (isSpinning.value)
      return

    targetIndex.value = Math.max(0, Math.min(7, index))

    isAnimating.value = true
    isSpinning.value = true
    playCount.value = 0
    isSlowDown.value = false
    disangle.value = 10
    animationStart.value = new Date().getTime()
    totalRotations.value = 0 // 重置圈数

    // 基础角度加上额外的圈数
    const baseAngle = calculateTargetAngle(targetIndex.value)
    targetAngle.value = baseAngle + additionalRotations
    requestAnimationFrame(updateAnimation)
  }

  // 修改 clear 函数
  function clear() {
    if (windowAnimation.value) {
      cancelAnimationFrame(windowAnimation.value)
    }
    isAnimating.value = false
    isSpinning.value = false
    nowRotate.value = 0
    targetAngle.value = 0
    totalRotations.value = 0
  }

  // Clean up on component unmount
  onUnmounted(() => {
    clear()
  })
  return {
    inviteWheel,
    nowRotate,
    spin,
    emit,
    buttonBg,
  }
}
