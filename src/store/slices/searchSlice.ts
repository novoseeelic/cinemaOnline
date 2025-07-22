import { createSlice } from '@reduxjs/toolkit'
import { Movie } from '@/types/movie.types'

interface SearchState {
  results: Movie[]
  isOpen: boolean
}

const initialState: SearchState = {
  results: [],
  isOpen: false
}

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearchResults: (state, action) => {
      state.results = action.payload
    },
    openSearchModal: (state) => {
      state.isOpen = true
    },
    closeSearchModal: (state) => {
      state.isOpen = false
    }
  }
})

export const { setSearchResults, openSearchModal, closeSearchModal } = searchSlice.actions
export default searchSlice.reducer