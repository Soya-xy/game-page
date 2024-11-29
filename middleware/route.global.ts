import { isEmpty } from 'ramda'

const needModalPath = ['/login', '/register']
export default defineNuxtRouteMiddleware((to, from) => {
  const { openRouterModal } = useModal()
  const { isPc } = useDevice()
  if (to.path === from.path)
    return
  // TODO: Server端无法获取hash，所以需要手动处理
  if (!isEmpty(to.hash)) {
    if (isPc.value) {
      openRouterModal(to.path)
      return
    }
  }

  if (needModalPath.includes(to.path)) {
    if (isPc.value) {
      openRouterModal(to.path)
      return navigateTo({
        path: from.path,
        query: from.query,
        hash: `#${to.path}`,
      })
    }
    else {
      navigateTo(to.path)
    }
  }

  if (to.path !== '/login')
    return

  if (!isPc.value)
    return

  return openRouterModal('login')
})
