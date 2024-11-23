import { isClient } from '@vueuse/core'

export function useDevice() {
  const isMobile = ref(false)
  // 使用屏幕宽度判断是否是移动端
  if (isClient) {
    isMobile.value = window.innerWidth <= 640

    window.addEventListener('resize', () => {
      isMobile.value = window.innerWidth <= 640
    })
  }

  return {
    isMobile,
  }
}
