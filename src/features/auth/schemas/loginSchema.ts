import { z } from 'zod'

export const loginSchema = z.object({
  email: z
    .email('El correo electrónico no es válido')
    .max(100, 'El correo electrónico no puede superar los 100 caracteres'),

  password: z
    .string()
    .min(1, 'La contraseña es obligatoria')
    .max(100, 'La contraseña no puede superar los 100 caracteres'),
})

export type LoginFormData = z.infer<typeof loginSchema>
