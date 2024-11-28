export default defineNuxtRouteMiddleware((to) => {
  const { openRouterModal } = useModal()
  const { isPc } = useDevice()
  if (to.path !== '/login')
    return

  if (!isPc.value)
    return

  return openRouterModal('login')
})
