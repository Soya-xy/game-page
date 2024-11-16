export function useLoading() {
  const isLoading = useState('isLoading', () => true)

  function loading() {
    isLoading.value = true
  }

  return {
    isLoading,
    loading,
  }
}
