import { DataList } from '~/models/common.model';
import { NotificationModel } from '~/models/notification.model';

export interface INotificationState {
  notifications: DataList<NotificationModel> & {
    totalUnread: number;
  };
}

export default (): INotificationState => ({
  notifications: {
    data: [],
    page: 1,
    pageSize: 25,
    totalPage: 0,
    totalItem: 0,
    totalUnread: 0,
  },
});
