import { useNavigate } from 'react-router-dom'
import type { UserDetailResponse } from '../../types'
import styles from './UsersTable.module.css'
import { PATHS } from '@/app/router'

interface UsersTableProps {
  users: UserDetailResponse[]
}

export function UsersTable({ users }: UsersTableProps) {
  const navigate = useNavigate()
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Correo</th>
          <th>Edad</th>
          <th>Estado</th>
        </tr>
      </thead>
      <tbody>
        {users.length === 0 ? (
          <tr>
            <td colSpan={4}>No hay usuarios registrados.</td>
          </tr>
        ) : (
          users.map((user) => (
            <tr
              key={user.id}
              onClick={() => navigate(PATHS.userDetail(user.id))}
              className={styles.clickableRow}
              role="button"
              tabIndex={0}
              onKeyDown={(event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                  navigate(PATHS.userDetail(user.id))
                }
              }}
            >
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.age}</td>
              <td
                className={`${styles.badge} ${user.is_active ? styles.active : styles.inactive}`}
              >
                {user.is_active ? 'Activo' : 'Inactivo'}
              </td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  )
}
