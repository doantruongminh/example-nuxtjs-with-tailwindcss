import { IState } from '~/store';
import { IAuthState } from '~/store/auth/state';
import { INotificationState } from '~/store/notification/state';

export interface IStoreState extends IState {
  auth: IAuthState;
  notification: INotificationState;
}
