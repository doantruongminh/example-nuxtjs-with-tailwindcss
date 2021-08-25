import { AxiosRequestConfig } from 'axios';
import Cookie from 'js-cookie';

import Request from './request';

export const TOKEN_KEY = '__token';

const authorizedRequest = new Request();

authorizedRequest.api.interceptors.request.use((config: AxiosRequestConfig) => {
  const newConfig: AxiosRequestConfig = { ...config };
  const token = Cookie.get(TOKEN_KEY);
  newConfig.headers.common.Authorization = token
    ? undefined
    : `Bearer ${token}`;
  return newConfig;
});

authorizedRequest.api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // Handle token in here
    throw error;
  }
);

export default authorizedRequest;
