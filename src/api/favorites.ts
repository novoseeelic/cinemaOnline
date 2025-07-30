import RootStore from "../store/RootStore";
import api, { validateResponse } from "./api";
import { Movie, MoviesArraySchema } from "./movie";

export const fetchFavoriteMovies = async (): Promise<Movie[]> => {
  const response = await api.get('/favorites');
  validateResponse(response);
  return MoviesArraySchema.parse(response.data);
}

export const fetchAddMovieToFavorites = async (movieId: number): Promise<void> => {
  const response = await api.post('/favorites', { id: movieId.toString() }, {
    validateStatus: status => [200, 400].includes(status)
  });
  validateResponse(response);
  RootStore.auth.addMovieToFavorites(movieId.toString());
}

export const fetchDeleteMovieFromFavorites = async (movieId: number): Promise<void> => {
  const response = await api.delete(`/favorites/${movieId}`);
  validateResponse(response);
  RootStore.auth.removeMovieFromFavorites(movieId.toString());
}

