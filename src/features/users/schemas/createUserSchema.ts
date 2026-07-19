import { passwordSchema } from '@/shared/validation/'
import { z } from 'zod'

export const createUserSchema = z.object({
  name: z
    .string()
    .min(2, 'El nombre debe contener al menos 2 caracteres')
    .max(50),

  email: z.email('Invalid email'),

  age: z.number().min(18).max(65),

  password: passwordSchema,
})

export type CreateUserFormData = z.infer<typeof createUserSchema>
