import { FC } from "react";
import './MoviesByGenre.scss';
import Container from "../../ui/Container/Container";
import Heading from "../../ui/Heading/Heading";
import MovieCardList from "../../MovieCardList/MovieCardList";
import Button from "../../ui/Button/Button";
import { useMoviesByGenre } from "../../../hooks/useMoviesByGenre";
import MovieHelper from "../../../utils/MovieHelper";
import { Link } from "react-router";
import IconArrowBack from '/src/assets/icons/arrow-back.svg?react';

type MoviesByGenreProps = {
  genre: string;
}

const MoviesByGenre: FC<MoviesByGenreProps> = ({ genre }) => {
  const { movies, loadNextPage } = useMoviesByGenre(genre);

  return (
    <section className="movies-by-genre">
      <Container>
        <div className="movies-by-genre__wrapper">
          <Heading level={1}>
            <Link className="movies-by-genre__back-link" to='/genres'>
              <IconArrowBack aria-hidden={true} />
              {MovieHelper.getLocalizedGenre(genre)}
            </Link>
          </Heading>
          <MovieCardList movies={movies} />
          <Button className="movies-by-genre__next-btn" onClick={loadNextPage}>Показать ещё</Button>
        </div>
      </Container>
    </section>
  )
}

export default MoviesByGenre;