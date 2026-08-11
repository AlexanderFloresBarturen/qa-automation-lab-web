import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import { useResetPasswordForm } from '../hooks/useResetPasswordForm'
import type { ResetPasswordFormData } from '../schemas'
import styles from './ResetPassword.module.css'
import { Button, Card, FormField } from '@/shared/components'
import { PATHS } from '@/app/router'
import { useResetPassword } from '../hooks'

export function ResetPassword() {
  const [searchParams] = useSearchParams()
  const token = searchParams.get('token')
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useResetPasswordForm()
  const { mutateAsync, isPending, isSuccess, data, isError, error } =
    useResetPassword()
  const navigate = useNavigate()

  async function onSubmit(formData: ResetPasswordFormData) {
    await mutateAsync({
      token: token ?? '',
      new_password: formData.new_password,
    })
    navigate(PATHS.LOGIN, {
      state: { message: 'La contraseña se restableció correctamente.' },
    })
  }

  return (
    <section className={styles.resetPassword}>
      <Card>
        <h1 className={styles.title}>Restablecer contraseña</h1>

        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          <FormField
            id="new_password"
            label="Nueva contraseña"
            type="password"
            registration={register('new_password')}
            error={errors.new_password?.message}
          />

          <Button type="submit" disabled={isPending || !token}>
            {isPending ? 'Restableciendo...' : 'Restablecer contraseña'}
          </Button>
        </form>

        {isSuccess && <p className={styles.message}>{data.message}</p>}

        {isError && <p className={styles.error}>{error.message}</p>}

        {!token && (
          <p className={styles.error}>El enlace de recuperación no es válido</p>
        )}

        <Link className={styles.back} to={PATHS.LOGIN}>
          Volver la inicio de sesión
        </Link>
      </Card>
    </section>
  )
}
