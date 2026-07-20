import { describe, expect, it } from 'vitest'
import { loginSchema } from '../loginSchema'

describe('loginSchema', () => {
  it('AUTH-040 - Debe aceptar credenciales válidas', () => {
    // Arrange
    const credenciales = {
      email: 'admin@test.com',
      password: 'Password123!',
    }

    // Act
    const result = loginSchema.safeParse(credenciales)

    // Assert
    expect(result.success).toBe(true)
  })

  it('AUTH-041 - Debe rechazar un correo inválido', () => {
    // Arrange
    const credenciales = {
      email: 'admin_test.com',
      password: 'Password123!',
    }

    // Act
    const result = loginSchema.safeParse(credenciales)

    // Assert
    expect(result.success).toBe(false)
    expect(result.error?.issues[0]).toMatchObject({
      path: ['email'],
      message: 'El correo electrónico no es válido',
    })
  })

  it('AUTH-042 - Debe verificar que se haya ingresado una contraseña', () => {
    // Arrange
    const credenciales = {
      email: 'admin@test.com',
      password: '',
    }

    // Act
    const result = loginSchema.safeParse(credenciales)

    // Assert
    expect(result.success).toBe(false)
    expect(result.error?.issues[0]).toMatchObject({
      path: ['password'],
      message: 'La contraseña es obligatoria',
    })
  })
})
