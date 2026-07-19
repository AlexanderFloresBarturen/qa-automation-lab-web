import { Button } from '@/shared/components'
import type { UserDetailResponse } from '../../types'

import styles from './UserDetails.module.css'
import { useNavigate } from 'react-router-dom'
import { PATHS } from '@/app/router'
import { useDeleteUser, useUpdateUserStatus } from '../../hooks'

interface UserDetailsProps {
  user: UserDetailResponse
}

export function UserDetails({ user }: UserDetailsProps) {
  const navigate = useNavigate()
  const deleteUser = useDeleteUser()
  const updateUserStatus = useUpdateUserStatus()
  const handleDelete = () => {
    const confirmed = window.confirm('¿Está seguro de eliminar este usuario?')

    if (!confirmed) return

    deleteUser.mutate(user.id, {
      onSuccess: () => {
        navigate(PATHS.USERS)
      },
    })
  }
  const handleActivate = () => {
    updateUserStatus.mutate(
      {
        id: user.id,
        data: { is_active: true },
      },
      {
        onSuccess: (updatedUser) => {
          navigate(PATHS.userDetail(updatedUser.id))
        },
      },
    )
  }
  return (
    <section className={styles.container}>
      <h1 className={styles.title}>Detalle del Usuario</h1>

      <div className={styles.card}>
        <div className={styles.row}>
          <span className={styles.label}>Nombre</span>
          <span className={styles.value}>{user.name}</span>
        </div>

        <div className={styles.row}>
          <span className={styles.label}>Email</span>
          <span className={styles.value}>{user.email}</span>
        </div>

        <div className={styles.row}>
          <span className={styles.label}>Edad</span>
          <span className={styles.value}>{user.age}</span>
        </div>

        <div className={styles.row}>
          <span className={styles.label}>Estado</span>

          <span
            className={`${styles.badge} ${
              user.is_active ? styles.active : styles.inactive
            }`}
          >
            {user.is_active ? 'Activo' : 'Inactivo'}
          </span>
        </div>
      </div>
      <div className={styles.actions}>
        <Button onClick={() => navigate(PATHS.USERS)}>Volver a Usuarios</Button>
        {user.is_active ? (
          <>
            <Button onClick={() => navigate(PATHS.userEdit(user.id))}>
              Editar
            </Button>
            <Button onClick={handleDelete} disabled={deleteUser.isPending}>
              {deleteUser.isPending ? 'Eliminando...' : 'Eliminar'}
            </Button>
          </>
        ) : (
          <Button
            onClick={handleActivate}
            disabled={updateUserStatus.isPending}
          >
            {updateUserStatus.isPending ? 'Activando...' : 'Activar'}
          </Button>
        )}
      </div>
    </section>
  )
}
