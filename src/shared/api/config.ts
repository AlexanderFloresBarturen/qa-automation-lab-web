const API_URL = import.meta.env.VITE_API_URL

if (!API_URL) {
  throw new Error('La variable VITE_API_URL no está definida.')
}

export const apiConfig = {
  baseURL: API_URL,
} as const
