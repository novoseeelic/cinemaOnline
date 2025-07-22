import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '@/store/store'
import { fetchRandomMovieStart, fetchRandomMovieSuccess } from '@/store/slices/movieSlice'
import { fetchRandomMovie } from '@/services/movieApi'
import { Button } from '@/components/shared/Button'
import './RandomMovie.scss'

export const RandomMovie: React.FC = () => {
  const dispatch = useAppDispatch()
  const { randomMovie, loading } = useAppSelector((state) => state.movies)

  

  // Обработчик кнопки "Показать другой"
  const handleGenerateRandomMovie = async () => {
    dispatch(fetchRandomMovieStart())
    try {
      const movie = await fetchRandomMovie()
      console.log('Получен случайный фильм:', movie) // 🔍 Проверяем — приходит ли объект?
      dispatch(fetchRandomMovieSuccess(movie))
    } catch (error) {
      console.error('Ошибка загрузки случайного фильма:', error)
      // dispatch(fetchFailure('Не удалось загрузить фильм'))
    }
  }

  // ✅ Загружаем случайный фильм при первом рендере
  useEffect(() => {
    if (!randomMovie && !loading) {
      handleGenerateRandomMovie()
    }
  }, [randomMovie, loading])

  console.log('randomMovie:', randomMovie)

  return (
    <section className="random-movie">
      <h2>Случайный фильм</h2>

      {loading ? (
        <p>Загружаем фильм...</p>
      ) : randomMovie ? (
        <div className="random-movie__card">
          <img
            src={randomMovie.posterUrl}
            alt={randomMovie.title}
            className="random-movie__poster"
          />
          <div className="random-movie__info">
            <h3 className="random-movie__title">{randomMovie.title}</h3>
            {/* <p className="random-movie__description">{randomMovie.description}</p> */}
            {/* 🔁 Исправлено: вызываем правильную функцию */}
            <Button onClick={handleGenerateRandomMovie} variant="primary">
              Показать другой
            </Button>
          </div>
        </div>
      ) : (
        <div className="random-movie__empty">
          <p>Фильм не найден. Нажмите, чтобы попробовать снова.</p>
          <Button onClick={handleGenerateRandomMovie} variant="secondary">
            Сгенерировать
          </Button>
        </div>
      )}
    </section>
  )
}