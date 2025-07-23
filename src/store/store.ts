// import { configureStore } from '@reduxjs/toolkit'
// import authReducer from './slices/authSlice'
// import movieReducer from './slices/movieSlice'
// import genreReducer from './slices/genreSlice'
// import favoriteReducer from './slices/favoriteSlice'
// import searchReducer from './slices/searchSlice'
// import { useSelector, useDispatch } from 'react-redux'
// import type { TypedUseSelectorHook } from 'react-redux'

// export const store = configureStore({
//   reducer: {
//     auth: authReducer,
//     movies: movieReducer,
//     genres: genreReducer,
//     favorites: favoriteReducer,
//     search: searchReducer
//   }
// })

// export type RootState = ReturnType<typeof store.getState>
// export type AppDispatch = typeof store.dispatch

// export const useAppDispatch = () => useDispatch<AppDispatch>()
// export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

import { configureStore } from '@reduxjs/toolkit'
import genreSlice from './slices/genreSlice'
import movieSlice from './slices/movieSlice'
import authSlice from './slices/authSlice'
import favoriteSlice from './slices/favoriteSlice'
import { useSelector, useDispatch } from 'react-redux'
import type { TypedUseSelectorHook } from 'react-redux'

export const store = configureStore({
  reducer: {
    genres: genreSlice,
    movies: movieSlice,
    auth: authSlice,
    favorites: favoriteSlice
  }
})

// Определяем типы для использования в приложении
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector