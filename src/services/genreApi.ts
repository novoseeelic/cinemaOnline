import { apiClient } from './apiClient'
import { Movie } from '@/types/movie.types'

export interface FetchMoviesByGenreParams {
  genre: string
  page?: number
  count?: number
}

export const fetchMoviesByGenre = async ({
  genre,
  page = 1,
  count = 10
}: FetchMoviesByGenreParams): Promise<Movie[]> => {
  const response = await apiClient.get('/movie', {
    params: { genre, page, count }
  })
  return response.data
}

export const fetchGenres = async (): Promise<string[]> => {
  const response = await apiClient.get('/movie/genres')
  return response.data // массив строк: ["Action", "Drama", ...]
}