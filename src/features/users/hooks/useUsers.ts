import { useCallback, useEffect, useState } from 'react'

import { usersApi } from '../api'

import type { UserResponse } from '../types'

export function useUsers() {
  const [users, setUsers] = useState<UserResponse[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const loadUsers = useCallback(async () => {
    try {
      setError(null)

      const data = await usersApi.getAll()

      setUsers(data)
    } catch {
      setError('No fue posible cargar los usuarios.')
    } finally {
      setIsLoading(false)
    }
  }, [])

  useEffect(() => {
    void loadUsers()
  }, [loadUsers])

  return { users, isLoading, error, reload: loadUsers }
}
