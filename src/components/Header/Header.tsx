import './Header.scss';
import MainNav from './MainNav';
import Search from './Search';
import Container from '../ui/Container/Container';
import Logo from '../ui/Logo/Logo';
import GenresLink from './Buttons/GenresLink';
import SearchButton from './Buttons/SearchButton';
import ProfileButton from './Buttons/ProfileButton';

const Header = () => {
  return (
    <header className='header'>
      <Container>
        <div className='header__wrapper'>
          <Logo />
          <div className='header__content'>
            <MainNav />
            <Search />
          </div>
          <div className='header__buttons'>
            <GenresLink />
            <SearchButton />
            <ProfileButton />
          </div>
        </div>
      </Container>
    </header>
  )
}

export default Header;