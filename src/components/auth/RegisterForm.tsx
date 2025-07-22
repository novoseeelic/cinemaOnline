import React, { useState } from 'react'
import { useAppDispatch } from '@/store/store'
import { Button } from '@/components/shared/Button'
import { Input } from '@/components/shared/Input'
import { register } from '@/services/authApi'
import { loginSuccess } from '@/store/slices/authSlice'
import './RegisterForm.scss'

interface RegisterFormProps {
  onClose: () => void
}

export const RegisterForm: React.FC<RegisterFormProps> = ({ onClose }) => {
  const dispatch = useAppDispatch()

  // Состояние формы
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  // Ошибки валидации
  const [errors, setErrors] = useState<{
    name?: string
    email?: string
    password?: string
  }>({})

  // Валидация полей
  const validate = (): boolean => {
    const newErrors: { name?: string; email?: string; password?: string } = {}

    if (!name.trim()) {
      newErrors.name = 'Имя обязательно'
    }

    if (!email.trim()) {
      newErrors.email = 'Email обязателен'
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Некорректный email'
    }

    if (!password) {
      newErrors.password = 'Пароль обязателен'
    } else if (password.length < 6) {
      newErrors.password = 'Пароль должен быть не менее 6 символов'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  // Обработчик отправки формы
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validate()) return

    try {
      await register(name, email, password)
      // После успешной регистрации — получаем данные пользователя
      const user = { id: '1', name, email } // временно, лучше заменить на реальный вызов fetchCurrentUser
      dispatch(loginSuccess(user))
      onClose() // закрываем модальное окно
    } catch (err: any) {
      setErrors({ email: err.response?.data?.message || 'Ошибка регистрации' })
    }
  }

  return (
    <form className="register-form" onSubmit={handleSubmit}>
      <h2>Регистрация</h2>

      <Input
        label="Имя"
        placeholder="Введите имя"
        value={name}
        onChange={(e) => {setName}}
        error={errors.name}
      />

      <Input
        label="Email"
        placeholder="Введите email"
        type="email"
        value={email}
        onChange={(e) => {setEmail}}
        error={errors.email}
      />

      <Input
        label="Пароль"
        placeholder="Введите пароль"
        type="password"
        value={password}
        onChange={(e) => {setPassword}}
        error={errors.password}
      />

      <Button type="submit" variant="primary" fullWidth>
        Зарегистрироваться
      </Button>

      <p className="form-footer">
        Уже есть аккаунт?{' '}
        <button type="button" className="link-button" onClick={() => {}}>
          Войти
        </button>
      </p>
    </form>
  )
}