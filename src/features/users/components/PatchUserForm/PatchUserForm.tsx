import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { Button, ErrorMessage, FormField } from '@/shared/components'
import styles from './PatchUserForm.module.css'
import type {
  PatchUserFormData,
  PatchUserRequest,
  UserDetailResponse,
} from '@/features/users'
import { getApiErrorMessage } from '@/shared/utils'
import { patchUserSchema, usePatchUser } from '@/features/users'
import { useState } from 'react'

interface PatchUserFormProps {
  userId: number
  initialValues?: Partial<PatchUserFormData>
  submitLabel?: string
  onSubmitSuccess?: (user: UserDetailResponse) => void
}

export function PatchUserForm({
  userId,
  initialValues,
  submitLabel = 'Aplicar cambios',
  onSubmitSuccess,
}: PatchUserFormProps) {
  const [formError, setFormError] = useState<string | null>(null)
  const {
    register,
    handleSubmit,
    formState: { errors, dirtyFields },
  } = useForm<PatchUserFormData>({
    resolver: zodResolver(patchUserSchema),
    defaultValues: initialValues,
  })

  const patchedUser = usePatchUser()
  const onSubmit = (data: PatchUserFormData) => {
    setFormError(null)
    const payload: PatchUserRequest = {}

    if (dirtyFields.name && data.name) {
      payload.name = data.name
    }

    if (dirtyFields.email && data.email) {
      payload.email = data.email
    }

    if (dirtyFields.age && data.age !== undefined && !Number.isNaN(data.age)) {
      payload.age = data.age
    }

    if (Object.keys(payload).length === 0) {
      setFormError('Debes modificar al menos un campo.')
      return
    }

    patchedUser.mutate(
      {
        id: userId,
        data: payload,
      },
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
        registration={register('name', { onChange: () => setFormError(null) })}
        error={errors.name?.message}
      />
      <FormField
        id="email"
        label="Email"
        type="email"
        registration={register('email', { onChange: () => setFormError(null) })}
        error={errors.email?.message}
      />
      <FormField
        id="age"
        label="Edad"
        type="number"
        registration={register('age', {
          valueAsNumber: true,
          onChange: () => setFormError(null),
        })}
        error={errors.age?.message}
      />
      {patchedUser.isError && (
        <p className={styles.error}>{getApiErrorMessage(patchedUser.error)}</p>
      )}
      <Button type="submit" disabled={patchedUser.isPending}>
        {patchedUser.isPending ? `${submitLabel}...` : submitLabel}
      </Button>

      {formError && <ErrorMessage message={formError} />}
      {patchedUser.isError && (
        <ErrorMessage message={getApiErrorMessage(patchedUser.error)} />
      )}
    </form>
  )
}
