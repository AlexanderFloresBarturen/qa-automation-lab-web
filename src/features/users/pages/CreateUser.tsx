import { UserForm } from '../components/UserForm'
import { useNavigate } from 'react-router-dom'
import { PATHS } from '@/app/router'

export function CreateUser() {
  const navigate = useNavigate()

  return (
    <div>
      <h1>Crear Usuario</h1>
      <p> Complete la información de abajo para crear un usuario </p>
      <UserForm
        submitLabel="Crear Usuario"
        onSubmitSuccess={() => navigate(PATHS.USERS)}
      />
    </div>
  )
}
