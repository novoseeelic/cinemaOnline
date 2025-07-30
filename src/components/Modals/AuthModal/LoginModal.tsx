import { FC } from "react";
import RootStore from "../../../store/RootStore";
import Modal from "../Modal";
import LogoDark from "../../ui/LogoDark/LogoDark";
import Input from "../../ui/Input/Input";
import IconEmail from '/src/assets/icons/email.svg?react';
import IconPassword from '/src/assets/icons/password.svg?react';
import Button from "../../ui/Button/Button";
import ButtonText from "../../ui/ButtonText/ButtonText";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { fetchLogin, LoginData, LoginDataSchema } from "../../../api/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import ModalsOverlay from "../ModalsOverlay";
import './AuthModal.scss';

type LoginModalProps = {
  onClickRegister: () => void;
}

const LoginModal: FC<LoginModalProps> = ({ onClickRegister }) => {
  const queryClient = useQueryClient();
  const loginMutation = useMutation({
    mutationKey: ['login'],
    mutationFn: fetchLogin,
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: ['user'] });
      RootStore.auth.setModalActive(false);
    },
    onError() {
      reset();
    }
  })

  const { register, handleSubmit, reset, formState: { errors } } = useForm<LoginData>({
    resolver: zodResolver(LoginDataSchema)
  });

  const iconEmail = <IconEmail aria-hidden={true} width={24} height={24} />
  const iconPassword = <IconPassword aria-hidden={true} width={24} height={24} />

  return (
    <ModalsOverlay>
      <Modal onClickClose={() => RootStore.auth.setModalActive(false)}>
        <form className="auth-modal" onSubmit={handleSubmit(({ email, password }) => {
          loginMutation.mutate({ email, password })
        })}>
          <LogoDark className="auth-modal__logo" />
          <div className="auth-modal__content">
            <div className="auth-modal__inputs">
              <Input {...register('email')} type='email' placeholder='Электронная почта' icon={iconEmail} error={errors.email?.message} />
              <Input {...register('password')} type='password' placeholder='Пароль' icon={iconPassword} error={errors.password?.message} />
            </div>
            {loginMutation.error && <span className="auth-modal__error">{loginMutation.error.message}</span>}
            <Button submit loading={loginMutation.isPending}>Войти</Button>
            <ButtonText dark onClick={onClickRegister} >Регистрация</ButtonText>
          </div>
        </form>
      </Modal>
    </ModalsOverlay>
  )
}

export default LoginModal;