import { registerAccessTokenProvider } from '@/shared/api'
import { tokenStorage } from '@/features/auth'

export function configureHttpClient() {
  registerAccessTokenProvider(() => tokenStorage.get())
}
