export async function $ajax(url: string, option?: any) {
  const config = useRuntimeConfig()
  const api = $fetch.create({
    baseURL: config.public.appUrl,
  })

  return await api(url, option)
}
