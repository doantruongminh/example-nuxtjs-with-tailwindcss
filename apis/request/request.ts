import axios, {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  Canceler,
} from 'axios';
import { stringify } from 'query-string';

export const CANCEL_KEY = 'CANCEL_PROMISE';

const { CancelToken } = axios;

export interface PromiseWithCancel<R> extends Promise<R> {
  [CANCEL_KEY]?: () => void;
}

interface Options {
  rawResponse?: boolean;
}

export default class Request {
  api: AxiosInstance;

  constructor() {
    this.api = axios.create({
      withCredentials: false,
      baseURL: process.env.baseUrl,
      headers: {
        'Content-Type': 'application/json',
      },
      paramsSerializer: (params) => {
        return stringify(params, { arrayFormat: 'comma' });
      },
    });
  }

  get = <T = any, R = AxiosResponse<T>>(
    url: string,
    config: AxiosRequestConfig = {},
    options?: Options
  ) => {
    let cancel: Canceler;

    const newConfig: AxiosRequestConfig = {
      ...config,
      params: {
        ...config.params,
      },
      cancelToken: new CancelToken((c) => {
        cancel = c;
      }),
    };

    const request: PromiseWithCancel<R> = this.api
      .get(url, newConfig)
      .then((response) => {
        return options?.rawResponse ? response : response.data;
      })
      .catch((error) => {
        throw error;
      });

    request[CANCEL_KEY] = () => cancel();

    return request;
  };

  post = <T = any, R = AxiosResponse<T>>(
    url: string,
    body?: any,
    config: AxiosRequestConfig = {},
    options?: Options
  ) => {
    let cancel: Canceler;

    const newConfig: AxiosRequestConfig = {
      ...config,
      params: {
        ...config.params,
      },
      cancelToken: new CancelToken((c) => {
        cancel = c;
      }),
    };

    const request: PromiseWithCancel<R> = this.api
      .post(url, body, newConfig)
      .then((response) => {
        return options?.rawResponse ? response : response.data;
      })
      .catch((error) => {
        throw error;
      });

    request[CANCEL_KEY] = () => cancel();

    return request;
  };

  put = <T = any, R = AxiosResponse<T>>(
    url: string,
    body?: any,
    config: AxiosRequestConfig = {},
    options?: Options
  ) => {
    let cancel: Canceler;

    const newConfig: AxiosRequestConfig = {
      ...config,
      params: {
        ...config.params,
      },
      cancelToken: new CancelToken((c) => {
        cancel = c;
      }),
    };

    const request: PromiseWithCancel<R> = this.api
      .put(url, body, newConfig)
      .then((response) => {
        return options?.rawResponse ? response : response.data;
      })
      .catch((error) => {
        throw error;
      });

    request[CANCEL_KEY] = () => cancel();

    return request;
  };

  patch = <T = any, R = AxiosResponse<T>>(
    url: string,
    body?: any,
    config: AxiosRequestConfig = {},
    options?: Options
  ) => {
    let cancel: Canceler;

    const newConfig: AxiosRequestConfig = {
      ...config,
      params: {
        ...config.params,
      },
      cancelToken: new CancelToken((c) => {
        cancel = c;
      }),
    };

    const request: PromiseWithCancel<R> = this.api
      .patch(url, body, newConfig)
      .then((response) => {
        return options?.rawResponse ? response : response.data;
      })
      .catch((error) => {
        throw error;
      });

    request[CANCEL_KEY] = () => cancel();

    return request;
  };

  delete = <T = any, R = AxiosResponse<T>>(
    url: string,
    config: AxiosRequestConfig = {},
    options?: Options
  ) => {
    let cancel: Canceler;

    const newConfig: AxiosRequestConfig = {
      ...config,
      params: {
        ...config.params,
      },
      cancelToken: new CancelToken((c) => {
        cancel = c;
      }),
    };

    const request: PromiseWithCancel<R> = this.api
      .delete(url, newConfig)
      .then((response) => {
        return options?.rawResponse ? response : response.data;
      })
      .catch((error) => {
        throw error;
      });

    request[CANCEL_KEY] = () => cancel();

    return request;
  };
}
