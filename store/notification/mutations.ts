import { INotificationState } from './state';
import { IGetNotificationResponse } from '~/apis/notification.api';
import { NotificationModel } from '~/models/notification.model';

export default {
  setNotifications(
    state: INotificationState,
    notifications: IGetNotificationResponse
  ) {
    state.notifications = {
      data:
        notifications?.data?.map((item) => new NotificationModel(item)) || [],
      page: notifications?.page || 0,
      pageSize: notifications?.pageSize || 25,
      totalPage: notifications?.totalPage || 0,
      totalItem: notifications?.totalItem || 0,
      totalUnread: notifications?.totalUnread || 0,
    };
  },
};
