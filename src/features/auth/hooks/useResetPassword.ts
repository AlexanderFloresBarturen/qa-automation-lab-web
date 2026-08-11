import { useMutation } from '@tanstack/react-query'
import type { ResetPasswordRequest } from '../types'
import { authApi } from '../api'

export function useResetPassword() {
  return useMutation({
    mutationFn: (data: ResetPasswordRequest) => authApi.resetPassword(data),
  })
}
