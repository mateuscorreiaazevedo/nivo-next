import { create } from 'axios'
import env from '@/config/env'

const BASE_URL = env.baseUrl
export const api = create({
  baseURL: BASE_URL,
})
