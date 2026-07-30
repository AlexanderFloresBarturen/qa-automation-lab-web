import { beforeEach, describe, expect, it, vi } from 'vitest'

vi.mock('../../api', () => ({
  authApi: {
    login: vi.fn(),
  },
}))

import { authApi } from '../../api'
import { useLogin } from '../useLogin'

describe('useLogin', () => {
  beforeEach(() => {
    localStorage.clear()
  })

  it('AUTH-030 - Debe devolver un json con los campos access_token y token_type', async () => {
    // Arrange
    vi.mocked(authApi.login).mockResolvedValue({
      access_token: 'abc123',
      token_type: 'Bearer',
    })

    // Act
    const { login } = useLogin()
    const response = await login({
      email: 'admin@test.com',
      password: 'Password123!',
    })

    // Assert
    expect(authApi.login).toHaveBeenCalledWith({
      email: 'admin@test.com',
      password: 'Password123!',
    })

    expect(response).toEqual({
      access_token: 'abc123',
      token_type: 'Bearer',
    })
  })

  it('AUTH-031 - Debe propagar el error cuando la autenticación falla', async () => {
    // Arrange
    const error = new Error('Invalid credentials')
    vi.mocked(authApi.login).mockRejectedValue(error)

    // Act
    const { login } = useLogin()

    // Assert
    await expect(
      login({
        email: 'admin@test.com',
        password: 'Password123!',
      }),
    ).rejects.toThrow('Invalid credentials')
  })

  it('AUTH-032 - Debe almacenar el token en el localStorage', async () => {
    // Arrange
    vi.mocked(authApi.login).mockResolvedValue({
      access_token: 'abc123',
      token_type: 'Bearer',
    })

    // Act
    const { login } = useLogin()
    await login({
      email: 'admin@test.com',
      password: 'Password123!',
    })

    // Assert
    expect(localStorage.getItem('access_token')).toBe('abc123')
  })
})
