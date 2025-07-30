import { useQuery } from "@tanstack/react-query";
import { fetchRandomMovie, Movie } from "../api/movie";

export function useRandomMovie() {
  const query = useQuery({
    queryKey: ['movie', 'random'],
    queryFn: () => fetchRandomMovie(),
  });

  const movie: Movie | undefined = query.data;
  const isFetching = query.isFetching;
  return { movie, isFetching };
}