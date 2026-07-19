import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { updateUserSchema, type UpdateUserFormData } from '@/features/users'
import { Button, FormField } from '@/shared/components'
import styles from './EditUserForm.module.css'
import type { UserDetailResponse } from '@/features/users'
import { getApiErrorMessage } from '@/shared/utils'
import { useUpdateUser } from '@/features/users'

interface EditUserFormProps {
  userId: number
  initialValues?: Partial<UpdateUserFormData>
  submitLabel?: string
  onSubmitSuccess?: (user: UserDetailResponse) => void
}

export function EditUserForm({
  userId,
  initialValues,
  submitLabel = 'Guardar cambios',
  onSubmitSuccess,
}: EditUserFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UpdateUserFormData>({
    resolver: zodResolver(updateUserSchema),
    defaultValues: {
      name: '',
      email: '',
      age: 18,
      ...initialValues,
    },
  })

  const updatedUser = useUpdateUser()
  const onSubmit = (data: UpdateUserFormData) => {
    updatedUser.mutate(
      { id: userId, data },
      {
        onSuccess: (user) => {
          onSubmitSuccess?.(user)
        },
      },
    )
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
      {updatedUser.isError && (
        <p className={styles.error}>{getApiErrorMessage(updatedUser.error)}</p>
      )}
      <Button type="submit" disabled={updatedUser.isPending}>
        {updatedUser.isPending ? `${submitLabel}...` : submitLabel}
      </Button>
    </form>
  )
}
