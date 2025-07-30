import { useQuery } from "@tanstack/react-query";
import { fetchMovie, Movie } from "../api/movie";

export function useMovie(movieId: number) {
  const query = useQuery({
    queryKey: ['movie', movieId],
    queryFn: () => fetchMovie(movieId),
  });

  const movie: Movie | undefined = query.data;
  const isFetching = query.isFetching;
  const error = query.error;
  return { movie, isFetching, error };
}