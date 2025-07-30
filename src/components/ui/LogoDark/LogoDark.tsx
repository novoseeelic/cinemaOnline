import './LogoDark.scss';
import IconLogo from '/src/assets/logo/logo-dark.png';
import IconLogo2x from '/src/assets/logo/logo-dark@2x.png';
import { FC } from 'react';
import { Link } from 'react-router';

type LogoDarkProps = {
  className?: string;
}

const LogoDark: FC<LogoDarkProps> = ({ className }) => {
  return (
    <Link className={`logo-dark ${className ?? ''}`} to='/'>
      <img
        src={IconLogo}
        srcSet={IconLogo2x + ' 2x'}
        alt="Логотип Маруся"
        draggable={false} />
    </Link>
  )
}

export default LogoDark;