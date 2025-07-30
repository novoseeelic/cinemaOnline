import { useMutation } from "@tanstack/react-query";
import { fetchAddMovieToFavorites, fetchDeleteMovieFromFavorites } from "../api/favorites";
import RootStore from "../store/RootStore";

const useFavoriteButton = (movieId: number) => {
  const isFavorite: boolean | undefined = RootStore.auth.user?.favorites.includes(movieId.toString());

  const addMutation = useMutation({
    mutationKey: ['favorites', movieId],
    mutationFn: () => fetchAddMovieToFavorites(movieId)
  });

  const removeMutation = useMutation({
    mutationKey: ['favorites', movieId],
    mutationFn: () => fetchDeleteMovieFromFavorites(movieId)
  });

  const handleClick = () => {
    if (isFavorite === undefined) {
      RootStore.auth.setModalActive(true);
      return;
    }

    isFavorite ? removeMutation.mutate() : addMutation.mutate();
  }

  return { isFavorite, handleClick }
}

export default useFavoriteButton;