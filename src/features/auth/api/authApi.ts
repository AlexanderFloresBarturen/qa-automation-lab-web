import { httpClient } from '@/shared/api'

import type { LoginResponse, LoginRequest } from '@/features/auth'

export const authApi = {
  async login(request: LoginRequest): Promise<LoginResponse> {
    const body = new URLSearchParams()

    body.append('username', request.email)
    body.append('password', request.password)

    const response = await httpClient.post<LoginResponse>('/login', body)

    return response.data
  },
}
