import axios, { AxiosResponse } from 'axios';
import { z } from 'zod';

const api = axios.create({
  baseURL: 'https://cinemaguide.skillbox.cc',
  timeout: 1000,
  withCredentials: true,
});

export const ErrorResponseSchema = z.object({
  error: z.string()
});

export const validateResponse = (response: AxiosResponse): void => {
  if (response.status === 200) {
    return;
  }

  const result = ErrorResponseSchema.safeParse(response.data);
  if (result.data) {
    throw new Error(result.data.error);
  }
};

export default api;