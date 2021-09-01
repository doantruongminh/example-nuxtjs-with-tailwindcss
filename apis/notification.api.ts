import authorizedRequest from './request/authorizedRequest';
import { DataList } from '~/models/common.model';

export interface IGetNotificationsParams {
  content?: string;
  category?: string;
  where?: string;
  sort?: string;
  startDate?: string;
  endDate?: string;
  page: number;
  pageSize: number;
}

export interface INotificationItemResponse {
  _id: string;
  title: string;
  content: string;
  category: string;
  isRead: boolean;
  action: string;
  sender: string;
  receiver: string;
  status: string;
  createdAt: string;
  updatedAt: string;
}

export interface IGetNotificationResponse
  extends DataList<INotificationItemResponse> {
  totalUnread: number;
}

export function getNotificationsApi(params: IGetNotificationsParams) {
  return authorizedRequest.get<
    IGetNotificationResponse,
    IGetNotificationResponse
  >('notification/api/v1/admin/notification', { params });
}
