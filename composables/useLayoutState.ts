import type { LayoutKey } from '#build/types/layouts'

export function useLayoutState() {
  const { width } = useWindowSize()
  const ready = ref(false)
  const defaultLayout: MaybeRef<Ref<LayoutKey>> = useState('defaultLayout', () => 'default')

  // 只在客户端执行布局切换
  onMounted(() => {
    ready.value = true
    watch(width, (newWidth) => {
      defaultLayout.value = newWidth <= 640 ? 'wap' : 'default'
    }, { immediate: true })
  })

  return {
    layout: defaultLayout,
    ready,
  }
}
