export default defineEventHandler(async (event) => {
  const url = `/product/category/list-by-id`
  const cookies = parseCookies(event)
  const query = getQuery(event)

  const data = await $ajax(url, {
    headers: {
      'Authorization': `Bea rer ${cookies.token}`,
      'Accept-Language': cookies.i18n_redirected,
    },
    method: 'GET',
    params: query,
  })
  return data
})
