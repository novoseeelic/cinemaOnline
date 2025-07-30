import useFavoriteMovies from '../../../hooks/useFavoriteMovies';
import MovieCardList from '../../MovieCardList/MovieCardList';

const MyAccountFavorites = () => {
  const { movies, onClickRemove } = useFavoriteMovies();

  return (
    <MovieCardList carousel movies={movies} onClickRemove={onClickRemove} />
  )
}

export default MyAccountFavorites;