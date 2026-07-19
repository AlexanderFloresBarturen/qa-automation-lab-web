import { useMutation, useQueryClient } from '@tanstack/react-query'
import { usersApi } from '../api'

export function useDeleteUser() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (id: number) => usersApi.delete(id),

    onSuccess: () => {
      // invalidateQueries invalida la consulta ['users'] para que React Query
      // vuelva a solitar la lista actualizada
      queryClient.invalidateQueries({
        queryKey: ['users'],
      })
    },
  })
}
