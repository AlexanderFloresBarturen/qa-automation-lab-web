import { beforeEach, describe, expect, it, vi } from "vitest";
import { usersApi } from "../../api";
import { createQueryWrapper } from "@/test";
import { renderHook, waitFor } from "@testing-library/react";
import { useUpdateUser } from "../useUpdateUser";
import { act } from "react";

vi.mock('../../api', () => ({
    usersApi: {
        update: vi.fn()
    },
}))

beforeEach(() => {
    vi.clearAllMocks()
})

describe('useUpdateUser', () => {
    it('USER-030 - Debe actualizar un usuario correctamente', async () => {
        // Arrange
        const userRequest = {
            name: 'Alex',
            email: 'alex@test.com',
            age: 30
        }

        const userResponse = {
            id: 1,
            ...userRequest,
            is_active: true
        }

        vi.mocked(usersApi.update).mockResolvedValue(userResponse)
        const { wrapper } = createQueryWrapper()

        // Act
        const { result } = renderHook(() => useUpdateUser(), { wrapper })

        await act(async () => {
            await result.current.mutateAsync({
                id: 1,
                data: userRequest
            })
        })

        await waitFor(() => {
            expect(result.current.isSuccess).toBe(true)
        })

        // Assert
        expect(vi.mocked(usersApi.update).mock.calls[0][0]).toBe(1)
        expect(vi.mocked(usersApi.update).mock.calls[0][1]).toEqual(userRequest)
        expect(result.current.data).toEqual(userResponse)
    })

    it('USER-031 - Debe exponer el error cuando el servicio de usuarios falla', async () => {
        // Arrange
        const userRequest = {
            name: 'Alex',
            email: 'alex@test.com',
            age: 30
        }

        const error = new Error('Internal Server Error')
        vi.mocked(usersApi.update).mockRejectedValue(error)
        const { wrapper } = createQueryWrapper()

        // Act
        const { result } = renderHook(() => useUpdateUser(), { wrapper })

        await act(async () => {
            try {
                await result.current.mutateAsync({id: 1, data:userRequest})
            } catch {
                // Error esperado para verificar en estado del hook
            }
        })

        await waitFor(() => {
            expect(result.current.isError).toBe(true)
        })

        // Assert
        expect(vi.mocked(usersApi.update).mock.calls[0][0]).toBe(1)
        expect(vi.mocked(usersApi.update).mock.calls[0][1]).toEqual(userRequest)
        expect(result.current.error).toBe(error)
    })

    it('USER-032 - Debe invalidar ["users"] luego de actualizar un usuario', async () => {
        // Arrange
        const userRequest = {
            name: 'Alex',
            email: 'alex@test.com',
            age: 30
        }

        const userResponse = {
            id: 1,
            ...userRequest,
            is_active: true
        }

        vi.mocked(usersApi.update).mockResolvedValue(userResponse)
        const { wrapper, queryClient } = createQueryWrapper()

        // Espiar invalidateQueries
        const invalidateQueriesSpy = vi.spyOn(queryClient, 'invalidateQueries')

        // Act
        const { result } = renderHook(() => useUpdateUser(), { wrapper })

        await act(async () => {
            await result.current.mutateAsync({id:1, data:userRequest})
        })

        await waitFor(() => {
            expect(result.current.isSuccess).toBe(true)
        })

        // Assert
        expect(invalidateQueriesSpy).toHaveBeenCalledWith({queryKey: ['users']})
        expect(result.current.data).toEqual(userResponse)
    })

    it('USER-033 - Debe actualizar la caché del usuario actualizado', async () => {
        // Arrange
        const userRequest = {
            name: 'Alex',
            email: 'alex@test.com',
            age: 30
        }

        const userResponse = {
            id: 1,
            ...userRequest,
            is_active: true
        }

        vi.mocked(usersApi.update).mockResolvedValue(userResponse)
        const { wrapper, queryClient } = createQueryWrapper()

        // Espiar setQueryData
        const setQueryDataSpy = vi.spyOn(queryClient, 'setQueryData')

        // Act
        const { result } = renderHook(() => useUpdateUser(), { wrapper })

        await act(async () => {
            await result.current.mutateAsync({id: 1, data:userRequest})
        })

        await waitFor(() => {
            expect(result.current.isSuccess).toBe(true)
        })

        // Assert
        expect(setQueryDataSpy).toHaveBeenCalledWith(['users', 1], userResponse)
    })
})