import NavigationLink from '../ui/NavigationLink/NavigationLink';
import './MainNav.scss';

interface NavLinkData {
  text: string;
  path: string;
}

const datas: NavLinkData[] = [
  {
    text: 'Главная',
    path: '/'
  },
  {
    text: 'Жанры',
    path: '/genres'
  },
];

const MainNav = () => {
  return (
    <nav className='main-nav' aria-label='Основная навигация'>
      <ul className="main-nav__list">
        {datas.map(data =>
          <li key={data.path}>
            <NavigationLink to={data.path} >
              {data.text}
            </NavigationLink>
          </li>
        )}
      </ul>
    </nav>
  )
}

export default MainNav;