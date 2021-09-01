import authorizedRequest from './request/authorizedRequest';
import unauthorizedRequest from './request/unauthorizedRequest';

interface ILoginBody {
  email: string;
  password: string;
}

interface ILoginResponse {
  token: string;
}

export function loginApi(body: ILoginBody) {
  return unauthorizedRequest.post<ILoginResponse, ILoginResponse>(
    'admin/api/v1/admin/login',
    body
  );
}

export function logoutApi() {
  return authorizedRequest.post('admin/api/v1/admin/logout');
}
