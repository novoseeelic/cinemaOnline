import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { HomePage } from '@/pages/Home/HomePage'
import { MoviePage } from '@/pages/Movie/MoviePage'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies/:id" element={<MoviePage />} />
      </Routes>
    </Router>
  )
}

export default App