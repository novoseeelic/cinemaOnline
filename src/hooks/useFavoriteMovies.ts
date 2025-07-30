import { useMutation, useQuery } from "@tanstack/react-query";
import { fetchDeleteMovieFromFavorites, fetchFavoriteMovies } from "../api/favorites";
import { useCallback } from "react";
import RootStore from "../store/RootStore";

const useFavoriteMovies = () => {
  const query = useQuery({
    queryKey: ['movie', 'favorites'],
    queryFn: fetchFavoriteMovies,
  });

  const removeMutation = useMutation({
    mutationKey: ['favorites', 'remove'],
    mutationFn: fetchDeleteMovieFromFavorites
  });

  const actualFavoriteIds = RootStore.auth.user?.favorites ?? [];
  const movies = query.data?.filter(movie => actualFavoriteIds.includes(movie.id.toString()));

  const onClickRemove = useCallback((movieId: number) => {
    removeMutation.mutate(movieId);
  }, []);

  return { movies, onClickRemove };
}

export default useFavoriteMovies;