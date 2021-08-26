import authorizedRequest from './request/authorizedRequest';
import unauthorizedRequest from './request/unauthorizedRequest';

interface LoginBody {
  username: string;
  password: string;
}

export function loginApi(body: LoginBody) {
  return unauthorizedRequest.post('/login', body);
}

export function logoutApi() {
  return authorizedRequest.post('/logout');
}
