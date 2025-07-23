import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '@/store/store'
import { clearGenreMovies, fetchMoviesByGenreStart, fetchMoviesByGenreSuccess, setCurrentPage } from '@/store/slices/genreSlice'
import { fetchMoviesByGenre } from '@/services/genreApi'
import { MovieCard } from '@/components/movies/MovieCard'
import { Loader } from '@/components/shared/Loader'
import './GenrePage.scss'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'

export const GenrePage: React.FC = () => {
  const dispatch = useAppDispatch()
  const { genreName } = useParams<{ genreName: string }>()
  const { movies, loading, hasMore, currentPage } = useAppSelector((state) => state.genres)

  // Декодируем slug
  const genreTitle = decodeURIComponent(genreName || '').replace(/-/g, ' ')

  const loadMovies = async (page: number) => {
    if (loading) return
    dispatch(fetchMoviesByGenreStart())
    try {
      const data = await fetchMoviesByGenre({ genre: genreTitle, page, count: 10 })
      const hasMore = data.length === 10
      dispatch(fetchMoviesByGenreSuccess({ movies: data, hasMore }))
    } catch (error) {
      console.error('Ошибка загрузки фильмов:', error)
    }
  }

  // Загрузка при монтировании или смене жанра
  useEffect(() => {
    dispatch(clearGenreMovies())
    loadMovies(1)
  }, [genreName])

  // Инфинити-скролл
  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop >= document.documentElement.offsetHeight - 200 &&
        !loading &&
        hasMore
      ) {
        const nextPage = currentPage + 1
        dispatch(setCurrentPage(nextPage))
        loadMovies(nextPage)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [loading, hasMore, currentPage])

  return (
    <>
      <Header />
      <div className="genre-page">
        <header className="genre-page__header">
          <Link to="/genres" className="genre-page__back">
            <svg viewBox="0 0 24 24"> {/* SVG стрелка */}
              <path d="M15.41 7.41L14 6l-7 7 7 7 1.41-1.41z" />
              <path d="M0 0h24v24H0z" fill="none" />
            </svg>
            {genreTitle}
          </Link>
        </header>

        <div className="movie-grid">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>

        {loading && <Loader />}
        {!hasMore && !loading && <p className="genre-page__end">Больше фильмов нет</p>}
      </div>
      <Footer />
    </>
  )
}