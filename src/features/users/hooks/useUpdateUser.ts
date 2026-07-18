import { useMutation, useQueryClient } from '@tanstack/react-query'

import { usersApi } from '../api'
import type { UpdateUserRequest } from '@/features/users'

export function useUpdateUser() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: ({ id, data }: { id: number; data: UpdateUserRequest }) =>
      usersApi.update(id, data),

    onSuccess: (user) => {
      queryClient.invalidateQueries({
        queryKey: ['users'],
      })

      queryClient.setQueryData(['users', user.id], user)
    },
  })
}
