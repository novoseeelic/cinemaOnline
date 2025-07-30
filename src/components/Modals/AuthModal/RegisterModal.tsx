import { FC } from "react";
import RootStore from "../../../store/RootStore";
import Modal from "../Modal";
import IconEmail from '/src/assets/icons/email.svg?react';
import IconPassword from '/src/assets/icons/password.svg?react';
import IconUser from '/src/assets/icons/user.svg?react';
import Button from "../../ui/Button/Button";
import ButtonText from "../../ui/ButtonText/ButtonText";
import Input from "../../ui/Input/Input";
import LogoDark from "../../ui/LogoDark/LogoDark";
import Heading from "../../ui/Heading/Heading";
import { fetchRegister, RegisterData, RegisterDataSchema } from "../../../api/auth";
import { useMutation } from "@tanstack/react-query";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import ModalsOverlay from "../ModalsOverlay";
import './AuthModal.scss';

type RegisterModalProps = {
  onClickLogin: () => void;
  onSuccess: () => void;
}

const RegisterModal: FC<RegisterModalProps> = ({ onClickLogin, onSuccess }) => {
  const registerMutation = useMutation({
    mutationFn: fetchRegister,
    mutationKey: ['register'],
    onSuccess() {
      onSuccess();
    },
    onError() {
      reset();
    }
  });

  const { register, handleSubmit, reset, formState: { errors } } = useForm<RegisterData>({
    resolver: zodResolver(RegisterDataSchema)
  });

  const iconEmail = <IconEmail aria-hidden={true} width={24} height={24} />
  const iconPassword = <IconPassword aria-hidden={true} width={24} height={24} />
  const iconUser = <IconUser aria-hidden={true} width={24} height={24} />

  return (
    <ModalsOverlay>
      <Modal onClickClose={() => RootStore.auth.setModalActive(false)}>
        <form className="auth-modal" onSubmit={handleSubmit(({ email, password, name, surname }) => {
          registerMutation.mutate({ email, password, name, surname });
        })}>
          <LogoDark className="auth-modal__logo" />
          <div className="auth-modal__content">
            <Heading dark level={4} className="auth-modal__heading">Регистрация</Heading>
            <div className="auth-modal__inputs">
              <Input {...register('email')} type='email' placeholder='Электронная почта' icon={iconEmail} error={errors.email?.message} />
              <Input {...register('name')} type='text' placeholder='Имя' icon={iconUser} error={errors.name?.message} />
              <Input {...register('surname')} type='text' placeholder='Фамилия' icon={iconUser} error={errors.surname?.message} />
              <Input {...register('password')} type='password' placeholder='Пароль' icon={iconPassword} error={errors.password?.message} />
              <Input {...register('passwordRepeat')} type='password' placeholder='Подтвердите пароль' icon={iconPassword} error={errors.passwordRepeat?.message} />
            </div>
            {registerMutation.error && <span className="auth-modal__error">{registerMutation.error.message}</span>}
            <Button submit loading={registerMutation.isPending}>Создать аккаунт</Button>
            <ButtonText dark onClick={onClickLogin} >У меня есть пароль</ButtonText>
          </div>
        </form>
      </Modal>
    </ModalsOverlay>
  )
}

export default RegisterModal;