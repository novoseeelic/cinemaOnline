import './SearchButton.scss';
import ButtonIcon from '../../ui/ButtonIcon/ButtonIcon';
import IconSearch from '/src/assets/icons/search.svg?react';
import RootStore from '../../../store/RootStore';

const SearchButton = () => {
  const handleClick = () => {
    RootStore.search.setActive(true);
  }
  
  return (
    <ButtonIcon className='search-button'
      icon={<IconSearch width={28} height={28} />}
      ariaLabel='Поиск'
      onClick={handleClick}
    />
  )
}

export default SearchButton;