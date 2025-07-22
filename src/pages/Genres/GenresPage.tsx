import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchGenresStart, fetchGenresSuccess } from '@/store/slices/genreSlice'
import { fetchGenres } from '@/services/genreApi'
import { RootState } from '@/store/store'
import { GenreCard } from '@/components/genres/GenreCard'

export const GenresPage: React.FC = () => {
  const dispatch = useDispatch()
  const { genres } = useSelector((state: RootState) => state.genres)

  useEffect(() => {
    const loadGenres = async () => {
      dispatch(fetchGenresStart())
      try {
        const data = await fetchGenres()
        dispatch(fetchGenresSuccess(data))
      } catch (error) {
        console.error('Ошибка загрузки жанров:', error)
      }
    }

    loadGenres()
  }, [dispatch])

  return (
    <div className="genres-page">
      <h1>Жанры</h1>
      <div className="genre-list">
        {genres.map((genre) => (
          <GenreCard key={genre.id} id={genre.id} name={genre.name} image={genre.image} />
        ))}
      </div>
    </div>
  )
}