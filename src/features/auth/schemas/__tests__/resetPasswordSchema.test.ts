import { describe, expect, it } from "vitest";
import { resetPasswordSchema } from "../resetPasswordSchema";

describe('resetPasswordSchema', () => {
    it('AUTH-070 - Debe rechazar una contraseña con menos de 8 caracteres', () => {
        // Arrange
        const data = {
            new_password: 'Abc1!'
        }

        // Act
        const result = resetPasswordSchema.safeParse(data)

        // Assert
        expect(result.success).toBe(false)
        expect(result.error?.issues[0].message).toBe("La contraseña debe tener al menos 8 caracteres")
    })

    it('AUTH-071 - Debe rechazar una contraseña que no tenga por lo menos una mayúscula', () => {
        // Arrange
        const data = {
            new_password: 'abc123!x'
        }

        // Act
        const result = resetPasswordSchema.safeParse(data)

        // Assert
        expect(result.success).toBe(false)
        expect(result.error?.issues[0].message).toBe('La contraseña debe contener al menos una letra mayúscula')
    })

    it('AUTH-072 - Debe rechazar una contraseña que no tenga por lo menos una minúscula', () => {
        // Arrange
        const data = {
            new_password: 'ABC123!X'
        }

        // Act
        const result = resetPasswordSchema.safeParse(data)

        // Assert
        expect(result.success).toBe(false)
        expect(result.error?.issues[0].message).toBe('La contraseña debe contener al menos una letra minúscula')
    })

    it('AUTH-073 - Debe rechazar una contraseña que no tenga por lo menos un número', () => {
        // Arrange
        const data = {
            new_password: 'Abcdefg!'
        }

        // Act
        const result = resetPasswordSchema.safeParse(data)

        // Assert
        expect(result.success).toBe(false)
        expect(result.error?.issues[0].message).toBe('La contraseña debe contener al menos un número')
    })

    it('AUTH-074 - Debe rechazar una contraseña que no tenga por lo menos un caracter especial', () => {
        // Arrange
        const data = {
            new_password: 'Abcdefg1'
        }

        // Act
        const result = resetPasswordSchema.safeParse(data)

        // Assert
        expect(result.success).toBe(false)
        expect(result.error?.issues[0].message).toBe('La contraseña debe contener al menos un caracter especial (! @ # $ _)')
    })
})