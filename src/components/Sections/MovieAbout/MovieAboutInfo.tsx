import { FC } from 'react';
import './MovieAboutInfo.scss';
import Skeleton from '../../ui/Skeleton/Skeleton';
import { MovieAboutData } from './MovieAboutData';

type MovieAboutInfoProps = {
  data: MovieAboutData
  loading: boolean;
}

const MovieAboutInfo: FC<MovieAboutInfoProps> = ({ data, loading }) => {
  return (
    <div className="movie-about-info">
      {loading ? <Skeleton linesCount={1} />
        : (
          <>
            <div className="movie-about-info__param-wrapper">
              <span className='movie-about-info__param'>{data.param}</span>
              <div className='movie-about-info__border' />
            </div >
            <span className='movie-about-info__value'>{data.value ?? 'Неизвестно'}</span>
          </>
        )}
    </div >
  )
}

export default MovieAboutInfo;