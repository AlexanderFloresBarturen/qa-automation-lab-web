import { beforeEach, describe, expect, it } from 'vitest'
import { useLogout } from '../useLogout'

describe('useLogout', () => {
  beforeEach(() => {
    localStorage.clear()
  })

  it('AUTH-020 - Debe borrar el token cuando el usuario cierra sesión', () => {
    // Arrange
    localStorage.setItem('access_token', 'abc123')

    // Act
    const { logout } = useLogout()
    logout()

    // Assert
    expect(localStorage.getItem('access_token')).toBeNull()
  })
})
