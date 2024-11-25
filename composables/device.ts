export function useDevice() {
  const isMobile = useMediaQuery('(min-width: 640px)')
  console.log('🚀 ~ useDevice ~ isMobile:', isMobile)

  return {
    isMobile,
  }
}
