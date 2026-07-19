import { useMutation, useQueryClient } from "@tanstack/react-query"
import type { PatchUserRequest } from "../types"
import { usersApi } from "../api"

interface PatchUserParams {
    id: number
    data: PatchUserRequest
}

export const usePatchUser = () => {
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: ({ id, data }: PatchUserParams) =>
            usersApi.patch(id, data),
        onSuccess: (updatedUser) => {
            queryClient.invalidateQueries({
                queryKey: ['users'],
            })
            queryClient.invalidateQueries({
                queryKey: ['user', updatedUser.id]
            })
        },
    })
}