<template>
  <div class="flex flex-col flex-1 bg-secondary">
    <h1 class="text-center text-white font-bold text-3xl mt-6 uppercase">
      {{ $t('login.content.login') }}
    </h1>
    <div class="card shadow m-6 bg-white">
      <div class="card-body">
        <LoginForm />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  layout: 'main',
});
</script>
