export interface PageRoute {
  path: string | undefined
  clickOutClose?: boolean
}

export function useModal() {
  const router = useState<PageRoute>('modal-path', () => ({
    path: undefined,
  }))

  async function openRouterModal(route: string, option: Omit<PageRoute, 'path'> = {}) {
    router.value = { ...option, path: route }
  }

  return {
    openRouterModal,
    router,
  }
}
