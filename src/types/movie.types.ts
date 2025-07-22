export type Movie = {
  id: string
  title: string
  originalTitle?: string
  plot: string
  relaseYear: number
  posterUrl: string
  trailerUrl: string
  genres: string[]
  tmdbRating:	number
}