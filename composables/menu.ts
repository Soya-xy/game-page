export function useMenu() {
  const isOpen = useState('isOpen', () => true)
  const isShowTop = useState('isShowTop', () => true)
  function toggleMenu() {
    isOpen.value = !isOpen.value
  }

  return {
    isOpen,
    isShowTop,
    toggleMenu,
  }
}
