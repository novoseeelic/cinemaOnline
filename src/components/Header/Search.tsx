import IconSearch from '/src/assets/icons/search.svg?react';
import IconCancel from '/src/assets/icons/cancel.svg?react';
import SearchResults from './SearchResults';
import ButtonIcon from '../ui/ButtonIcon/ButtonIcon';
import './Search.scss';
import { observer } from 'mobx-react-lite';
import { useSearch } from '../../hooks/useSearch';

const Search = observer(() => {
  const {
    movies, isFetching, showResults, inputValue, inputRef, activeAsModal,
    handleInput, handleReset, handleClickMovie
  } = useSearch();

  return (
    <div className={`search ${activeAsModal ? 'search--modal' : ''}`}>
      <input
        className='search__field'
        type='search'
        placeholder='Поиск'
        value={inputValue}
        onInput={(e) => handleInput(e.currentTarget.value)}
        ref={inputRef}
      />
      <span className='search__icon'>{<IconSearch aria-hidden={true} />}</span>
      {(inputValue || activeAsModal) &&
        <ButtonIcon
          className='search__reset-btn'
          icon={<IconCancel aria-hidden={true} />}
          onClick={handleReset}
          ariaLabel='Сбросить поиск' />
      }
      {showResults && <SearchResults movies={movies} isFetching={isFetching} onClickMovie={handleClickMovie} activeAsModal={activeAsModal} />}
    </div>
  )
})

export default Search;