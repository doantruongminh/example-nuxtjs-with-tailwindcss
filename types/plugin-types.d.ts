import { AxiosError } from 'axios';

declare module 'vue/types/vue' {
  interface Vue {
    $getMessageFromError: (error: AxiosError | string) => string;
  }
}
