export function useMenu() {
  const isOpen = useState('isOpen', () => true)
  const menuOpen = useState('menuOpen', () => false)
  const isTransition = useState('isTransition', () => false)

  function toggleMenu() {
    if (isOpen.value) {
      isOpen.value = false
      setTimeout(() => {
        menuOpen.value = true
      }, 300)
    }
    else {
      menuOpen.value = false
      setTimeout(() => {
        isOpen.value = true
      }, 300)
    }
  }

  return {
    isOpen,
    menuOpen,
    isTransition,
    toggleMenu,
  }
}
