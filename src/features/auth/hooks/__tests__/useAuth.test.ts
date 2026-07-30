import { beforeEach, describe, expect, it } from 'vitest'
import { useAuth } from '../useAuth'

describe('useAuth', () => {
  beforeEach(() => {
    localStorage.clear()
  })

  it('AUTH-010 - Debe indicar que el usuario está autenticado', () => {
    // Arrange
    localStorage.setItem('access_token', 'abc123')

    // Act
    const result = useAuth()

    // Assert
    expect(result.access_token).toBe('abc123')
    expect(result.isAuthenticated).toBe(true)
  })

  it('AUTH-011 - Debe indicar que el usuario no está autenticado', () => {
    // Arrange
    // No se guarda ningún token

    // Act
    const result = useAuth()

    // Assert
    expect(result.access_token).toBeNull()
    expect(result.isAuthenticated).toBe(false)
  })
})
