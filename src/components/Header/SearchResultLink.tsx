import { FC, memo } from "react";
import { Movie } from "../../api/movie";
import Image from '../ui/Image/Image';
import { Link } from "react-router";
import Rating from "../ui/Rating/Rating";
import MovieHelper from "../../utils/MovieHelper";
import './SearchResultLink.scss';

type SearchResultLinkProps = {
  movie: Movie;
  onClick: () => void;
  activeAsModal: boolean;
}

const SearchResultLink: FC<SearchResultLinkProps> = ({ movie, onClick, activeAsModal }) => {
  const className = `search-result-link ${activeAsModal ? 'search-result-link--modal' : ''}`;

  return (
    <Link className={className} to={`/movie/${movie.id}`} onClick={onClick} >
      <div className="search-result-link__wrapper">
        <Image className="search-result-link__img" src={movie.posterUrl ?? ''} alt={movie.title} />
        <div className="search-result-link__content">
          <div className="search-result-link__content-top">
            <Rating small rating={movie.tmdbRating} />
            <span>{movie.releaseYear}</span>
            <span>{MovieHelper.getLocalizedGenres(movie.genres)}</span>
            <span>{MovieHelper.getRuntimeString(movie.runtime)}</span>
          </div>
          <span className="search-result-link__title">{movie.title}</span>
        </div>
      </div>
    </Link>
  )
}

export default memo(SearchResultLink);