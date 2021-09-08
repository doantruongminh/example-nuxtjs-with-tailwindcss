import { validate } from 'class-validator';
import { ValidationProvider, ValidationObserver } from 'vee-validate';
import { Component, Vue } from 'vue-property-decorator';
import LoginModel from './login.model';

@Component({
  components: {
    ValidationObserver,
    ValidationProvider,
  },
})
export default class FormLogin extends Vue {
  loginForm: LoginModel = new LoginModel();
  loading: boolean = false;

  async handleLogin(): Promise<void> {
    this.loading = true;
    validate(this.loginForm).then(errors => {
      // errors is an array of validation errors
      if (errors.length > 0) {
        console.log('validation failed. errors: ', errors);
      } else {
        console.log('validation succeed');
      }
    });
    try {
      await this.$store.dispatch('auth/login', this.loginForm);
      this.$router.replace('/');
      this.$toast.success(this.$t('login.loginSuccess') as string);
    } catch (e) {
      this.$toast.error(this.$getMessageFromError(e));
    }
    this.loading = false;
  }
}
