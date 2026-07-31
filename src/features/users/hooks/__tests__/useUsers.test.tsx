import { beforeEach, describe, expect, it, vi } from "vitest";
import { usersApi } from "../../api";
import { renderHook, waitFor } from "@testing-library/react";
import { useUsers } from "../useUsers";
import { createQueryWrapper } from "@/test";

vi.mock('../../api', () => ({
    usersApi: {
        getAll: vi.fn(),
    },
}))

beforeEach(() => {
  vi.clearAllMocks()
})

describe('useUsers', () => {
    it('USER-001 - Debe obtener el listado de usuarios', async () => {
        // Arrange
        const users = [
            {
                id: 1,
                name: 'Alex',
                email: 'alex@test.com',
                age: 30,
                is_active: true
            },
            {
                id: 2,
                name: 'John',
                email: 'john@test.com',
                age: 20,
                is_active: false
            }
        ]

        vi.mocked(usersApi.getAll).mockResolvedValue(users)
        const {wrapper} = createQueryWrapper()

        // Act
        const { result } = renderHook(() => useUsers(), { wrapper })

        await waitFor(() => {
            expect(result.current.isSuccess).toBe(true)
        })

        // Assert
        expect(usersApi.getAll).toHaveBeenCalled()
        expect(result.current.data).toEqual(users) // Compara el contenido
    })

    it('USER-002 - Debe exponer el error cuando el servicio de usuarios falla', async () => {
        // Arrange
        const error = new Error('Internal Server Error')
        vi.mocked(usersApi.getAll).mockRejectedValue(error)
        const {wrapper} = createQueryWrapper()

        // Act
        const { result } = renderHook(() => useUsers(), { wrapper })

        await waitFor(() => {
            expect(result.current.isError).toBe(true)
        })

        // Assert
        expect(usersApi.getAll).toHaveBeenCalled()
        expect(result.current.error).toBe(error) // Compara la instancia del objeto
    })
})