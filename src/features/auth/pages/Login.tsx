import { Link, useNavigate } from 'react-router-dom'

import { PATHS } from '@/app/router'
import { Button, Card } from '@/shared/components'
import {
  useLoginForm,
  type LoginFormData,
  useLogin,
  useLogout,
} from '@/features/auth'

import styles from './Login.module.css'
import { FormField } from '@/shared/components'

export function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useLoginForm()

  const { login } = useLogin()
  const navigate = useNavigate()

  async function onSubmit(data: LoginFormData) {
    await login(data)
    navigate(PATHS.USERS)
  }

  const { logout } = useLogout()

  return (
    <section className={styles.login}>
      <Card>
        <h1 className={styles.title}>Login</h1>

        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          <FormField
            id="email"
            label="Email"
            type="email"
            registration={register('email')}
            error={errors.email?.message}
          />

          <FormField
            id="password"
            label="Password"
            type="password"
            registration={register('password')}
            error={errors.password?.message}
          />

          <Button type="submit">Iniciar sesión</Button>
          <Button type="button" onClick={logout}>
            {' '}
            Cerrar sesión (prueba)
          </Button>
        </form>

        <Link className={styles.forgotPassword} to={PATHS.FORGOT_PASSWORD}>
          ¿Olvidaste tu contraseña?
        </Link>
      </Card>
    </section>
  )
}
