import { INotificationState } from './state';

export default {
  getNotifications(state: INotificationState) {
    return state.notifications;
  },
};
