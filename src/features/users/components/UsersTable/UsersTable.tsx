import type { UserResponse } from '../../types'
import styles from './UsersTable.module.css'

interface UsersTableProps {
  users: UserResponse[]
}

export function UsersTable({ users }: UsersTableProps) {
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Correo</th>
          <th>Edad</th>
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
            </tr>
          ))
        )}
      </tbody>
    </table>
  )
}
