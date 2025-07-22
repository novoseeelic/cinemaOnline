import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '@/store/store'
import { fetchMovieById } from '@/store/slices/movieSlice'
import { addToFavorites, removeFromFavorites } from '@/store/slices/favoriteSlice'
import { openAuthModal } from '@/store/slices/authSlice'
import { fetchMovieById as apiFetchMovie } from '@/services/movieApi'
import { Button } from '@/components/shared/Button'
import { TrailerModal } from '@/components/movies/TrailerModal'
import { Loader } from '@/components/shared/Loader'
import './MoviePage.scss'

export const MoviePage: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const dispatch = useAppDispatch()
  const { currentMovie, loading } = useAppSelector((state) => state.movies)
  const { isAuthenticated } = useAppSelector((state) => state.auth)
  const { list: favorites } = useAppSelector((state) => state.favorites)

  console.log(currentMovie)

  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    if (!id) return
    const loadMovie = async () => {
      try {
        const movie = await apiFetchMovie(id)
        dispatch(fetchMovieById(movie))
      } catch (error) {
        console.error('Ошибка загрузки фильма:', error)
      }
    }
    loadMovie()
  }, [id, dispatch])

  const isFavorite = favorites.some((movie) => movie.id === id)

  const handleToggleFavorite = () => {
    if (!isAuthenticated) {
      dispatch(openAuthModal())
      return
    }
    if (isFavorite) {
      dispatch(removeFromFavorites({ id }))
    } else {
      dispatch(addToFavorites(currentMovie))
    }
  }

  const handleOpenTrailer = () => {
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
  }

  if (loading || !currentMovie) {
    return <Loader />
  }

  return (
    <div className="movie-page">
      <div className="movie-details">
        <img src={currentMovie.posterUrl} alt={currentMovie.title} className="movie-details__poster" />
        
        <div className="movie-details__info">
          <h1 className="movie-details__title">{currentMovie.title}</h1>
          <p className="movie-details__year">Год: {currentMovie.relaseYear}</p>
          <p className="movie-details__rating">Рейтинг: ⭐ {currentMovie.tmdbRating}</p>
          <p className="movie-details__description">{currentMovie.plot}</p>

          <div className="movie-details__actions">
            <Button onClick={handleOpenTrailer} variant="secondary">
              Посмотреть трейлер
            </Button>
            <Button onClick={handleToggleFavorite}>
              {isFavorite ? 'Удалить из избранного' : 'Добавить в избранное'}
            </Button>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <TrailerModal trailerUrl={currentMovie.trailerUrl} onClose={handleCloseModal} />
      )}
    </div>
  )
}

