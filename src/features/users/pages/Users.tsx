import { useUsers, UsersTable } from '@/features/users'

export function Users() {
  const { users, isLoading, error } = useUsers()

  if (isLoading) {
    return <p>Cargando usuarios...</p>
  }

  if (error) {
    return <p>{error}</p>
  }

  return <UsersTable users={users} />
}
