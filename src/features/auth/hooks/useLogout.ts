import { tokenStorage } from '@/features/auth'

export function useLogout() {
  function logout() {
    tokenStorage.remove()
  }
  return { logout }
}
