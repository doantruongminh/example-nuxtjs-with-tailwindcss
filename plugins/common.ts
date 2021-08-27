import { Plugin } from '@nuxt/types';
import { AxiosError } from 'axios';

const CommonPlugin: Plugin = ({ app }, inject) => {
  const getMessageFromError = (error: AxiosError | string) => {
    const commonMessage = app.i18n.t('common.unknownError') as string;

    if (typeof error === 'string') {
      return error || commonMessage;
    }

    if (error.response) {
      return (
        (Array.isArray(error.response?.data?.message)
          ? error.response?.data?.message?.[0]
          : error.response?.data?.message) || commonMessage
      );
    }

    return error.message || commonMessage;
  };
  inject('getMessageFromError', getMessageFromError);
};

export default CommonPlugin;
