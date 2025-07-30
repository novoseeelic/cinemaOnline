import { useQueryClient } from "@tanstack/react-query";
import IconRefresh from '/src/assets/icons/refresh.svg?react';
import ButtonIcon from "../../../ui/ButtonIcon/ButtonIcon";

const RefreshMovieButton = () => {
  const queryClient = useQueryClient();

  const hadleClick = () => {
    queryClient.invalidateQueries({ queryKey: ['movie', 'random'] });
  }

  return (
    <ButtonIcon
      secondary
      icon={<IconRefresh width={24} height={24} aria-hidden={true} />}
      onClick={hadleClick}
      ariaLabel="Обновить фильм" />
  )
}

export default RefreshMovieButton;