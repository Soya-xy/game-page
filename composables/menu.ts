export function useMenu() {
  const isOpen = useState('isOpen', () => true)

  function toggleMenu() {
    isOpen.value = !isOpen.value
  }

  return {
    isOpen,
    toggleMenu,
  }
}
