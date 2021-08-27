<template>
  <div class="mx-6 flex items-center justify-center">
    <form class="flex flex-col w-96" @submit.prevent="handleLogin">
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
      </div>
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
      </div>
      <button
        type="submit"
        :disabled="!email || !password"
        class="btn btn-primary m-2 mt-4"
        :class="{ loading: loading }"
      >
        {{ $t('login.login') }}
      </button>
    </form>
  </div>
</template>
<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
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
