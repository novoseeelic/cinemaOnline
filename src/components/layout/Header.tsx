import React from 'react'
import { Link } from 'react-router-dom'
import './Header.scss'

export const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo">Маруся</Link>
        <nav className="nav">
          <Link to="/genres">Жанры</Link>
          <Link to="/search">Поиск</Link>
          <button className="auth-button">Войти</button>
        </nav>
      </div>
    </header>
  )
}