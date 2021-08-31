import { extend } from 'vee-validate';
import { required, email } from 'vee-validate/dist/rules';

extend('required', {
  ...required,
  message(field: string) {
    return window.$nuxt.$t('validate.required', {
      field,
    }) as string;
  },
});

extend('email', {
  ...email,
  message() {
    return window.$nuxt.$t('validate.email') as string;
  },
});

extend('password', {
  validate(value: string) {
    const regex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[`~!@#$%^&*()\\\-_=+|[\\{\]};:'\\",<\\.>\\/\\?\s])[A-Za-z\d`~!@#$%^&*()\\\-_=+|[\\{\]};:'\\",<\\.>\\/\\?\s]{8,20}$/;
    return regex.test(value);
  },
  message() {
    return window.$nuxt.$t('validate.password') as string;
  },
});
