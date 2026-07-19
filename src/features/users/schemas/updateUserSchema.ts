import { z } from 'zod'

export const updateUserSchema = z.object({
  name: z
    .string()
    .min(2, 'El nombre de contener al menos 2 caracteres')
    .max(50),

  email: z.email('Invalid email'),

  age: z.number().min(18).max(65),
})

export type UpdateUserFormData = z.infer<typeof updateUserSchema>
