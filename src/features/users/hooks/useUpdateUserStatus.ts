import { useMutation, useQueryClient } from '@tanstack/react-query'

import { usersApi } from '../api'
import type { UserStatusRequest } from '../types'

interface UpdateUserStatusParams {
  id: number
  data: UserStatusRequest
}

export const useUpdateUserStatus = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: ({ id, data }: UpdateUserStatusParams) =>
      usersApi.updateStatus(id, data),
    onSuccess: (updatedUser) => {
      //Invalida la consulta para que la lista recargue y refleje el cambio de estado
      queryClient.invalidateQueries({
        queryKey: ['users'],
      })
      //Invalida el objeto para que se recargue el usuario y refleje el cambio de estado
      queryClient.invalidateQueries({
        queryKey: ['user', updatedUser.id],
      })
    },
  })
}
