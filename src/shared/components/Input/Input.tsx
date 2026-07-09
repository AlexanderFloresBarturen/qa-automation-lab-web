import type { ComponentPropsWithoutRef } from 'react'

import styles from './Input.module.css'

type InputProps = ComponentPropsWithoutRef<'input'>

export function Input({ className, ...props }: InputProps) {
  const classes = className ? '${styles.input} ${className}' : styles.input

  return <input className={classes} {...props} />
}
