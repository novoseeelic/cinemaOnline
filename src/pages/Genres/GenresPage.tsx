import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '@/store/store'
import { fetchGenresStart, fetchGenresSuccess } from '@/store/slices/genreSlice'
import { fetchGenres } from '@/services/genreApi'
import { GenreCard } from '@/components/genres/GenreCard'
import { getGenreImage } from '@/assets/genreImages'
import './GenresPage.scss'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'

export const GenresPage: React.FC = () => {
  const dispatch = useAppDispatch()
  const { genres, loading } = useAppSelector((state) => state.genres)

  useEffect(() => {
    const loadGenres = async () => {
      dispatch(fetchGenresStart())
      try {
        const genreNames: string[] = await fetchGenres() // API возвращает массив строк

        // Преобразуем в объекты с id и изображением
        const genresWithImage = genreNames.map((name, index) => ({
          id: String(index),
          name,
          image: getGenreImage(name)
        }))

        dispatch(fetchGenresSuccess(genresWithImage))
      } catch (error) {
        console.error('Ошибка загрузки жанров:', error)
      }
    }

    loadGenres()
  }, [dispatch])

  if (loading) return <p>Загружаем жанры...</p>

  return (
    <>
      <Header />
      <div className="genres-page">
        <h1>Жанры</h1>
        <div className="genre-list">
          {genres.map((genre) => (
            <GenreCard
              key={genre.id}
              id={genre.id}
              name={genre.name}
              image={genre.image}
            />
          ))}
        </div>
      </div>
      <Footer />
    </>
  )
}