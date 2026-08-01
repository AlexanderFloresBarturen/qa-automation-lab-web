import { beforeEach, describe, expect, it, vi } from "vitest";
import { usersApi } from "../../api";
import { createQueryWrapper, createUserRequest, userDetailResponse } from "@/test";
import { act, renderHook, waitFor } from "@testing-library/react";
import { useCreateUser } from "../useCreateUser";

vi.mock('../../api', () => ({
    usersApi: {
        create: vi.fn(),
    },
}))

beforeEach(() => {
  vi.resetAllMocks()
})

describe('useCreateUser', () => {
    it('USER-020 - Debe crear un usuario correctamente', async () => {
        // Arrange
        const userRequest = createUserRequest()

        const userResponse = userDetailResponse()

        vi.mocked(usersApi.create).mockResolvedValue(userResponse)
        const {wrapper} = createQueryWrapper()

        // Act
        const { result } = renderHook(() => useCreateUser(), { wrapper })

        await act(async () => { // Ejecuta la mutación
            await result.current.mutateAsync(userRequest)
        })

        await waitFor(() => {
            expect(result.current.isSuccess).toBe(true)
        })

        // Assert
        expect(vi.mocked(usersApi.create).mock.calls[0][0]).toEqual(userRequest)
        expect(result.current.data).toEqual(userResponse)
    })

    it('USER-021 - Debe exponer el error cuando el servicio de usuarios falla', async () => {
        // Arrange
        const userRequest = createUserRequest()

        const error = new Error('Invalid email format')
        vi.mocked(usersApi.create).mockRejectedValue(error)
        const {wrapper} = createQueryWrapper()
        
        // Act
        const { result } = renderHook(() => useCreateUser(), { wrapper })

        await act(async () => {
            try {
                await result.current.mutateAsync(userRequest)
            } catch {
               // Error esperado para verificar el estado del hook
            }
        })
        
        await waitFor(() => {
            expect(result.current.isError).toBe(true)
        })
        
        // Assert
        expect(vi.mocked(usersApi.create).mock.calls[0][0]).toEqual(userRequest)
        expect(result.current.error).toBe(error)
    })

    it('USER-022 - Debe invalidar ["users"] luego de crear un usuario', async () => {
        // Arrange
        const userRequest = createUserRequest()

        const userResponse = userDetailResponse()

        vi.mocked(usersApi.create).mockResolvedValue(userResponse)
        const {wrapper, queryClient} = createQueryWrapper()

        // Espiar invalidateQueries
        const invalidateQueriesSpy = vi.spyOn(queryClient, 'invalidateQueries')

        // Act
        const { result } = renderHook(() => useCreateUser(), { wrapper })

        await act(async () => {
            await result.current.mutateAsync(userRequest)
        })

        await waitFor(() => {
            expect(result.current.isSuccess).toBe(true)
        })

        // Assert
        expect(invalidateQueriesSpy).toHaveBeenCalledWith({queryKey: ['users']})
    })
})