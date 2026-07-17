import { passwordSchema } from '@/shared/validation/'
import { z } from 'zod'

export const createUserSchema = z.object({
  name: z.string().min(2, 'Name must contain at least 2 characters').max(50),

  email: z.email('Invalid email'),

  age: z.number().min(18).max(65),

  password: passwordSchema,
})

export type CreateUserFormData = z.infer<typeof createUserSchema>
