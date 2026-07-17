import { useNavigate } from 'react-router-dom'
import { useUsers, UsersTable } from '@/features/users'
import { PATHS } from '@/app/router'
import { getApiErrorMessage } from '@/shared/utils'

export function Users() {
  const { data: users = [], isLoading, error } = useUsers()
  const navigate = useNavigate()

  if (isLoading) {
    return <p>Cargando usuarios...</p>
  }

  if (error) {
    return <p>{getApiErrorMessage(error)}</p>
  }

  return (
    <section>
      <header>
        <h1>Users</h1>

        <button type="button" onClick={() => navigate(PATHS.CREATE_USER)}>
          New User
        </button>
      </header>

      <UsersTable users={users} />
    </section>
  )
}
