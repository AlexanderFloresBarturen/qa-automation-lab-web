import { authApi } from '@/features/auth/api'
import { tokenStorage } from '@/features/auth'

import type { LoginFormData, LoginResponse } from '@/features/auth'

export function useLogin() {
  async function login(data: LoginFormData): Promise<LoginResponse> {
    const response = await authApi.login({
      email: data.email,
      password: data.password,
    })

    tokenStorage.save(response.access_token)

    return response
  }
  return { login }
}
