import React from 'react'
import './MovieCard.scss'
import { Link } from 'react-router-dom'

interface MovieCardProps {
  movie: {
    id: string
    posterUrl: string
    title: string
  }
}

export const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  return (
    <Link to={`/movies/${movie.id}`} className="movie-card">
      <div className="movie-card">
        <img src={movie.posterUrl} alt={movie.title} className="movie-card__poster" />
      </div>
    </Link>
  )
}