import authorizedRequest from './request/authorizedRequest';
import unauthorizedRequest from './request/unauthorizedRequest';

interface LoginBody {
  email: string;
  password: string;
}

interface LoginResponse {
  token: string;
}

export function loginApi(body: LoginBody) {
  return unauthorizedRequest.post<LoginResponse>(
    'admin/api/v1/admin/login',
    body
  );
}

export function logoutApi() {
  return authorizedRequest.post('admin/api/v1/admin/logout');
}
