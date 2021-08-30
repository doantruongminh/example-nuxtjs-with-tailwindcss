<template>
  <div class="mx-6 flex items-center justify-center">
    <ValidationObserver v-slot="{ invalid }">
      <form class="flex flex-col w-96" @submit.prevent="handleLogin">
        <ValidationProvider
          v-slot="{ errors }"
          name="email"
          rules="required|email"
        >
          <div class="form-control m-2">
            <label class="label">
              <span class="label-text">{{ $t('login.email') }}</span>
            </label>
            <input
              type="text"
              class="input input-primary input-bordered"
              :value="email"
              :placeholder="$t('login.email')"
              @input="
                (e) => {
                  email = e.target.value;
                }
              "
            />
            <p>{{ errors[0] }}</p>
          </div>
        </ValidationProvider>
        <ValidationProvider
          v-slot="{ errors }"
          name="password"
          rules="required"
        >
          <div class="form-control m-2">
            <label class="label">
              <span class="label-text">{{ $t('login.password') }}</span>
            </label>
            <input
              type="password"
              class="input input-primary input-bordered"
              :placeholder="$t('login.password')"
              @input="
                (e) => {
                  password = e.target.value;
                }
              "
            />
            <p>{{ errors[1] }}</p>
          </div>
        </ValidationProvider>
        <button
          type="submit"
          :disabled="invalid"
          class="btn btn-primary m-2 mt-4"
          :class="{ loading: loading }"
        >
          {{ $t('login.login') }}
        </button>
      </form>
    </ValidationObserver>
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
import { ValidationProvider, ValidationObserver } from 'vee-validate';

export default Vue.extend({
  components: { ValidationObserver, ValidationProvider },
  data() {
    return {
      email: '',
      password: '',
      loading: false,
    };
  },
  methods: {
    async handleLogin(): Promise<void> {
      this.loading = true;
      try {
        await this.$store.dispatch('auth/login', {
          email: this.email,
          password: this.password,
        });
        this.$router.replace('/');
        this.$toast.success(this.$t('login.loginSuccess') as string);
      } catch (e) {
        this.$toast.error(this.$getMessageFromError(e));
      }
      this.loading = false;
    },
  },
});
</script>
