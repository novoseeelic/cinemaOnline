import { apiClient } from './apiClient'

export const fetchRandomMovie = async () => {
  const response = await apiClient.get('/movie/random')
  console.log('Ответ API:', response.data)
  return response.data
}

export const fetchTopMovies = async () => {
  const response = await apiClient.get('/movie/top10')
  return response.data
}

export const fetchMovieById = async (id: string) => {
  const response = await apiClient.get(`/movie/${id}`)
  return response.data
}

export const fetchMoviesByGenre = async (genre: string, page: number = 1) => {
  const response = await apiClient.get(`/movie?genre=${genre}&page=${page}`)
  return response.data
}

export const searchMovies = async (query: string) => {
  const response = await apiClient.get(`/movie?query=${query}`)
  return response.data
}

export const addToFavorites = async (movieId: string) => {
  const response = await apiClient.post('/favorites', { movieId })
  return response.data
}

export const removeFromFavorites = async (movieId: string) => {
  const response = await apiClient.delete(`/favorites/${movieId}`)
  return response.data
}

export const fetchFavorites = async () => {
  const response = await apiClient.get('/favorites')
  return response.data
}