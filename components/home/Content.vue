<template>
  <div class="mx-6 flex items-center justify-center">
    <div class="flex flex-col w-96">
      <button
        type="button"
        class="btn btn-error m-2"
        :class="{ loading: loading }"
        @click="handleLogout"
      >
        {{ $t('home.logout') }}
      </button>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  data() {
    return {
      loading: false,
    };
  },
  methods: {
    async handleLogout(): Promise<void> {
      this.loading = true;
      try {
        await this.$store.dispatch('auth/logout');
        this.$router.replace('/login');
        this.$toast.success(this.$t('home.logoutSuccess') as string);
      } catch (e) {
        this.$toast.error(this.$getMessageFromError(e));
      }
      this.loading = false;
    },
  },
});
</script>
