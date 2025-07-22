import React, { useState, useEffect } from 'react'
import { searchMovies } from '@/services/movieApi'
import { MovieCard } from '@/components/movies/MovieCard'
import { Input } from '@/components/shared/Input'

export const SearchModal = ({ onClose }: { onClose: () => void }) => {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<any[]>([])

  useEffect(() => {
    if (query.length > 2) {
      const load = async () => {
        const data = await searchMovies(query)
        setResults(data)
      }
      load()
    } else {
      setResults([])
    }
  }, [query])

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal modal--search" onClick={(e) => e.stopPropagation()}>
        <Input
          placeholder="Поиск фильма..."
          value={query}
          onChange={setQuery}
        />
        <div className="search-results">
          {results.map(movie => (
            <MovieCard key={movie.id} id={movie.id} title={movie.title} poster={movie.poster} />
          ))}
        </div>
      </div>
    </div>
  )
}