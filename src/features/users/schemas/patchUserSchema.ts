import z from 'zod'

export const patchUserSchema = z.object({
  name: z.string().trim().min(2).max(50).optional(),
  email: z.email().trim().optional(),
  age: z.number().int().min(18).max(65).optional(),
})

export type PatchUserFormData = z.infer<typeof patchUserSchema>
