import { useForm } from 'react-hook-form'
import { type ForgotPasswordFormData, forgotPasswordSchema } from '../schemas'
import { zodResolver } from '@hookform/resolvers/zod'

export function useForgotPasswordForm() {
  return useForm<ForgotPasswordFormData>({
    resolver: zodResolver(forgotPasswordSchema),

    defaultValues: { email: '' },
    mode: 'onBlur',
  })
}
