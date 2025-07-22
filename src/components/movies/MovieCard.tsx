import React from 'react'
import { Link } from 'react-router-dom'
import './MovieCard.scss'
import { Movie } from '@/types/movie.types'

interface MovieCardProps {
  movie: Movie
  position: number
}

export const MovieCard: React.FC<MovieCardProps> = ({ movie, position }) => {
  return (
    <div className="movie-card">
      <span className="movie-card__position">{position}</span>
      <img src={movie.posterUrl} alt={movie.title} />
      <h3>{movie.title}</h3>
    </div>
  )
}