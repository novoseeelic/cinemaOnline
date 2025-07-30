import { useState } from 'react';
import LoginModal from './LoginModal';
import RegisterModal from './RegisterModal';
import FinishRegisterModal from './FinishRegisterModal';

enum AuthModalType {
  login = 'login',
  register = 'register',
  finishRegister = 'finish-register',
}

const AuthModal = () => {
  const [type, setType] = useState<AuthModalType>(AuthModalType.login);

  switch (type) {
    case AuthModalType.register:
      return <RegisterModal
        onClickLogin={() => setType(AuthModalType.login)}
        onSuccess={() => setType(AuthModalType.finishRegister)} />
    case AuthModalType.finishRegister:
      return <FinishRegisterModal onClickLogin={() => setType(AuthModalType.login)} />
    default:
      return <LoginModal onClickRegister={() => setType(AuthModalType.register)} />
  }
}

export default AuthModal;