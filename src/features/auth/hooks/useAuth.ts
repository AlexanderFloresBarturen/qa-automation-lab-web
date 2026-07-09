import { tokenStorage } from '@/features/auth'

export function useAuth() {
  const access_token = tokenStorage.get()

  return { access_token, isAuthenticated: tokenStorage.exists() }
}
