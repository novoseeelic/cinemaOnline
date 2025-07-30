import IconProfile from '/src/assets/icons/user.svg?react';
import IconProfileLogged from '/src/assets/icons/user-filled.svg?react';
import ButtonIcon from '../../ui/ButtonIcon/ButtonIcon';
import ButtonText from '../../ui/ButtonText/ButtonText';
import './ProfileButton.scss';
import { Link } from 'react-router';
import NavigationLink from '../../ui/NavigationLink/NavigationLink';
import RootStore from '../../../store/RootStore';
import { observer } from 'mobx-react-lite';
import { FC } from 'react';
import { User } from '../../../api/auth';

const ProfileButton = observer(() => {
  const user = RootStore.auth.user;

  return user
    ? <ProfileLink user={user} />
    : <ProfileSignIn />
})

type ProfileLinkProps = {
  user: User;
}

const ProfileLink: FC<ProfileLinkProps> = ({ user }) => {
  return (
    <div className='profile-button'>
      <Link to='/account' className='profile-button__icon' aria-label='Аккаунт' >
        <IconProfileLogged width={32} height={32} aria-hidden={true} />
      </Link>
      <NavigationLink to='/account' className='profile-button__nav-link' aria-label='Аккаунт'>
        {user.name}
      </NavigationLink>
    </div>
  )
}

const ProfileSignIn = () => {
  const handleClick = () => {
    RootStore.auth.setModalActive(true);
  }

  return (
    <div className='profile-button'>
      <ButtonIcon
        className='profile-button__icon'
        icon={<IconProfile width={32} height={32} aria-hidden='true' />}
        ariaLabel='Войти'
        onClick={handleClick}
      />
      <ButtonText
        className='profile-button__text'
        children='Войти'
        onClick={handleClick}
      />
    </div>
  )
}

export default ProfileButton;