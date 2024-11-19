export function useModal() {
  const path = useState<string | undefined>('modal-path')
  async function openRouterModal(name: string) {
    path.value = name
  }

  return {
    openRouterModal,
    path,
  }
}
