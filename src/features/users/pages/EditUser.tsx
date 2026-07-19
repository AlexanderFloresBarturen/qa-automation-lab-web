import { useNavigate, useParams } from 'react-router-dom'

import { useUser } from '../hooks'
import { Loading, ErrorMessage, Button } from '@/shared/components'
import { getApiErrorMessage } from '@/shared/utils'
import { PATHS } from '@/app/router'
import { EditUserForm } from '../components'

export function EditUser() {
  const { id } = useParams()
  const userId = Number(id)
  const isValidUserId = id !== undefined && !Number.isNaN(userId)
  const { data: user, isLoading, error } = useUser(userId, isValidUserId)
  const navigate = useNavigate()

  if (!isValidUserId) {
    return <ErrorMessage message="User ID inválido." />
  }

  if (isLoading) {
    return <Loading />
  }

  if (error) {
    return <ErrorMessage message={getApiErrorMessage(error)} />
  }

  if (!user) {
    return <ErrorMessage message="Usuario no encontrado." />
  }

  if (!user.is_active) {
    return (
      <>
        <ErrorMessage message="No es posible editar un usuario inactivo. Activalo primero desde la vista de detalle" />
        <br></br>
        <Button onClick={() => navigate(PATHS.userDetail(user.id))}>
          Volver al detalle
        </Button>
      </>
    )
  }

  return (
    <>
      <h1>Editar Usuario</h1>
      <EditUserForm
        userId={user.id}
        initialValues={{
          name: user.name,
          email: user.email,
          age: user.age,
        }}
        submitLabel="Guardar cambios"
        onSubmitSuccess={(updatedUser) =>
          navigate(PATHS.userDetail(updatedUser.id))
        }
      />
    </>
  )
}
