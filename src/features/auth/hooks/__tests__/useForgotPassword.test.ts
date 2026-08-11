import { beforeEach, describe, expect, it, vi } from "vitest";
import { authApi } from "../../api";
import { createQueryWrapper } from "@/test";
import { act, renderHook, waitFor } from "@testing-library/react";
import { useForgotPassword } from "../useForgotPassword";

vi.mock('../../api', () => ({
    authApi: {
        forgotPassword: vi.fn(),
    },
}))

beforeEach(() => {
    vi.resetAllMocks()
})

describe('useForgotPassword', () => {
    it('AUTH-050 - Debe solicitar la recuperación de contraseña correctamente', async () => {
        // Arrange
        const request = {
            email: 'alex@test.com',
        }

        const response = {
            message: 'Recovery email sent',
            token: 'abc123'
        }

        vi.mocked(authApi.forgotPassword).mockResolvedValue(response)

        const { wrapper } = createQueryWrapper()

        // Act
        const { result } = renderHook(() => useForgotPassword(), { wrapper })

        await act(async () => {
            await result.current.mutateAsync(request)
        })

        await waitFor(() => {
            expect(result.current.isSuccess).toBe(true)
        })

        // Assert
        expect(vi.mocked(authApi.forgotPassword).mock.calls[0][0]).toEqual(request)
        expect(result.current.data).toEqual(response)
    })

    it('AUTH-051 - Debe exponer el error cuando el servicio de recuperación de contraseña falla', async () => {
        // Arrange
        const request = {
            email: 'alex@test.com'
        }

        const error = new Error('Internal server error')
        vi.mocked(authApi.forgotPassword).mockRejectedValue(error)

        const { wrapper } = createQueryWrapper()

        // Act
        const { result } = renderHook(() => useForgotPassword(), { wrapper })

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
        expect(vi.mocked(authApi.forgotPassword).mock.calls[0][0]).toEqual(request)
        expect(result.current.error).toBe(error)
    })

    it('AUTH-052 - Debe retornar una respuesta genérica cuando el correo no existe', async () => {
        // Arrange
        const request = {
            email: 'alex@test.com'
        }

        const response = {
            message: 'If the account exists, a recovery token has been generated'
        }

        vi.mocked(authApi.forgotPassword).mockResolvedValue(response)

        const { wrapper } = createQueryWrapper()

        // Act
        const { result } = renderHook(() => useForgotPassword(), { wrapper })

        await act(async () => {
            await result.current.mutateAsync(request)
        })

        await waitFor(() => {
            expect(result.current.isSuccess).toBe(true)
        })

        // Assert
        expect(vi.mocked(authApi.forgotPassword).mock.calls[0][0]).toEqual(request)
        expect(result.current.data).toEqual(response)
    })
})