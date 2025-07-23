import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '@/store/store'
import { fetchRandomMovieStart, fetchRandomMovieSuccess } from '@/store/slices/movieSlice'
import { fetchRandomMovie } from '@/services/movieApi'
import { Button } from '@/components/shared/Button'
import './RandomMovie.scss'
import { MoviePage } from '@/pages/Movie/MoviePage'
import { Link } from 'react-router-dom'

export const RandomMovie: React.FC = () => {
  const dispatch = useAppDispatch()
  const { randomMovie, loading } = useAppSelector((state) => state.movies)
  const { isAuthenticated } = useAppSelector((state) => state.auth)

  // Обработчик кнопки "Показать другой"
  const handleGenerateRandomMovie = async () => {
    dispatch(fetchRandomMovieStart())
    try {
      const movie = await fetchRandomMovie()
      dispatch(fetchRandomMovieSuccess(movie))
    } catch (error) {
      console.error('Ошибка загрузки случайного фильма:', error)
    }
  }

  // Загружаем случайный фильм при первом рендере
  useEffect(() => {
    if (!randomMovie && !loading) {
      handleGenerateRandomMovie()
    }
  }, [randomMovie, loading])

  return (
    <section className="random-movie">
      <h2>Случайный фильм</h2>

      {loading ? (
        <p>Загружаем фильм...</p>
      ) : randomMovie ? (
        <div className="random-movie__container">
          {/* Информация о фильме */}
          <div className="random-movie__info">
            <div className="random-movie__meta">
              <span className="random-movie__rating">⭐️ {randomMovie.tmdbRating}</span>
              <span>{randomMovie.relaseYear}</span>
              <span>{randomMovie.genres}</span>
              <span>{randomMovie.runtime} мин</span>
            </div>
            <h3 className="random-movie__title">{randomMovie.title}</h3>
            <p className="random-movie__description">{randomMovie.plot}</p>
            <div className="random-movie__buttons">
              <Button variant="primary">Трейлер</Button>
              {/* <Button variant="secondary">О фильме</Button> */}
              <Link to={`/movies/${randomMovie.id}`}>
                <Button variant="secondary">О фильме</Button>
              </Link>
              <Button variant="icon" icon="heart">
                {isAuthenticated ? 'Добавить в избранное' : 'Войти'}
              </Button>
              <Button variant="icon" icon="share">Поделиться</Button>
            </div>
          </div>

          {/* Обложка фильма */}
          <div className="random-movie__poster-wrapper">
            <img
              src={randomMovie.posterUrl}
              alt={randomMovie.title}
              className="random-movie__poster"
            />
          </div>
        </div>
      ) : (
        <p>Фильм не найден. Попробуйте снова.</p>
      )}
    </section>
  )
}