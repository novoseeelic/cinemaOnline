import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { Movie, fetchMoviesPage } from "../api/movie";

export function useMoviesByGenre(genre: string) {
  const [movies, setMovies] = useState<Movie[]>();
  const [lastPage, setLastPage] = useState<number>(1);

  const { data } = useQuery({
    queryKey: ['movie', genre, lastPage],
    queryFn: () => fetchMoviesPage(genre, lastPage)
  });

  useEffect(() => {
    if (data) {
      setMovies(movies => movies && lastPage > 1 ? [...movies, ...data] : data);
    }
  }, [data]);

  const loadNextPage = () => {
    setLastPage(prev => prev + 1);
  }

  return { movies, loadNextPage };
}