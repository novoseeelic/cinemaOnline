import React, { useState } from 'react'
import { useAppDispatch } from '@/store/store'
import { loginStart, loginSuccess, loginFailure } from '@/store/slices/authSlice'
import { login, fetchCurrentUser } from '@/services/authApi'
import { Button } from '@/components/shared/Button'
import { Input } from '@/components/shared/Input'

export const LoginForm = ({ onClose }: { onClose: () => void }) => {
  const dispatch = useAppDispatch()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({})

  const validate = () => {
    const newErrors: { email?: string; password?: string } = {}
    if (!email) newErrors.email = 'Email обязателен'
    if (!password) newErrors.password = 'Пароль обязателен'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return

    dispatch(loginStart())
    try {
      await login(email, password)
      const user = await fetchCurrentUser()
      dispatch(loginSuccess(user))
      onClose()
    } catch (err) {
      dispatch(loginFailure('Неверный логин или пароль'))
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <Input label="Email" value={email} onChange={setEmail} error={errors.email} placeholder='Email' />
      <Input label="Пароль" type="password" value={password} onChange={setPassword} error={errors.password} placeholder='Пароль' />
      <Button type="submit">Войти</Button>
    </form>
  )
}