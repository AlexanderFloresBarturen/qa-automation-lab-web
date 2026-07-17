import type { UserDetailResponse } from '../../types'
import styles from './UsersTable.module.css'

interface UsersTableProps {
  users: UserDetailResponse[]
}

export function UsersTable({ users }: UsersTableProps) {
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Correo</th>
          <th>Edad</th>
          <th>Activo</th>
        </tr>
      </thead>
      <tbody>
        {users.length === 0 ? (
          <tr>
            <td colSpan={3}>No hay usuarios registrados.</td>
          </tr>
        ) : (
          users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.age}</td>
              <td>{user.is_active ? 'SI' : 'NO'}</td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  )
}
