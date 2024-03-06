import env from '@/config/env'

const BASE_URL = env.baseUrl
export const api = async (url: string) => {
  return await fetch(`${BASE_URL}${url}`)
}
