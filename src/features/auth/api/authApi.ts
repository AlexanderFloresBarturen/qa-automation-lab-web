import { httpClient } from '@/shared/api'

import type {
  LoginResponse,
  LoginRequest,
  ForgotPasswordRequest,
  ForgotPasswordResponse,
} from '../types'

export const authApi = {
  async login(request: LoginRequest): Promise<LoginResponse> {
    const body = new URLSearchParams()

    body.append('username', request.email)
    body.append('password', request.password)

    const response = await httpClient.post<LoginResponse>('/auth/login', body)

    return response.data
  },

  async forgotPassword(
    request: ForgotPasswordRequest,
  ): Promise<ForgotPasswordResponse> {
    const response = await httpClient.post<ForgotPasswordResponse>(
      '/auth/forgot-password',
      request,
    )

    return response.data
  },
}
