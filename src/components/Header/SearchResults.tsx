import { FC } from "react";
import { Movie } from "../../api/movie";
import Loader from "../ui/Loader/Loader";
import SearchResultLink from "./SearchResultLink";
import './SearchResults.scss';

type SearchResultsProps = {
  movies: Movie[] | undefined;
  isFetching: boolean;
  onClickMovie: () => void;
  activeAsModal: boolean;
}

const SearchResults: FC<SearchResultsProps> = ({ movies, isFetching, onClickMovie, activeAsModal }) => {
  return (
    <div className={`search-results ${activeAsModal ? 'search-results--modal' : ''}`}>
      {isFetching && !movies && <div className="search-results__no-results"><Loader small /></div>}
      {!isFetching && !movies && <div className="search-results__no-results">Произошла ошибка при поиске 😥</div>}
      {movies && (movies.length < 1
        ? <div className="search-results__no-results">По вашему запросу ничего не найдено</div>
        : (
          <ul className="search-results__list">
            {movies.map(movie =>
              <li key={movie.id}>
                <SearchResultLink movie={movie} onClick={onClickMovie} activeAsModal={activeAsModal} />
              </li>
            )}
          </ul>
        )
      )}
    </div>
  )
}

export default SearchResults;