import { FC } from 'react';
import { Movie } from '../../../api/movie';
import Container from '../../ui/Container/Container';
import Image from '../../ui/Image/Image';
import Skeleton from '../../ui/Skeleton/Skeleton';
import Heading from '../../ui/Heading/Heading';
import Rating from '../../ui/Rating/Rating';
import ButtonLink from '../../ui/Button/ButtonLink';
import IconMovie from '/src/assets/icons/movie.svg?react';
import FavoriteButton from './Buttons/FavoriteButton';
import RefreshMovieButton from './Buttons/RefreshMovieButton';
import StringHelper from '../../../utils/StringHelper';
import MovieHelper from '../../../utils/MovieHelper';
import TrailerButton from './Buttons/TrailerButton';
import './MovieSection.scss';

type MovieSectionProps = {
  movie: Movie | undefined;
  isFetching: boolean;
  random?: boolean;
}

const MovieSection: FC<MovieSectionProps> = ({ movie, isFetching, random }) => {
  return (
    <section className={`movie-section ${random ? 'movie-section--random' : ''}`}>
      <Container>
        <div className='movie-section__wrapper'>
          <div className='movie-section__content'>
            <div className="movie-section__info">
              {movie && !isFetching
                ? (
                  <>
                    <div className="movie-section__info-top">
                      <Rating rating={movie.tmdbRating} />
                      <span>{movie.releaseYear}</span>
                      <span>{MovieHelper.getLocalizedGenres(movie.genres)}</span>
                      <span>{MovieHelper.getRuntimeString(movie.runtime)}</span>
                    </div>
                    <Heading level={random ? 2 : 1} visual={1} >{movie.title}</Heading>
                    <p className='movie-section__plot'>
                      {random ? StringHelper.truncateText(movie.plot, 400) : movie.plot}
                    </p>
                  </>
                )
                : (
                  <>
                    <Skeleton linesCount={1.3} width='50%' />
                    <Skeleton linesCount={2.5} />
                    <Skeleton linesCount={6} />
                  </>
                )
              }
            </div>
            <div className={"movie-section__buttons"}>
              {movie &&
                <>
                  <TrailerButton youtubeVideoId={movie.trailerYouTubeId} />
                  {random && <ButtonLink secondary to={`/movie/${movie.id}`}>О фильме</ButtonLink>}
                  <FavoriteButton movieId={movie.id} />
                  {random && <RefreshMovieButton />}
                </>
              }
            </div>
          </div>
          {(movie && !movie.backdropUrl && !movie.posterUrl)
            ? <div className='movie-section__img'><IconMovie width='20%' aria-hidden={true} /></div>
            : <Image
              className='movie-section__img'
              src={movie ? (movie.backdropUrl ?? movie.posterUrl!) : undefined}
              alt={movie?.title ?? 'Изображение к фильму'}
            />
          }
        </div>
      </Container>
    </section>
  )
}

export default MovieSection;