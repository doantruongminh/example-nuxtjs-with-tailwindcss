import { IAuthState } from './state';

export default {
  setToken(state: IAuthState, token: string) {
    state.token = token || '';
  },
};
