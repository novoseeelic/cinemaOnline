import { FC } from 'react';
import { Movie } from '../../../api/movie';
import './MovieAbout.scss';
import Container from '../../ui/Container/Container';
import Heading from '../../ui/Heading/Heading';
import MovieAboutInfo from './MovieAboutInfo';
import { prepareAboutData } from './MovieAboutData';

type MovieAboutProps = {
  movie: Movie | undefined;
}

const MovieAbout: FC<MovieAboutProps> = ({ movie }) => {
  const datas = prepareAboutData(movie);
  const loading = !movie;

  return (
    <section className="movie-about">
      <Container>
        <div className="movie-about__wrapper">
          <Heading level={2}>О фильме</Heading>
          <ul className="movie-about__list">
            {datas.map(data =>
              <li key={data.param}>
                <MovieAboutInfo data={data} loading={loading} />
              </li>
            )}
          </ul>
        </div>
      </Container>
    </section>
  )
}

export default MovieAbout;