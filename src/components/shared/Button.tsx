import React from 'react'
import './Button.scss'

type IconName = 'heart' | 'share' | 'play' | 'close'

interface ButtonProps {
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'text' | "icon"
  onClick?: () => void
  icon?: IconName
  disabled?: boolean
  type?: 'button' | 'submit' | 'reset'
  fullWidth?: boolean
}

export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant = 'primary',
  disabled = false,
  type = 'button',
  fullWidth = false,
  icon
}) => {
  return (
    <button
      type={type}
      className={[
        'button',
        `button--${variant}`,
        fullWidth ? 'button--full-width' : '',
        icon ? 'button--with-icon' : ''
      ].join(' ')}
      onClick={onClick}
      disabled={disabled}
    >
      {icon && <span className={`button__icon button__icon--${icon}`}></span>}
      {children}
    </button>
  )
}