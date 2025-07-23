import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useAppSelector, useAppDispatch } from '@/store/store'
import { fetchMovieByIdSuccess, fetchMovieByIdStart, fetchFailure } from '@/store/slices/movieSlice'
import { fetchMovieById } from '@/services/movieApi'
import { Button } from '@/components/shared/Button'
import './MoviePage.scss'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'

export const MoviePage: React.FC = () => {
  const dispatch = useAppDispatch()
  const { id } = useParams<{ id: string }>()
  const { currentMovie, loading } = useAppSelector((state) => state.movies)
  const { isAuthenticated } = useAppSelector((state) => state.auth)

  useEffect(() => {
    const loadMovie = async () => {
      if (id) {
        dispatch(fetchMovieByIdStart())
        try {
          const movie = await fetchMovieById(id)
          dispatch(fetchMovieByIdSuccess(movie))
        } catch (error) {
          console.error('Ошибка загрузки фильма:', error)
          dispatch(fetchFailure('Не удалось загрузить фильм'))
        }
      }
    }
  
    loadMovie() // вызываем асинхронную функцию
  }, [id, dispatch])

  return (
    <>
      <Header />
      <section className="movie-page">
        {loading ? (
          <p>Загружаем фильм...</p>
        ) : currentMovie ? (
          <div className="movie-page__container">
            {/* Информация о фильме */}
            <div className="movie-page__info">
              <div className="movie-page__meta">
                <span className="movie-page__rating">⭐️ {currentMovie.tmdbRating}</span>
                <span>{currentMovie.relaseYear}</span>
                <span>{currentMovie.genres}</span>
                <span>{currentMovie.runtime} мин</span>
              </div>
              <h2 className="movie-page__title">{currentMovie.title}</h2>
              <p className="movie-page__description">{currentMovie.plot}</p>
              <div className="movie-page__buttons">
                <Button variant="primary">Трейлер</Button>
                {/* <Button variant="secondary">О фильме</Button> */}
                <Button variant="icon" icon="heart">
                  {isAuthenticated ? 'Добавить в избранное' : 'Войти'}
                </Button>
                {/* <Button variant="icon" icon="share">
                  Поделиться
                </Button> */}
              </div>

              {/* Раздел "О фильме" */}
              <div className="movie-page__details">
                <h3 className="movie-page__details-title">О фильме</h3>
                <dl className="movie-page__details-list">
                  <dt>Язык оригинала:</dt>
                  <dd>{currentMovie.language}</dd>
                  <dt>Бюджет:</dt>
                  <dd>{currentMovie.budget} руб.</dd>
                  <dt>Выручка:</dt>
                  <dd>{currentMovie.revenue} руб.</dd>
                  <dt>Режиссёр:</dt>
                  <dd>{currentMovie.director}</dd>
                  <dt>Продолжительность:</dt>
                  <dd>{currentMovie.runtime} мин.</dd>
                  <dt>Награды:</dt>
                  <dd>{currentMovie.awardsSummary}</dd>
                </dl>
              </div>
            </div>

            {/* Обложка фильма */}
            <div className="movie-page__poster-wrapper">
              <img
                src={currentMovie.posterUrl}
                alt={currentMovie.title}
                className="movie-page__poster"
              />
            </div>
          </div>
        ) : (
          <p>Фильм не найден. Попробуйте снова.</p>
        )}
      </section>
      <Footer />
    </>
  )
}