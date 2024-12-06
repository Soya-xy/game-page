export function useTrack(fn: any, delay: number = 300) {
  return useThrottleFn(fn, delay)
}
