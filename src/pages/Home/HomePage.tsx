import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchRandomMovieStart, fetchTopMoviesSuccess } from '@/store/slices/movieSlice'
import { fetchRandomMovie, fetchTopMovies } from '@/services/movieApi'
import { RootState, useAppDispatch, useAppSelector } from '@/store/store'
import { MovieCard } from '@/components/movies/MovieCard'
import { RandomMovie } from '@/components/movies/RandomMovie'
import './HomePage.scss'
import { Loader } from '@/components/shared/Loader'
import { Button } from '@/components/shared/Button'

export const HomePage: React.FC = () => {
  const dispatch = useAppDispatch()
  const { randomMovie, topMovies, loading } = useAppSelector((state) => state.movies)
  const { isAuthenticated } = useAppSelector((state) => state.auth)

  

  useEffect(() => {    
    const loadTopMovies = async () => {
      try {
        const data = await fetchTopMovies()
        dispatch(fetchTopMoviesSuccess(data))
      } catch (error) {
        console.error('Ошибка загрузки топ-фильмов:', error)
      }
    }

    // Загружаем случайный фильм (инициируем действие)
    dispatch(fetchRandomMovieStart())
    loadTopMovies()
  }, [dispatch])

  return (
    <main className="home-page">
      {/* Шапка */}
      <header className="home-page__header">
        <div className="home-page__logo">Маруся</div>
        <nav className="home-page__nav">
          <Button variant="text" onClick={() => console.log('Главная')}>
            Главная
          </Button>
          <Button variant="text" onClick={() => console.log('Жанры')}>
            Жанры
          </Button>
          <Button variant="text" onClick={() => console.log('Войти')}>
            Войти
          </Button>
        </nav>
        <input type="text" placeholder="Поиск..." />
      </header>

      {/* Случайный фильм */}
      <section className="home-page__random-movie">
        {loading ? (
          <Loader />
        ) : randomMovie ? (
          <div className="random-movie">
            <img src={randomMovie.posterUrl} alt={randomMovie.title} />
            <div className="random-movie__info">
              <h2>{randomMovie.title}</h2>
              <p>{randomMovie.plot}</p>
              <Button onClick={() => console.log('Посмотреть трейлер')}>Трейлер</Button>
            </div>
          </div>
        ) : (
          <p>Загрузка фильма...</p>
        )}
      </section>

      {/* Топ-10 фильмов */}
      <section className="home-page__top-movies">
        <h2>Топ 10 фильмов</h2>
        <div className="movie-cards">
          {topMovies.map((movie, index) => (
            <MovieCard key={movie.id} movie={movie} position={index + 1} />
          ))}
        </div>
      </section>
    </main>
  )

}