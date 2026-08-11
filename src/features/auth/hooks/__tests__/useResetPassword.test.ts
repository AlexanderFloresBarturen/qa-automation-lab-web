import { beforeEach, describe, expect, it, vi } from 'vitest'
import { authApi } from '../../api'
import { createQueryWrapper } from '@/test'
import { act, renderHook, waitFor } from '@testing-library/react'
import { useResetPassword } from '../useResetPassword'

vi.mock('../../api', () => ({
  authApi: {
    resetPassword: vi.fn(),
  },
}))

beforeEach(() => {
  vi.resetAllMocks()
})

describe('useResetPassword', () => {
  it('AUTH-060 - Debe reestablecer la contraseña correctamente', async () => {
    // Arrange
    const request = {
      token: 'abc123',
      new_password: 'NewPassword123!',
    }

    const response = {
      message: 'Password successfully reset',
    }

    vi.mocked(authApi.resetPassword).mockResolvedValue(response)

    const { wrapper } = createQueryWrapper()

    // Act
    const { result } = renderHook(() => useResetPassword(), { wrapper })

    await act(async () => {
      await result.current.mutateAsync(request)
    })

    await waitFor(() => {
      expect(result.current.isSuccess).toBe(true)
    })

    // Assert
    expect(vi.mocked(authApi.resetPassword).mock.calls[0][0]).toEqual(request)
    expect(result.current.data).toEqual(response)
  })

  it('AUTH-061 - Debe exponer el error cuando el servicio de restablecimiento de contraseña falla', async () => {
    // Arrange
    const request = {
      token: 'abc123',
      new_password: 'NewPassword123!',
    }

    const error = new Error('Internal server error')
    vi.mocked(authApi.resetPassword).mockRejectedValue(error)

    const { wrapper } = createQueryWrapper()

    // Act
    const { result } = renderHook(() => useResetPassword(), { wrapper })

    await act(async () => {
      try {
        await result.current.mutateAsync(request)
      } catch {
        // Error esperado para verificar el estado del hook
      }
    })

    await waitFor(() => {
      expect(result.current.isError).toBe(true)
    })

    // Assert
    expect(vi.mocked(authApi.resetPassword).mock.calls[0][0]).toEqual(request)
    expect(result.current.error).toBe(error)
  })
})
