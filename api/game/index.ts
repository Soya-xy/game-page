// const ProductListUrl = `/product/category/list-by-id`
const ProductSearchUrl = `/product/category/list-by-name`
const PopularListUrl = `/product/category/list-recommend-game`

export function getProductList(params: Record<string, any>) {
  return useNuxtApp().$clientApi(ProductSearchUrl, {
    params,
  })
}

export function getPopularList() {
  return useNuxtApp().$clientApi(PopularListUrl)
}

/**
 * 添加收藏
 * @param spuId 游戏 SPU
 */
export async function addFavorite(spuId: number | string) {
  return useNuxtApp().$clientApi('/product/favorite/create', {
    method: 'post',
    body: {
      spuId,
    },
  })
}

/**
 * 移除收藏
 * @param spuId 游戏 SPU
 */
export async function removeFavorite(spuId: number | string) {
  return useNuxtApp().$clientApi('/product/favorite/delete', {
    method: 'delete',
    body: {
      spuId,
    },
  })
}

/**
 * 获取是否收藏
 * @param spuId 游戏 SPU
 */
export async function getFavorite(spuId: number | string) {
  return useNuxtApp().$clientApi<boolean>('/product/favorite/exits', {
    params: {
      spuId,
    },
  })
}
