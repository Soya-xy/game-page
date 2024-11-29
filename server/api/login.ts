export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  if (body.accessToken) {
    setCookie(event, 'token', body.accessToken)
  }
  return true
})
