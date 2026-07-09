import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

import { loginSchema, type LoginFormData } from '@/features/auth'

export function useLoginForm() {
  return useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),

    defaultValues: { email: '', password: '' },

    mode: 'onBlur',
  })
}
