import { INotificationItemResponse } from '~/apis/notification.api';

export class NotificationModel {
  id: string;
  title: string;
  detail: string;
  action: string;
  isRead: boolean;
  date: string;

  constructor(notification: INotificationItemResponse) {
    this.id = notification._id;
    this.title = notification.title;
    this.detail = notification.content;
    this.action = notification.action;
    this.isRead = !!notification.isRead;
    this.date = notification.createdAt;
  }
}
