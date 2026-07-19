import { Navigate, Outlet } from 'react-router-dom'

import { PATHS } from '@/app/router'

import { useAuth } from '../hooks'

export function GuestRoute() {
  const { isAuthenticated } = useAuth()

  if (isAuthenticated) {
    return <Navigate replace to={PATHS.USERS} />
  }

  return <Outlet />
}
