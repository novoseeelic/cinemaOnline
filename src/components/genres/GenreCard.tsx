import React from 'react'
import { Link } from 'react-router-dom'
import './GenreCard.scss'

interface GenreCardProps {
  id: string
  name: string
  image: string
}

export const GenreCard: React.FC<GenreCardProps> = ({ id, name, image }) => {
  return (
    <div className="genre-card">
      <Link to={`/genres/${id}`}>
        <img src={image} alt={name} className="genre-card__image" />
        <h3 className="genre-card__title">{name}</h3>
      </Link>
    </div>
  )
}