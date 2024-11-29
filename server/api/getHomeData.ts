export default defineEventHandler(async (event) => {
  const url = `/promotion/homepage-layout/home-list-all`
  const cookies = parseCookies(event)

  const data = await $ajax(url, {
    headers: {
      'Authorization': `Bearer ${cookies.token}`,
      'Accept-Language': cookies.i18n_redirected,
    },
  })
  return data
})
