import { createSlice } from '@reduxjs/toolkit'
import { Movie } from '@/types/movie.types'

interface FavoriteState {
  list: Movie[]
}

const initialState: FavoriteState = {
  list: []
}

const favoriteSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addToFavorites: (state, action) => {
      state.list.push(action.payload)
    },
    removeFromFavorites: (state, action) => {
      state.list = state.list.filter((movie) => movie.id !== action.payload.id)
    }
  }
})

export const { addToFavorites, removeFromFavorites } = favoriteSlice.actions
export default favoriteSlice.reducer