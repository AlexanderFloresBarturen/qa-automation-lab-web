import { useParams } from 'react-router-dom'

import { useUser } from '../hooks'
import { getApiErrorMessage } from '@/shared/utils'
import { UserDetails } from '@/features/users'
import { ErrorMessage, Loading } from '@/shared/components'

export function UserDetail() {
  const { id } = useParams()
  const userId = Number(id)
  const isValidUserId = id !== undefined && !Number.isNaN(userId)

  const { data: user, isLoading, error } = useUser(userId, isValidUserId)

  if (!isValidUserId) {
    return <p>User ID inválido</p>
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

  return <UserDetails user={user} />
}
