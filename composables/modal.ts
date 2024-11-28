export interface PageRoute {
  path: string | undefined
  clickOutClose?: boolean
}

export function useModal() {
  const { isPc } = useDevice()
  const routerPush = useRouter()
  const router = useState<PageRoute>('modal-path', () => ({
    path: undefined,
  }))

  async function openRouterModal(route: string, option: Omit<PageRoute, 'path'> = {}) {
    if (!isPc.value) {
      routerPush.push(route)
      return
    }

    router.value = { ...option, path: route }
  }

  return {
    openRouterModal,
    router,
  }
}
