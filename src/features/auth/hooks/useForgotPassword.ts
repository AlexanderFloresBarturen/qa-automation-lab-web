import { useMutation } from '@tanstack/react-query'
import type { ForgotPasswordRequest } from '../types'
import { authApi } from '../api'

export function useForgotPassword() {
  return useMutation({
    mutationFn: (data: ForgotPasswordRequest) => authApi.forgotPassword(data),
  })
}
