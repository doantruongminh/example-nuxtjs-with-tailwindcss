<template>
  <div class="mx-6 flex items-center justify-center">
    <ValidationObserver v-slot="{ invalid }">
      <form class="flex flex-col w-96" @submit.prevent="handleLogin">
        <ValidationProvider
          v-slot="{ errors }"
          name="Email"
          rules="required|email"
        >
          <div class="form-control m-2 mb-0">
            <label class="label">
              <span class="label-text">{{ $t('login.email') }}</span>
            </label>
            <input
              v-model="loginForm.email"
              type="text"
              class="input input-primary input-bordered"
              :placeholder="$t('login.email')"
            />
            <p class="text-error text-sm min-h-error">{{ errors[0] }}</p>
          </div>
        </ValidationProvider>
        <ValidationProvider
          v-slot="{ errors }"
          name="Password"
          rules="required|password"
        >
          <div class="form-control m-2 mt-0">
            <label class="label">
              <span class="label-text">{{ $t('login.password') }}</span>
            </label>
            <input
              v-model="loginForm.password"
              type="password"
              class="input input-primary input-bordered"
              :placeholder="$t('login.password')"
            />
            <p class="text-error text-sm min-h-error">{{ errors[0] }}</p>
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
<script lang="ts" src="./Form.component.ts">
</script>
<style scoped>
@import './Form.css';
</style>
