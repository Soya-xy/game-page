export default defineEventHandler(async (event) => {
  const url = `/product/category/list`
  const cookies = parseCookies(event)

  const data = await $ajax(url, {
    headers: {
      'Authorization': `Bearer ${cookies.token}`,
      'Accept-Language': cookies.i18n_redirected,
    },
  })
  return data
})
