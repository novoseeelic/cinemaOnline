import React from 'react'
import './Input.scss'

interface InputProps {
  label?: string
  placeholder: string
  value: string
  onChange: (value: string) => void // ← Передаём строку, а не event
  error?: string
  type?: string
}

export const Input: React.FC<InputProps> = ({
  label,
  placeholder,
  value,
  onChange,
  error,
  type = 'text'
}) => {
  return (
    <div className="input-wrapper">
      {label && <label className="input-label">{label}</label>}
      <input
        type={type}
        className={`input ${error ? 'input--error' : ''}`}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)} // ← Здесь извлекаем value и передаём дальше
      />
      {error && <div className="input-error">{error}</div>}
    </div>
  )
}