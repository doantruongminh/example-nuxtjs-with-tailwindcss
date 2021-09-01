import { ActionContext } from 'vuex/types';

import { INotificationState } from './state';
import {
  getNotificationsApi,
  IGetNotificationsParams,
} from '~/apis/notification.api';

export default {
  async getNotifications(
    context: ActionContext<INotificationState, INotificationState>,
    payload: IGetNotificationsParams
  ) {
    const response = await getNotificationsApi(payload);
    context.commit('setNotifications', response);
  },
};
