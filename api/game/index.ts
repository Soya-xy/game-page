/**
 * 添加收藏
 * @param spuId 游戏 SPU
 * @returns
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
 * @returns
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
 * @returns
 */
export async function getFavorite(spuId: number | string) {
  return useNuxtApp().$clientApi<boolean>('/product/favorite/exits', {
    params: {
      spuId,
    },
  })
}
