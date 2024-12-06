import { isEmpty } from 'ramda'

// 需要弹窗的路由
const needModalPath = ['/login', '/register', '/gametag/hot']

export default defineNuxtRouteMiddleware(async (to, from) => {
  const { openRouterModal } = useModal()
  const { isPc } = useDevice()

  // 过渡效果只在移动端生效
  if (to.path !== from.path && !isPc.value) {
    const pageToIndex = to.meta.pageIndex as number
    const pageFromIndex = from.meta.pageIndex as number
    if (pageToIndex > pageFromIndex) {
      to.meta.pageTransition = from.meta.pageTransition = {
        name: 'app-slide-left',
        mode: 'in-out',
      }
    }
    else {
      to.meta.pageTransition = from.meta.pageTransition = {
        name: 'app-slide-right',
        mode: 'in-out',
      }
    }
  }
  else {
    to.meta.pageTransition = from.meta.pageTransition = {}
  }

  // 客户端获取用户信息
  if (import.meta.client) {
    window.scrollTo(0, 0)
    const userStore = useUserStore()
    if (userStore.token) {
      userStore.getUserInfo()
    }
  }

  // 如果路由相同，则不进行操作
  if (to.path === from.path)
    return
  // TODO: Server端无法获取hash，所以需要手动处理
  if (!isEmpty(to.hash)) {
    if (isPc.value) {
      openRouterModal(to.path, {
        hash: `#${to.path}`,
      })
      return
    }
  }

  // 需要弹窗的路由 pc端需要弹窗，移动端需要跳转
  if (needModalPath.includes(to.path)) {
    if (isPc.value) {
      openRouterModal(to.path, {
        hash: `#${to.path}`,
      })

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

  return true
})
