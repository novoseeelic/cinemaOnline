import React from 'react'
import './Button.scss'

interface ButtonProps {
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'text'
  onClick?: () => void
}

export const Button: React.FC<ButtonProps> = ({ children, variant = 'primary', onClick }) => {
  return (
    <button
      className={`button button--${variant}`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}