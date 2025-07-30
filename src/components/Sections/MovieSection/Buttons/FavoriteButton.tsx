import IconFavorite from '/src/assets/icons/favorite.svg?react';
import IconFavoriteFilled from '/src/assets/icons/favorite-filled.svg?react';
import { FC } from "react";
import ButtonIcon from '../../../ui/ButtonIcon/ButtonIcon';
import { observer } from 'mobx-react-lite';
import useFavoriteButton from '../../../../hooks/useFavoriteButton';

type FavoriteButtonProps = {
  movieId: number;
}

const FavoriteButton: FC<FavoriteButtonProps> = observer(({ movieId }) => {
  const { isFavorite, handleClick } = useFavoriteButton(movieId);

  return isFavorite
    ?
    <ButtonIcon secondary
      icon={<IconFavoriteFilled width={24} height={24} aria-hidden={true} />}
      onClick={handleClick}
      ariaLabel='Удалить из избранного'
    />
    :
    <ButtonIcon secondary
      icon={<IconFavorite width={24} height={24} aria-hidden={true} />}
      onClick={handleClick}
      ariaLabel='Добавить в избранное'
    />
})

export default FavoriteButton;