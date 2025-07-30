import { FC } from 'react';
import GenreCard from '../GenreCard/GenreCard';
import './GenreCardList.scss';

type GenresCardListProps = {
  genres: string[] | undefined;
}

const GenreCardList: FC<GenresCardListProps> = ({ genres }) => {
  const datas = genres ?? Array<undefined>(4);

  return (
    <ul className="genres-card-list">
      {datas.map((data, index) =>
        <li key={data ?? index}>
          <GenreCard genre={data} />
        </li>
      )}
    </ul>
  )
}

export default GenreCardList;