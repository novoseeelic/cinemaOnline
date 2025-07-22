import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { HomePage } from '@/pages/Home/HomePage'
import { GenresPage } from '@/pages/Genres/GenresPage'
import { GenrePage } from '@/pages/Genre/GenrePage'
import { MoviePage } from '@/pages/Movie/MoviePage'
import { AccountPage } from '@/pages/Account/AccountPage'
import { NotFoundPage } from '@/pages/NotFound/NotFoundPage'
import { ProtectedRoute } from '@/components/shared/ProtectedRoute'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/genres" element={<GenresPage />} />
        <Route path="/genres/:id" element={<GenrePage />} />
        <Route path="/movies/:id" element={<MoviePage />} />
        <Route path="/account" element={
          <ProtectedRoute>
            <AccountPage />
          </ProtectedRoute>
        } />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  )
}

export default App