import { Context } from '@nuxt/types';
import { ActionContext } from 'vuex/types';
import Cookie from 'js-cookie';

import { TOKEN_KEY } from '../constants/common.constant';

export interface IState {
  serverInitialized: boolean;
  clientInitialized: boolean;
}

export const state = (): IState => ({
  serverInitialized: false,
  clientInitialized: false,
});

export const getters = {
  serverInitialized(state: IState): boolean {
    return state.serverInitialized;
  },
  clientInitialized(state: IState): boolean {
    return state.clientInitialized;
  },
};

export const mutations = {
  setServerInitialized(state: IState): void {
    state.serverInitialized = true;
  },
  setClientInitialized(state: IState): void {
    state.clientInitialized = true;
  },
};

export const actions = {
  nuxtServerInit(
    { commit, dispatch }: ActionContext<IState, IState>,
    { req }: Context
  ): void {
    const token = req?.headers?.cookie?.split(TOKEN_KEY)[1]?.replace('=', '');
    dispatch('auth/bootstrap', token);
    commit('setServerInitialized');
  },
  nuxtClientInit({ commit, getters }: ActionContext<IState, IState>): void {
    commit('setClientInitialized');
    const token = getters['auth/getToken'];
    if (token) {
      Cookie.set(TOKEN_KEY, token, { expires: 9999999 });
    } else {
      Cookie.remove(TOKEN_KEY);
    }
  },
};
