import { apiClient } from './apiClient'

export const fetchGenres = async () => {
  const response = await apiClient.get('/genres')
  return response.data
}