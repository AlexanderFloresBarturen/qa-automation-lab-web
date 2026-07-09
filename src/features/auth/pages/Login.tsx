import { Link } from 'react-router-dom'

import { PATHS } from '@/app/router'
import { Button, Card, Input } from '@/shared/components'
import {
  useLoginForm,
  type LoginFormData,
  useLogin,
  useLogout,
} from '@/features/auth'

import styles from './Login.module.css'

export function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useLoginForm()

  const { login } = useLogin()

  async function onSubmit(data: LoginFormData) {
    const response = await login(data)
    console.log(response)
  }

  const { logout } = useLogout()

  return (
    <section className={styles.login}>
      <Card>
        <h1 className={styles.title}>Login</h1>

        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="email">Email</label>

          <Input
            id="email"
            type="email"
            autoComplete="email"
            {...register('email')}
          />
          {errors.email && (
            <p className={styles.error}>{errors.email.message}</p>
          )}

          <label htmlFor="password">Contraseña</label>

          <Input
            id="password"
            type="password"
            autoComplete="current-password"
            {...register('password')}
          />
          {errors.password && (
            <p className={styles.error}>{errors.password.message}</p>
          )}

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
