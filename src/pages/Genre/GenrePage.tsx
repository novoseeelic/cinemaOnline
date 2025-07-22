import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchMoviesByGenre } from '@/services/movieApi'
import { RootState } from '@/store/store'
import { MovieCard } from '@/components/movies/MovieCard'

export const GenrePage: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const dispatch = useDispatch()
  const [movies, setMovies] = useState<any[]>([])
  const [page, setPage] = useState(1)
  const [hasMore, setHasMore] = useState(true)

  useEffect(() => {
    const loadMovies = async () => {
      try {
        const data = await fetchMoviesByGenre(id!, page)
        if (data.length === 0) setHasMore(false)
        setMovies((prev) => [...prev, ...data])
      } catch (error) {
        console.error('Ошибка загрузки фильмов по жанру:', error)
      }
    }

    loadMovies()
  }, [id, page])

  const handleScroll = () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 500 && hasMore) {
      setPage((prev) => prev + 1)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [hasMore])

  return (
    <div className="genre-page">
      <h1>Фильмы по жанру</h1>
      <div className="movie-list">
        {movies.map((movie) => (
          <MovieCard key={movie.id} id={movie.id} title={movie.title} poster={movie.poster} />
        ))}
      </div>
    </div>
  )
}