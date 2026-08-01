import { beforeEach, describe, expect, it, vi } from "vitest";
import { usersApi } from "../../api";
import { createQueryWrapper, userDetailResponse } from "@/test";
import { renderHook, waitFor } from "@testing-library/react";
import { useUser } from "../useUser";

vi.mock('../../api', () => ({
    usersApi: {
        getById: vi.fn(),
    },
}))

beforeEach(() => {
  vi.resetAllMocks()
})

describe('useUser', () => {
    it('USER-010 - Debe obtener el usuario asociado al identificador', async () => {
        // Arrange
        const user = userDetailResponse()

        vi.mocked(usersApi.getById).mockResolvedValue(user)
        const {wrapper} = createQueryWrapper()

        // Act
        const { result } = renderHook(() => useUser(1), { wrapper })

        await waitFor(() => {
            expect(result.current.isSuccess).toBe(true)
        })

        // Assert
        expect(usersApi.getById).toHaveBeenCalledWith(1)
        expect(result.current.data).toEqual(user)
    })

    it('USER-011 - Debe exponer el error cuando el servicio de usuarios falla', async () => {
        // Arrange
        const error = new Error('User not found')
        vi.mocked(usersApi.getById).mockRejectedValue(error)
        const {wrapper} = createQueryWrapper()
    
        // Act
        const { result } = renderHook(() => useUser(999), { wrapper })
    
        await waitFor(() => {
            expect(result.current.isError).toBe(true)
        })
    
        // Assert
        expect(usersApi.getById).toHaveBeenCalledWith(999)
        expect(result.current.error).toBe(error)
    })

    it('USER-012 - No debe ejecutar la consulta cuando enabled es false', () => {
        // Arrange
        const {wrapper} = createQueryWrapper()

        // Act
        const { result } = renderHook(() => useUser(1, false), { wrapper })

        // Assert
        expect(usersApi.getById).not.toHaveBeenCalled()
        expect(result.current.fetchStatus).toBe('idle')
    })
})