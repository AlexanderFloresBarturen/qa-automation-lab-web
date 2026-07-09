import type { ComponentPropsWithoutRef } from 'react'

import styles from './Card.module.css'

type CardProps = ComponentPropsWithoutRef<'div'>

export function Card({ children, className, ...props }: CardProps) {
  const classes = className ? `${styles.card} ${className}` : styles.card

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  )
}
