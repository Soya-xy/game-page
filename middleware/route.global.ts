import { isEmpty } from 'ramda'

// 需要弹窗的路由
const needModalPath = ['/login', '/register', '/gametag/hot', '/profile']

export default defineNuxtRouteMiddleware(async (to, from) => {
  const { openRouterModal } = useModal()
  const { isPc } = useDevice()
  const i18n = useNuxtApp().$i18n
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

  const needModal = needModalPath.find(path => to.path.includes(path))
  let toHash = to.hash
  let toPath = to.path
  if (i18n.defaultLocale !== i18n.locale.value) {
    toHash = to.hash.replaceAll(`/${i18n.locale.value}`, '')
    toPath = to.path.replaceAll(`/${i18n.locale.value}`, '')
  }

  // 需要弹窗的路由 pc端需要弹窗，移动端需要跳转
  if (needModal) {
    // 获取当前i18n的locale
    if (isPc.value) {
      openRouterModal(toPath, {
        hash: `#${toPath}`,
      })
      return navigateTo({
        path: from.path,
        query: from.query,
        hash: `#${toPath}`,
      })
    }
  }

  // 客户端获取路由信息 首屏需要获取路由信息
  if (import.meta.client && to.fullPath === from.fullPath) {
    window.scrollTo(0, 0)
    const userStore = useUserStore()
    if (userStore.token) {
      userStore.getUserInfo()
    }

    // Server端无法获取hash，所以需要在客户端处理
    if (!isEmpty(toHash)) {
      if (isPc.value) {
        openRouterModal(toHash.slice(1), {
          hash: toHash,
        })
      }
    }
  }
})
