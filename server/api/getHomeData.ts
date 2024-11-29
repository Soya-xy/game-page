export default defineEventHandler(async () => {
  const url = `/promotion/homepage-layout/home-list-all`

  const data = await $ajax(url)
  return data
})
