import { passwordSchema } from '@/shared/validation'
import z from 'zod'

export const resetPasswordSchema = z.object({
  new_password: passwordSchema,
})

export type ResetPasswordFormData = z.infer<typeof resetPasswordSchema>
