import styles from './ErrorMessage.module.css'

interface ErrorMessageProps {
  message: string
}

export function ErrorMessage({ message }: ErrorMessageProps) {
  return (
    <div className={styles.container}>
      <p>{message}</p>
    </div>
  )
}
