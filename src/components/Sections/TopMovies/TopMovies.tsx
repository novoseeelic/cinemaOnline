import { useTopMovies } from '../../../hooks/useTopMovies';
import MovieCardList from '../../MovieCardList/MovieCardList';
import Container from '../../ui/Container/Container';
import Heading from '../../ui/Heading/Heading';
import './TopMovies.scss';

const TopMovies = () => {
  const movies = useTopMovies();

  return (
    <section className="top-movies">
      <Container>
        <div className="top-movies__wrapper">
          <Heading level={2}>Топ 10 фильмов</Heading>
          <MovieCardList carousel top movies={movies} />
        </div>
      </Container>
    </section>
  )
}

export default TopMovies;