export function useDevice() {
  const isPc = useMediaQuery('(min-width: 640px)')

  return {
    isPc,
  }
}
