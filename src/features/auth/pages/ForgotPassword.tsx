import { Button, Card, FormField } from '@/shared/components'
import { useForgotPassword, useForgotPasswordForm } from '../hooks'
import type { ForgotPasswordFormData } from '../schemas'
import styles from './ForgotPassword.module.css'
import { Link } from 'react-router-dom'
import { PATHS } from '@/app/router'

export function ForgotPassword() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForgotPasswordForm()
  const { mutateAsync, isPending, isSuccess, data, isError, error } =
    useForgotPassword()

  async function onSubmit(data: ForgotPasswordFormData) {
    await mutateAsync(data)
  }

  return (
    <section className={styles.forgotPassword}>
      <Card>
        <h1 className={styles.title}>Recuperar contraseña</h1>

        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          <FormField
            id="email"
            label="Email"
            type="email"
            registration={register('email')}
            error={errors.email?.message}
          />

          <Button type="submit" disabled={isPending}>
            {isPending ? 'Enviando...' : 'Recuperar contraseña'}
          </Button>
        </form>

        {isSuccess && <p className={styles.message}>{data.message}</p>}
        {isError && <p className={styles.error}>{error.message}</p>}

        <Link className={styles.back} to={PATHS.LOGIN}>
          Volver al inicio de sesión
        </Link>
      </Card>
    </section>
  )
}
