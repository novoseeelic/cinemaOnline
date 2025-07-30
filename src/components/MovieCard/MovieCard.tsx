import { FC } from "react";
import { Movie } from "../../api/movie";
import { Link } from "react-router";
import Image from '../ui/Image/Image';
import Skeleton from "../ui/Skeleton/Skeleton";
import { memo } from "react";
import ButtonIcon from "../ui/ButtonIcon/ButtonIcon";
import IconCancel from '/src/assets/icons/cancel.svg?react';
import './MovieCard.scss';

type MovieCardProps = {
  movie: Movie | undefined;
  topPosition?: number;
  onClickRemove?: (movieId: number) => void;
}

const MovieCard: FC<MovieCardProps> = ({ movie, topPosition, onClickRemove }) => {
  if (!movie) {
    return <Skeleton className='movie-card__img movie-card__img--loading' />
  }

  return (
    <div className="movie-card">
      <Link className="movie-card__link" to={`/movie/${movie.id}`}>
        {movie.posterUrl
          ? <Image src={movie.posterUrl} alt={movie.title} className="movie-card__img" loadingClassName="movie-card__img--loading" />
          : <span className="movie-card__img movie-card__text">{movie.title}</span>}
      </Link>
      {topPosition && <span className='movie-card__pos'>{topPosition}</span>}
      {onClickRemove &&
        <ButtonIcon
          className="movie-card__remove-btn"
          icon={<IconCancel aria-hidden={true} width={24} height={24} />}
          onClick={() => onClickRemove(movie.id)}
          ariaLabel='Удалить' />
      }
    </div>

  )
}

export default memo(MovieCard);