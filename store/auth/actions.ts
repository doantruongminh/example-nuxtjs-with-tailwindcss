import { ActionContext } from 'vuex/types';
import Cookie from 'js-cookie';

import { IAuthState } from './state';
import { loginApi, logoutApi } from '~/apis/auth.api';
import { TOKEN_KEY } from '~/constants/common.constant';

export default {
  bootstrap(context: ActionContext<IAuthState, IAuthState>, token?: string) {
    if (token) {
      context.commit('setToken', token);
    }
  },
  async login(
    context: ActionContext<IAuthState, IAuthState>,
    payload: { email: string; password: string }
  ) {
    const response = await loginApi(payload);
    context.commit('setToken', response.token);
    Cookie.set(TOKEN_KEY, response.token, { expires: 9999999 });
  },
  async logout(context: ActionContext<IAuthState, IAuthState>) {
    if (Cookie.get(TOKEN_KEY)) {
      await logoutApi();
    }
    context.commit('setToken', '');
    Cookie.remove(TOKEN_KEY);
  },
};
