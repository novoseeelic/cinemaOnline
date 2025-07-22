import React, { useState } from 'react'
import { LoginForm } from './LoginForm'
import { RegisterForm } from './RegisterForm'
import './AuthModal.scss'

export const AuthModal = ({ onClose }: { onClose: () => void }) => {
  const [isLogin, setIsLogin] = useState(true)

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal modal--auth" onClick={(e) => e.stopPropagation()}>
        <div className="modal-tabs">
          <button className={isLogin ? 'active' : ''} onClick={() => setIsLogin(true)}>Войти</button>
          <button className={!isLogin ? 'active' : ''} onClick={() => setIsLogin(false)}>Регистрация</button>
        </div>
        {isLogin ? <LoginForm onClose={onClose} /> : <RegisterForm onClose={onClose} />}
      </div>
    </div>
  )
}