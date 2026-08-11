import { describe, expect, it } from 'vitest'

import { forgotPasswordSchema } from '../forgotPasswordSchema'

describe('forgotPasswordSchema', () => {
    it('AUTH-080 - Debe aceptar un correo electrónico válido', () => {
        // Arrange
        const data = {
            email: 'alex@test.com'
        }

        // Act
        const result = forgotPasswordSchema.safeParse(data)

        // Assert
        expect(result.success).toBe(true)
    })

    it('AUTH-081 - Debe rechazar un correo electrónico inválido', () => {
        // Arrange
        const data = {
            email: 'alex.test.com'
        }

        // Act
        const result = forgotPasswordSchema.safeParse(data)

        // Assert
        expect(result.success).toBe(false)
        expect(result.error?.issues[0].message).toBe(
            'El correo electrónico no es válido'
        )
    })
})