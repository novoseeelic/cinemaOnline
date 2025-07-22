import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '@/store/store'
import { MovieCard } from '@/components/movies/MovieCard'

export const AccountPage: React.FC = () => {
  const { user } = useSelector((state: RootState) => state.auth)
  const { list } = useSelector((state: RootState) => state.favorites)

  return (
    <div className="account-page">
      <h2>Профиль</h2>
      <p>Имя: {user?.name}</p>
      <p>Email: {user?.email}</p>

      <h3>Избранные фильмы</h3>
      <div className="movie-list">
        {list.map((movie) => (
          <MovieCard key={movie.id} id={movie.id} title={movie.title} poster={movie.poster} />
        ))}
      </div>
    </div>
  )
}