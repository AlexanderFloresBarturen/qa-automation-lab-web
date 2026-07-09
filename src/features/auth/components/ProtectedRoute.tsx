import { Navigate, Outlet } from 'react-router-dom'

import { PATHS } from '@/app/router'
import { useAuth } from '@/features/auth'

export function ProtectedRoute() {
  const { isAuthenticated } = useAuth()

  if (!isAuthenticated) {
    return <Navigate replace to={PATHS.LOGIN} />
  }

  return <Outlet />
}
