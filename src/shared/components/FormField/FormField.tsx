import type { UseFormRegisterReturn } from 'react-hook-form'
import styles from './FormField.module.css'

export interface FormFieldProps {
  id: string
  label: string
  type?: React.HTMLInputTypeAttribute
  registration: UseFormRegisterReturn
  error?: string
  placeholder?: string
  disabled?: boolean
}

export function FormField({
  id,
  label,
  type = 'text',
  placeholder,
  disabled,
  registration,
  error,
}: FormFieldProps) {
  return (
    <div className={styles.form}>
      <label htmlFor={id} className={styles.label}>
        {label}
      </label>

      <input
        id={id}
        className={styles.input}
        type={type}
        placeholder={placeholder}
        disabled={disabled}
        {...registration}
      />

      {error && <span className={styles.error}>{error}</span>}
    </div>
  )
}
