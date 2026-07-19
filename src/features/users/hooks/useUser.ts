import { useQuery } from '@tanstack/react-query'
import { usersApi } from '../api'

export function useUser(id: number, enabled = true) {
  return useQuery({
    queryKey: ['users', id],
    queryFn: () => usersApi.getById(id),
    enabled,
  })
}
