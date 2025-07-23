// src/store/slices/genreSlice.ts

import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface GenreState {
  genres: { id: string; name: string; image: string }[]
  movies: any[] // Здесь должен быть тип Movie
  loading: boolean
  hasMore: boolean
  currentPage: number
}

const initialState: GenreState = {
  genres: [],
  movies: [],
  loading: false,
  hasMore: true,
  currentPage: 1
}

export const genreSlice = createSlice({
  name: 'genres',
  initialState,
  reducers: {
    fetchGenresStart: (state) => {
      state.loading = true
    },
    fetchGenresSuccess: (state, action) => {
      state.genres = action.payload
      state.loading = false
    },
    fetchMoviesByGenreStart: (state) => {
      state.loading = true
    },
    fetchMoviesByGenreSuccess: (state, action: PayloadAction<{ movies: any[]; hasMore: boolean }>) => {
      state.movies = state.currentPage === 1 ? action.payload.movies : [...state.movies, ...action.payload.movies]
      state.hasMore = action.payload.hasMore
      state.loading = false
    },
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload
    },
    clearGenreMovies: (state) => {
      state.movies = []
      state.currentPage = 1
      state.hasMore = true
    }
  }
})

export const {
  fetchGenresStart,
  fetchGenresSuccess,
  fetchMoviesByGenreStart,
  fetchMoviesByGenreSuccess,
  setCurrentPage,
  clearGenreMovies
} = genreSlice.actions

export default genreSlice.reducer