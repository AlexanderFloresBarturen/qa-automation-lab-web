import { z } from 'zod'

export const passwordSchema = z
  .string()
  .min(8, 'La contraseña debe tener la menos 8 caracteres')
  .regex(/[A-Z]/, 'La contraseña debe contener al menos una letra mayúscula')
  .regex(/[a-z]/, 'La contraseña debe contener al menos una letra minúsucla')
  .regex(/[0-9]/, 'La contraseña debe contener al menos un número')
  .regex(
    /[!@#$_]/,
    'La contraseña debe contener al menos un caracter especial (! @ # $ _)',
  )
