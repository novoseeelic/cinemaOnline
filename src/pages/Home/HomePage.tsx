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
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'

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
    <>
      <Header />
      <main className="home-page">
        {/* Случайный фильм */}
        <section className="home-page__random-movie">
          <RandomMovie />
        </section>

        {/* Топ-10 фильмов */}
        <section className="home-page__top-movies">
          <h2>Топ 10 фильмов</h2>
          <div className="movie-cards">
            {topMovies.map((movie, index) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}