import { useLogout } from '@/features'
import { useNavigate } from 'react-router-dom'
import { PATHS } from '../router'
import { Button } from '@/shared/components'

export function Header() {
  const navigate = useNavigate()
  const { logout } = useLogout()

  function handleLogout() {
    logout()
    navigate(PATHS.LOGIN, { replace: true })
  }

  return (
    <header
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '1rem',
        borderBottom: '1px solid #ddd',
      }}
    >
      <h3>QA Automation Lab</h3>
      <div>
        <Button onClick={handleLogout}>Cerrar sesión</Button>
      </div>
    </header>
  )
}
