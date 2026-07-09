import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'

import { PATHS } from './paths'
import {
  Login,
  ForgotPassword,
  ResetPassword,
  Dashboard,
  Users,
} from '@/features'
import { AuthLayout, MainLayout } from '../layouts'
import { ProtectedRoute, GuestRoute } from '@/features/auth'

export function AppRouter() {
  return (
    <BrowserRouter>
      {' '}
      {/* Componente que conecta React con la barra de direcciones del navegador */}
      <Routes>
        {' '}
        {/* Decide que componente mostrar */}
        {/* Redirección inicial */}
        <Route path="/" element={<Navigate to={PATHS.LOGIN} replace />} />{' '}
        <Route element={<GuestRoute />}>
          <Route element={<AuthLayout />}>
            <Route path={PATHS.LOGIN} element={<Login />} />
            <Route path={PATHS.FORGOT_PASSWORD} element={<ForgotPassword />} />
            <Route path={PATHS.RESET_PASSWORD} element={<ResetPassword />} />
          </Route>
        </Route>
        <Route element={<ProtectedRoute />}>
          <Route element={<MainLayout />}>
            <Route path={PATHS.DASHBOARD} element={<Dashboard />} />
            <Route path={PATHS.USERS} element={<Users />} />
          </Route>
        </Route>
        <Route path="*" element={<Navigate to={PATHS.LOGIN} replace />} />
      </Routes>
    </BrowserRouter>
  )
}
