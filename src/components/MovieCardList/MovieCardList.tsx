import { FC } from "react";
import { Movie } from "../../api/movie";
import MovieCard from "../MovieCard/MovieCard";
import './MovieCardList.scss';

type MovieCardListProps = {
  movies: Movie[] | undefined;
  carousel?: boolean;
  top?: boolean;
  onClickRemove?: (movieId: number) => void;
}

const MovieCardList: FC<MovieCardListProps> = ({ movies, carousel, top, onClickRemove }) => {
  const items = movies ?? new Array<undefined>(10);

  return (
    <ul className={`movies-card-list ${carousel ? 'movies-card-list--carousel' : ''}`}>
      {items.map((movie, index) =>
        <li key={movie?.id ?? index}>
          <MovieCard
            movie={movie}
            topPosition={top ? index + 1 : undefined}
            onClickRemove={onClickRemove}
          />
        </li>
      )}
    </ul>
  )
}

export default MovieCardList;