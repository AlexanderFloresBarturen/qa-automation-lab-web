import { tokenStorage } from '../storage'

export function useLogout() {
  function logout() {
    tokenStorage.remove()
  }
  return { logout }
}
