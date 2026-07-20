import { beforeEach, describe, expect, it } from 'vitest'
import { tokenStorage } from '../tokenStorage'

describe('tokenStorage', () => {
  beforeEach(() => {
    localStorage.clear()
  })

  it('AUTH-001 - Debe almacenar el token', () => {
    // Arrange
    const token = 'abc123'

    // Act
    tokenStorage.save(token)

    // Assert
    expect(localStorage.getItem('access_token')).toBe(token)
  })

  it('AUTH-002 - Debe recuperar el token almacenado', () => {
    // Arrange
    const token = 'abc123'
    localStorage.setItem('access_token', token)

    // Act
    const result = tokenStorage.get()

    // Assert
    expect(result).toBe(token)
  })

  it('AUTH-003 - Debe eliminar el token almacenado', () => {
    // Arrange
    const token = 'abc123'
    localStorage.setItem('access_token', token)

    // Act
    tokenStorage.remove()

    // Assert
    expect(localStorage.getItem(token)).toBeNull()
  })

  it('AUTH-004 - Debe indicar que existe un token almacenado', () => {
    // Arrange
    const token = 'abc123'
    localStorage.setItem('access_token', token)

    // Act
    const result = tokenStorage.exists()

    // Assert
    expect(result).toBe(true)
  })

  it('AUTH-005 - Debe indicar que no existe un token almacenado', () => {
    // Arrange
    // No se almacena ningún token

    // Act
    const result = tokenStorage.exists()

    // Assert
    expect(result).toBe(false)
  })
})
