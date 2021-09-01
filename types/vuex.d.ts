import { Store } from 'vuex';
import { IStoreState } from '~/models/store.model';

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $store: Store<IStoreState>;
  }
}
