export interface RedPacketImage {
  id: string | number
  type: 1 | 2 // 1 或 2 对应不同红包图片
  left: number // vw 单位的左偏移
  rotation: number
  delay: number
  duration: number
  opacity: number
  zIndex: number
}

export function useRedPacket() {
  const redPackets = ref<RedPacketImage[]>([])
  const isAnimating = ref(false)

  // 生成单个红包数据
  const generatePacket = (id: number, left: number): RedPacketImage => ({
    id,
    left,
    rotation: Math.random() * 360,
    duration: 2000 + Math.random() * 2000, // 2-4秒的随机动画时间
    delay: Math.random() * 1000, // 0-1秒的随机延迟
    opacity: 0.8 + Math.random() * 0.2,
    zIndex: 3000 + Math.floor(Math.random() * 100),
    type: Math.random() > 0.5 ? 1 : 2,
  })

  // 生成一批红包
  const generateBatch = () => {
    const batchSize = 15 + Math.floor(Math.random() * 10) // 每批15-25个红包

    const newPackets = Array.from({ length: batchSize }, (_, i) => {
      // 根据索引计算left值，确保均匀分布
      const segmentWidth = 100 / batchSize // 每个红包占据的宽度段
      const baseLeft = i * segmentWidth // 基础位置
      const randomOffset = (Math.random() - 0.5) * segmentWidth // 在段内随机偏移

      return generatePacket(Date.now() + i, Math.max(0, Math.min(100, baseLeft + randomOffset)))
    })
    redPackets.value = [...redPackets.value, ...newPackets]

    // 清理已经完成动画的红包
    setTimeout(() => {
      redPackets.value = redPackets.value.slice(batchSize)
    }, 4000) // 确保动画完成后再清理
  }

  const startAnimation = () => {
    isAnimating.value = true
    generateBatch() // 初始批次

    // 每隔一定时间生成新的一批
    const interval = setInterval(() => {
      if (isAnimating.value) {
        generateBatch()
      }
      else {
        clearInterval(interval)
      }
    }, 1000) // 每2秒生成一批新的红包

    // 组件卸载时清理
    onUnmounted(() => {
      clearInterval(interval)
      isAnimating.value = false
    })
  }

  const BASE_URL = 'https://web-res-ccc.afunimg8.com/cdn-cgi/image/format=auto/C02/activity/redpacket'

  const images = computed(() => ({
    redPacket1: `${BASE_URL}/redpacket_1.png?t20240102`,
    redPacket2: `${BASE_URL}/redpacket_2.png?t20240102`,
    bottom: `${BASE_URL}/redpacket_bottom_chri.png?t20240102`,
  }))

  return {
    redPackets,
    isAnimating,
    startAnimation,
    images,
  }
}
