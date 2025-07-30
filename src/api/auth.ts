import { z } from 'zod';
import api, { validateResponse } from './api';
import RootStore from '../store/RootStore';

export const UserSchema = z.object({
  name: z.string(),
  surname: z.string(),
  email: z.string(),
  favorites: z.array(z.string()),
});

export const RegisterDataSchema = z.object({
  email: z.string()
    .email('Некорректный email'),
  name: z.string()
    .nonempty('Необходимо указать имя'),
  surname: z.string()
    .nonempty('Необходимо указать фамилию'),
  password: z.string()
    .min(8, 'Длина пароля должна быть не менее 8 символов')
    .max(24, 'Длина пароля должна быть не более 24 символов'),
  passwordRepeat: z.string()
    .nonempty('Необходимо подтвердить пароль'),
}).refine(data => data.password === data.passwordRepeat, {
  message: 'Пароли не совпадают',
  path: ['passwordRepeat'],
});

export const LoginDataSchema = z.object({
  email: z.string().email('Некорректный email'),
  password: z.string().nonempty('Нужно ввести пароль'),
});

export type User = z.infer<typeof UserSchema>;
export type RegisterData = z.infer<typeof RegisterDataSchema>;
export type RequestRegisterData = Omit<RegisterData, 'passwordRepeat'>;
export type LoginData = z.infer<typeof LoginDataSchema>;

export const fetchUser = async (): Promise<User | null> => {
  const response = await api.get('/profile', { validateStatus: status => [200, 401].includes(status) });
  validateResponse(response);
  if (response.status === 401) {
    RootStore.auth.clear();
    return null;
  }
  const user = UserSchema.parse(response.data);
  RootStore.auth.setUser(user);
  return user;
};

export const fetchRegister = async (registerData: RequestRegisterData): Promise<void> => {
  const response = await api.post('/user', registerData, {
    validateStatus: status => status < 500
  });
  validateResponse(response);
}

export const fetchLogin = async (loginData: LoginData): Promise<void> => {
  const response = await api.post('/auth/login', loginData, {
    validateStatus: status => [200, 400].includes(status)
  });
  validateResponse(response);
  if (response.status === 400) {
    throw new Error('Email или пароль введены неверно');
  }
}

export const fetchLogout = async (): Promise<void> => {
  const response = await api.get('/auth/logout');
  validateResponse(response);
}