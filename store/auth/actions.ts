import { ActionContext } from 'vuex/types';
import Cookie from 'js-cookie';

import { loginApi, logoutApi } from '../../apis/auth.api';
import { TOKEN_KEY } from '../../apis/request/authorizedRequest';
import { IAuthState } from './state';

export default {
  async login(
    context: ActionContext<IAuthState, IAuthState>,
    payload: { email: string; password: string }
  ) {
    const response = await loginApi(payload);
    context.commit('setToken', response);
    Cookie.set(TOKEN_KEY, { expires: 9999999 });
  },
  async logout(context: ActionContext<IAuthState, IAuthState>) {
    if (Cookie.get(TOKEN_KEY)) {
      await logoutApi();
    }
    context.commit('setToken', '');
    Cookie.remove(TOKEN_KEY);
  },
};
