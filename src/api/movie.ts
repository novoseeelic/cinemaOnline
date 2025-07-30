import { z, ZodError } from 'zod';
import api, { validateResponse } from './api';

export const MovieSchema = z.object({
  id: z.number(),
  title: z.string(),
  originalTitle: z.string(),
  language: z.string(),
  releaseYear: z.number(),
  releaseDate: z.string(),
  genres: z.array(z.string()),
  plot: z.string(),
  runtime: z.number(),
  budget: z.string().nullable(),
  revenue: z.string().nullable(),
  homepage: z.string(),
  status: z.string(),
  posterUrl: z.string().nullable(),
  backdropUrl: z.string().nullable(),
  trailerUrl: z.string(),
  trailerYouTubeId: z.string(),
  tmdbRating: z.number(),
  searchL: z.string(),
  keywords: z.array(z.string()),
  countriesOfOrigin: z.array(z.string()),
  languages: z.array(z.string()),
  cast: z.array(z.string()),
  director: z.string().nullable(),
  production: z.string().nullable(),
  awardsSummary: z.string().nullable(),
});

export type Movie = z.infer<typeof MovieSchema>;
export const MoviesArraySchema = z.array(MovieSchema);
export const GenresArraySchema = z.array(z.string());

export const fetchMovie = async (id: number): Promise<Movie> => {
  try {
    const response = await api.get(`/movie/${id}`);
    return MovieSchema.parse(response.data);
  }
  catch (error) {
    // Когда передаем ID несуществующего фильма, то получаем пустой объект и ловим ZodError при парсинге
    if (error instanceof ZodError) {
      throw new Error('Фильм не найден')
    }
    throw error;
  }
}

export const fetchRandomMovie = async (): Promise<Movie> => {
  const response = await api.get('/movie/random');
  validateResponse(response);
  return MovieSchema.parse(response.data);
}

export const fetchTopMovies = async (): Promise<Movie[]> => {
  const response = await api.get('/movie/top10');
  validateResponse(response);
  return MoviesArraySchema.parse(response.data);
}

export const fetchGenres = async (): Promise<string[]> => {
  const response = await api.get('/movie/genres');
  validateResponse(response);
  return GenresArraySchema.parse(response.data);
}

export const fetchMoviesPage = async (genre: string, page: number): Promise<Movie[]> => {
  const response = await api.get('/movie', {
    params: { genre, page, count: 10 }
  });
  validateResponse(response);
  return MoviesArraySchema.parse(response.data);
}

export const fetchMoviesByTitle = async (title: string): Promise<Movie[]> => {
  const response = await api.get('/movie', {
    params: { title, count: 5 }
  });
  validateResponse(response);
  return MoviesArraySchema.parse(response.data);
}