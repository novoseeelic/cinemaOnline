import './Logo.scss';
import { FC } from 'react';
import { Link } from 'react-router';
import IconLogo from '/src/assets/logo/logo.png';
import IconLogo2x from '/src/assets/logo/logo@2x.png';

const Logo: FC = () => {
  return (
    <Link className='logo' to='/'>
      <img
        src={IconLogo}
        srcSet={IconLogo2x + ' 2x'}
        alt="Логотип Маруся"
        draggable={false} />
    </Link>
  )
}

export default Logo;