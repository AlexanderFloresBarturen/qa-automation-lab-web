import { beforeEach, describe, expect, it, vi } from 'vitest'
import { usersApi } from '../../api'
import { createQueryWrapper } from '@/test'
import { renderHook, waitFor } from '@testing-library/react'
import { useDeleteUser } from '../useDeleteUser'
import { act } from 'react'

vi.mock('../../api', () => ({
  usersApi: {
    delete: vi.fn(),
  },
}))

beforeEach(() => {
  vi.resetAllMocks()
})

describe('useDeleteUser', () => {
  it('USER-050 - Debe eliminar un usuario correctamente', async () => {
    // Arrange
    vi.mocked(usersApi.delete).mockResolvedValue(undefined)
    const { wrapper } = createQueryWrapper()

    // Act
    const { result } = renderHook(() => useDeleteUser(), { wrapper })

    await act(async () => {
      await result.current.mutateAsync(1)
    })

    await waitFor(() => {
      expect(result.current.isSuccess).toBe(true)
    })

    // Assert
    expect(usersApi.delete).toHaveBeenCalledWith(1)
  })

  it('USER-051 - Debe exponer el error cuando el servicio de usuarios falla', async () => {
    // Arrange
    const error = new Error('Internal Server Error')
    vi.mocked(usersApi.delete).mockRejectedValue(error)
    const { wrapper } = createQueryWrapper()

    // Act
    const { result } = renderHook(() => useDeleteUser(), { wrapper })

    await act(async () => {
      try {
        await result.current.mutateAsync(1)
      } catch {
        // Error esperado para verificar el estado del hook
      }
    })

    await waitFor(() => {
      expect(result.current.isError).toBe(true)
    })

    // Assert
    expect(usersApi.delete).toHaveBeenCalledWith(1)
    expect(result.current.error).toBe(error)
  })

  it('USER-052 - Debe invalidar ["users"] luego de eliminar un usuario', async () => {
    // Arrange
    vi.mocked(usersApi.delete).mockResolvedValue(undefined)
    const { wrapper, queryClient } = createQueryWrapper()

    // Espiar invalidateQueries
    const invalidateQueriesSpy = vi.spyOn(queryClient, 'invalidateQueries')

    // Act
    const { result } = renderHook(() => useDeleteUser(), { wrapper })

    await act(async () => {
      await result.current.mutateAsync(1)
    })

    await waitFor(() => {
      expect(result.current.isSuccess).toBe(true)
    })

    // Assert
    expect(invalidateQueriesSpy).toHaveBeenCalledWith({ queryKey: ['users'] })
  })
})
