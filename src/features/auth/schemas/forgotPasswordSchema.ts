import z from 'zod'

export const forgotPasswordSchema = z.object({
  email: z.email('El correo electrónico no es válido'),
})

export type ForgotPasswordFormData = z.infer<typeof forgotPasswordSchema>
