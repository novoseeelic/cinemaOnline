import { useMutation, useQueryClient } from '@tanstack/react-query';
import RootStore from '../../../store/RootStore';
import Button from '../../ui/Button/Button';
import { fetchLogout } from '../../../api/auth';
import { observer } from 'mobx-react-lite';
import { useNavigate } from 'react-router';
import MyAccountInfo from './AccountInfo';
import IconEmail from '/src/assets/icons/email.svg?react';
import './AccountSettings.scss';

const MyAccountSettings = observer(() => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const user = RootStore.auth.user;
  const logoutMutation = useMutation({
    mutationKey: ['logout'],
    mutationFn: fetchLogout,
    onSuccess() {
      navigate('/');
      queryClient.invalidateQueries({ queryKey: ['user'] });
    }
  });

  return !user ? null : (
    <div className='my-account-settings'>
      <div className="my-account-settings__infos">
        <MyAccountInfo
          title='Имя Фамилия'
          text={`${user.name} ${user.surname}`}
          iconContent={(user.name[0] + user.surname[0]).toUpperCase()} />
        <MyAccountInfo
          title='Электронная почта'
          text={user.email}
          iconContent={<IconEmail aria-hidden={true} width={24} height={24} />} />
      </div>
      <Button onClick={() => logoutMutation.mutate()} loading={logoutMutation.isPending}>
        Выйти из аккаунта
      </Button>
    </div>
  )
})

export default MyAccountSettings;