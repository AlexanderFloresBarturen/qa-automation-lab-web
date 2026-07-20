import { z } from 'zod'

export const loginSchema = z.object({
  email: z.email('El correo electrónico no es válido'),

  password: z.string().min(1, 'La contraseña es obligatoria'),
})

export type LoginFormData = z.infer<typeof loginSchema>
