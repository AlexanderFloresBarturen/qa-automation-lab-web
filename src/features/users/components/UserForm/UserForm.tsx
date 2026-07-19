import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { createUserSchema, type CreateUserFormData } from '@/features/users'
import { Button, FormField } from '@/shared/components'
import styles from './UserForm.module.css'
import { useCreateUser } from '../../hooks'
import type { UserDetailResponse } from '@/features/users'
import { getApiErrorMessage } from '@/shared/utils'

interface UserFormProps {
  initialValues?: Partial<CreateUserFormData>
  submitLabel?: string
  onSubmitSuccess?: (user: UserDetailResponse) => void
}

export function UserForm({
  initialValues,
  submitLabel = 'Crear usuario',
  onSubmitSuccess,
}: UserFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateUserFormData>({
    resolver: zodResolver(createUserSchema),
    defaultValues: {
      name: '',
      email: '',
      age: 18,
      password: '',
      ...initialValues,
    },
  })

  const createUser = useCreateUser()
  const onSubmit = (data: CreateUserFormData) => {
    createUser.mutate(data, {
      onSuccess: (user) => {
        onSubmitSuccess?.(user)
      },
    })
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <FormField
        id="name"
        label="Nombre"
        registration={register('name')}
        error={errors.name?.message}
      />
      <FormField
        id="email"
        label="Email"
        type="email"
        registration={register('email')}
        error={errors.email?.message}
      />
      <FormField
        id="age"
        label="Edad"
        type="number"
        registration={register('age', { valueAsNumber: true })}
        error={errors.age?.message}
      />
      <FormField
        id="password"
        label="Password"
        type="password"
        registration={register('password')}
        error={errors.password?.message}
      />
      {createUser.isError && (
        <p className={styles.error}>{getApiErrorMessage(createUser.error)}</p>
      )}
      <Button type="submit" disabled={createUser.isPending}>
        {createUser.isPending ? `${submitLabel}...` : submitLabel}
      </Button>
    </form>
  )
}
