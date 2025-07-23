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
  runtime: number
  language:	string
  budget:	string
  revenue: string
  director: string
  awardsSummary: string
}