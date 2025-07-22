import { apiClient } from './apiClient'

export const login = async (email: string, password: string) => {
  const response = await apiClient.post('/auth/login', { email, password })
  return response.data
}

export const register = async (name: string, email: string, password: string) => {
  const response = await apiClient.post('/auth/user', { name, email, password })
  return response.data
}

export const logout = async () => {
  const response = await apiClient.post('/auth/logout')
  return response.data
}

export const fetchCurrentUser = async () => {
  const response = await apiClient.get('/users/me')
  return response.data
}