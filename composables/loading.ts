export function useLoading() {
  const isLoading = useState('isLoading', () => true)
  const isPageLoading = useState('isPageLoading', () => true)

  function loading() {
    isLoading.value = true
  }

  return {
    isLoading,
    isPageLoading,
    loading,
  }
}
