import { createSlice } from '@reduxjs/toolkit'
import { User } from '@/types/auth.types'

interface AuthState {
  user: User | null
  isAuthenticated: boolean
  loading: boolean
  error: string | null
  isAuthModalOpen: boolean
}

const initialState: AuthState = {
  user: null,
  isAuthenticated: false,
  loading: false,
  error: null,
  isAuthModalOpen: false
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginStart: (state) => {
      state.loading = true
      state.error = null
    },
    loginSuccess: (state, action) => {
      state.user = action.payload
      state.isAuthenticated = true
      state.loading = false
      state.isAuthModalOpen = false
    },
    loginFailure: (state, action) => {
      state.loading = false
      state.error = action.payload
    },
    registerStart: (state) => {
      state.loading = true
      state.error = null
    },
    registerSuccess: (state, action) => {
      state.user = action.payload
      state.isAuthenticated = true
      state.loading = false
      state.isAuthModalOpen = false
    },
    registerFailure: (state, action) => {
      state.loading = false
      state.error = action.payload
    },
    logout: (state) => {
      state.user = null
      state.isAuthenticated = false
      state.error = null
    },
    openAuthModal: (state) => {
      state.isAuthModalOpen = true
      state.error = null
    },
    closeAuthModal: (state) => {
      state.isAuthModalOpen = false
      state.error = null
    }
  }
})

// Экспортируем нужные экшены
export const { 
  loginStart, 
  loginSuccess, 
  loginFailure,
  registerStart,
  registerSuccess,
  registerFailure,
  logout,
  openAuthModal,
  closeAuthModal
} = authSlice.actions

export default authSlice.reducer