export default defineNuxtRouteMiddleware((to) => {
  const { openRouterModal } = useModal()

  if (to.path !== '/login')
    return

  return openRouterModal('LoginIndex')
})
