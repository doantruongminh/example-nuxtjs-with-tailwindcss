<template>
  <div class="mb-4 mx-6 flex items-center justify-center">
    <form class="flex flex-col w-96" @submit.prevent="handleLogin">
      <div class="form-control m-2">
        <label class="label">
          <span class="label-text">{{ $t('login.content.email') }}</span>
        </label>
        <input
          type="text"
          class="input input-primary input-bordered"
          :value="email"
          :placeholder="$t('login.content.email')"
          @input="
            (e) => {
              email = e.target.value;
            }
          "
        />
      </div>
      <div class="form-control m-2">
        <label class="label">
          <span class="label-text">{{ $t('login.content.password') }}</span>
        </label>
        <input
          type="password"
          class="input input-primary input-bordered"
          :placeholder="$t('login.content.password')"
          @input="
            (e) => {
              password = e.target.value;
            }
          "
        />
      </div>
      <button
        :disabled="!email || !password"
        class="btn btn-primary m-2 mt-4"
        :class="{ loading: loading }"
      >
        {{ $t('login.content.login') }}
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
      } catch (e) {
        console.log(e);
      }
      this.loading = false;
    },
  },
});
</script>
