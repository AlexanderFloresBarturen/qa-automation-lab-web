import { beforeEach, describe, expect, it, vi } from 'vitest'
import { usersApi } from '../../api'
import {
  createQueryWrapper,
  patchUserRequest,
  userDetailResponse,
} from '@/test'
import { renderHook, waitFor } from '@testing-library/react'
import { usePatchUser } from '../usePatchUser'
import { act } from 'react'

vi.mock('../../api', () => ({
  usersApi: {
    patch: vi.fn(),
  },
}))

beforeEach(() => {
  vi.resetAllMocks()
})

describe('usePatchUser', () => {
  it('USER-040 - Debe actualizar de manera parcial un usuario correctamente', async () => {
    // Arrange
    const userRequest = patchUserRequest({
      age: 20,
    })

    const userResponse = userDetailResponse({
      age: 20,
    })

    vi.mocked(usersApi.patch).mockResolvedValue(userResponse)
    const { wrapper } = createQueryWrapper()

    // Act
    const { result } = renderHook(() => usePatchUser(), { wrapper })

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
    expect(vi.mocked(usersApi.patch).mock.calls[0][0]).toBe(1)
    expect(vi.mocked(usersApi.patch).mock.calls[0][1]).toEqual(userRequest)
    expect(result.current.data).toEqual(userResponse)
  })

  it('USER-041 - Debe exponer el error cuando el servicio de usuarios falla', async () => {
    // Arrange
    const userRequest = patchUserRequest({
      name: 'Bob',
    })

    const error = new Error('Internal Server Error')
    vi.mocked(usersApi.patch).mockRejectedValue(error)
    const { wrapper } = createQueryWrapper()

    // Act
    const { result } = renderHook(() => usePatchUser(), { wrapper })

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
    expect(vi.mocked(usersApi.patch).mock.calls[0][0]).toBe(1)
    expect(vi.mocked(usersApi.patch).mock.calls[0][1]).toEqual(userRequest)
    expect(result.current.error).toBe(error)
  })

  it('USER-042 - Debe invalidar ["users"] luego de actualizar parcialmente un usuario', async () => {
    // Arrange
    const userRequest = patchUserRequest({
      name: 'Bob',
      email: 'bob@test.com',
    })

    const userResponse = userDetailResponse({
      name: 'Bob',
      email: 'bob@test.com',
      age: 30,
    })

    vi.mocked(usersApi.patch).mockResolvedValue(userResponse)
    const { wrapper, queryClient } = createQueryWrapper()

    // Espiar invalidateQueries
    const invalidateQueriesSpy = vi.spyOn(queryClient, 'invalidateQueries')

    // Act
    const { result } = renderHook(() => usePatchUser(), { wrapper })

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

  it('USER-043 - Debe invalidar la caché del usuario actualizado', async () => {
    // Arrange
    const userRequest = patchUserRequest({
      age: 40,
    })

    const userResponse = userDetailResponse({
      name: 'Alex',
      email: 'alex@test.com',
      age: 40,
    })

    vi.mocked(usersApi.patch).mockResolvedValue(userResponse)
    const { wrapper, queryClient } = createQueryWrapper()

    // Espiar invalidateQueries
    const invalidateUserQuerySpy = vi.spyOn(queryClient, 'invalidateQueries')

    // Act
    const { result } = renderHook(() => usePatchUser(), { wrapper })

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
