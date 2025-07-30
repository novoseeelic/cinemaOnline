import { useQuery } from "@tanstack/react-query";
import { Movie, fetchMoviesByTitle } from "../api/movie";
import { useState } from "react";

export function useMoviesBySearch() {
  const [searchRequest, setSearchRequest] = useState<string>();
  const { data, isFetching } = useQuery({
    queryKey: ['movie', 'search', searchRequest],
    queryFn: () => searchRequest ? fetchMoviesByTitle(searchRequest) : new Array<Movie>
  });

  const movies: Movie[] | undefined = data;

  return { movies, isFetching, setSearchRequest };
}