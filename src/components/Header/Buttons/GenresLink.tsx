import './GenresLink.scss';
import { Link } from 'react-router';
import IconGenres from '/src/assets/icons/genres.svg?react';

const GenresLink = () => {
  return (
    <Link className='genres-link' to='/genres' aria-label='Жанры' >
      <IconGenres width={32} height={32} aria-hidden={true} />
    </Link>
  )
}

export default GenresLink;