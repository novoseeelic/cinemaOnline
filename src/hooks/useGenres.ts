import { useQuery } from "@tanstack/react-query"
import { fetchGenres } from "../api/movie";

const useGenres = () => {
  const query = useQuery({
    queryKey: ['genres', 'list'],
    queryFn: fetchGenres
  });

  const genres = query.data;
  const isFetching = query.isFetching;
  const error = query.error;

  return { genres, isFetching, error };
}

export default useGenres;