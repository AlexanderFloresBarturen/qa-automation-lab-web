import { UserForm } from '../components/UserForm'
import { useNavigate } from 'react-router-dom'
import { PATHS } from '@/app/router'

export function CreateUser() {
  const navigate = useNavigate()

  return (
    <div>
      <h1>Create User</h1>
      <p> Complete the information below to create a new user </p>
      <UserForm onSuccess={() => navigate(PATHS.USERS)} />
    </div>
  )
}
