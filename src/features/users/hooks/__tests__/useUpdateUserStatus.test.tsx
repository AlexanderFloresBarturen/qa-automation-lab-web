import { beforeEach, describe, expect, it, vi } from 'vitest'
import { usersApi } from '../../api'
import {
  createQueryWrapper,
  userDetailResponse,
  userStatusRequest,
} from '@/test'
import { act, renderHook, waitFor } from '@testing-library/react'
import { useUpdateUserStatus } from '../useUpdateUserStatus'

vi.mock('../../api', () => ({
  usersApi: {
    updateStatus: vi.fn(),
  },
}))

beforeEach(() => {
  vi.resetAllMocks()
})

describe('useUpdateUserStatus', () => {
  it('USER-060 - Debe actualizar el estado del usuario correctamente', async () => {
    // Arrange
    const userRequest = userStatusRequest()

    const userResponse = userDetailResponse()

    vi.mocked(usersApi.updateStatus).mockResolvedValue(userResponse)
    const { wrapper } = createQueryWrapper()

    // Act
    const { result } = renderHook(() => useUpdateUserStatus(), { wrapper })

    await act(async () => {
      await result.current.mutateAsync({
        id: 1,
        data: userRequest,
      })
    })

    await waitFor(() => {
      expect(result.current.isSuccess).toBe(true)
    })

    // Assert
    expect(vi.mocked(usersApi.updateStatus).mock.calls[0][0]).toBe(1)
    expect(vi.mocked(usersApi.updateStatus).mock.calls[0][1]).toEqual(
      userRequest,
    )
    expect(result.current.data).toEqual(userResponse)
  })

  it('USER-061 - Debe exponer el error cuando el servicio de usuarios falla', async () => {
    // Arrange
    const userRequest = userStatusRequest()

    const error = new Error('Internal Server Error')
    vi.mocked(usersApi.updateStatus).mockRejectedValue(error)
    const { wrapper } = createQueryWrapper()

    // Act
    const { result } = renderHook(() => useUpdateUserStatus(), { wrapper })

    await act(async () => {
      try {
        await result.current.mutateAsync({
          id: 1,
          data: userRequest,
        })
      } catch {
        // Error esperado para verificar el estado del hook
      }
    })

    await waitFor(() => {
      expect(result.current.isError).toBe(true)
    })

    // Assert
    expect(vi.mocked(usersApi.updateStatus).mock.calls[0][0]).toBe(1)
    expect(vi.mocked(usersApi.updateStatus).mock.calls[0][1]).toEqual(
      userRequest,
    )
    expect(result.current.error).toBe(error)
  })

  it('USER-062 - Debe invalidar ["users"] luego de actualizar el estado de un usuario', async () => {
    // Arrange
    const userRequest = userStatusRequest()

    const userResponse = userDetailResponse()

    vi.mocked(usersApi.updateStatus).mockResolvedValue(userResponse)
    const { wrapper, queryClient } = createQueryWrapper()

    // Espiar invalidateQueries
    const invalidateQueriesSpy = vi.spyOn(queryClient, 'invalidateQueries')

    // Act
    const { result } = renderHook(() => useUpdateUserStatus(), { wrapper })

    await act(async () => {
      await result.current.mutateAsync({ id: 1, data: userRequest })
    })

    await waitFor(() => {
      expect(result.current.isSuccess).toBe(true)
    })

    // Assert
    expect(invalidateQueriesSpy).toHaveBeenCalledWith({ queryKey: ['users'] })
    expect(result.current.data).toEqual(userResponse)
  })

  it('USER-063 - Debe invalidar la consulta del usuario con estado actualizado', async () => {
    // Arrange
    const userRequest = userStatusRequest()

    const userResponse = userDetailResponse()

    vi.mocked(usersApi.updateStatus).mockResolvedValue(userResponse)
    const { wrapper, queryClient } = createQueryWrapper()

    // Espiar invalidateQueries
    const invalidateUserQuerySpy = vi.spyOn(queryClient, 'invalidateQueries')

    // Act
    const { result } = renderHook(() => useUpdateUserStatus(), { wrapper })

    await act(async () => {
      await result.current.mutateAsync({ id: 1, data: userRequest })
    })

    await waitFor(() => {
      expect(result.current.isSuccess).toBe(true)
    })

    // Assert
    expect(invalidateUserQuerySpy).toHaveBeenCalledWith({
      queryKey: ['user', 1],
    })
  })
})
