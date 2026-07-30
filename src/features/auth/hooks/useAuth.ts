import { tokenStorage } from '../storage'

export function useAuth() {
  const access_token = tokenStorage.get()

  return { access_token, isAuthenticated: tokenStorage.exists() }
}
