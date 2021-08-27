import { IAuthState } from './state';

export default {
  getToken(state: IAuthState): string {
    return state.token;
  },
};
