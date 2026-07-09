import axios from 'axios'

import { apiConfig } from './config'

let accessTokenProvider: (() => string | null) | null = null

export function registerAccessTokenProvider(provider: () => string | null) {
  accessTokenProvider = provider
}

export const httpClient = axios.create({
  baseURL: apiConfig.baseURL,
})

httpClient.interceptors.request.use((config) => {
  const token = accessTokenProvider?.()

  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }

  return config
})
