import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Movie } from '@/types/movie.types'

interface MovieState {
  currentMovie: Movie | null
  randomMovie: Movie | null
  topMovies: Movie[]
  loading: boolean
  error: string | null
}

const initialState: MovieState = {
  currentMovie: null,
  randomMovie: null,
  topMovies: [],
  loading: false,
  error: null
}

export const movieSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    fetchMovieById: (state, action: PayloadAction<Movie>) => {
      state.currentMovie = action.payload
    },
    fetchMovieByIdStart: (state) => {
      state.loading = true
      state.error = null
    },
    fetchMovieByIdSuccess: (state, action: PayloadAction<Movie>) => {
      state.currentMovie = action.payload
      state.loading = false
    },
    fetchRandomMovieStart: (state) => {
      state.loading = true
      state.error = null
    },
    fetchRandomMovieSuccess: (state, action: PayloadAction<Movie>) => {
      state.randomMovie = action.payload
      state.loading = false
    },
    fetchTopMoviesSuccess: (state, action: PayloadAction<Movie[]>) => {
      state.topMovies = action.payload
    },
    fetchFailure: (state, action: PayloadAction<string>) => {
      state.loading = false
      state.error = action.payload
    }
  }
})

// Экспортируем экшены и редюсер
export const { 
  fetchMovieById, 
  fetchMovieByIdStart,
  fetchMovieByIdSuccess,
  fetchRandomMovieStart, 
  fetchRandomMovieSuccess, 
  fetchTopMoviesSuccess, 
  fetchFailure 
} = movieSlice.actions

export default movieSlice.reducer