<template>
  <div class="mx-6 flex flex-col items-center justify-center">
    <div class="flex flex-col w-full mb-4">
      <div
        v-for="notification in getNotifications.data"
        :key="notification.id"
        class="flex px-72"
      >
        <p class="flex-1 font-bold m-2">{{ notification.title }}</p>
        <p class="flex-1 italic m-2">{{ notification.detail }}</p>
        <p class="flex-1 m-2">{{ notification.date }}</p>
      </div>
    </div>
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
  computed: {
    getNotifications() {
      return this.$store.state.notification.notifications;
    },
  },
  mounted() {
    this.$store
      .dispatch('notification/getNotifications', {
        sort: 'createAt: -1',
        page: 1,
        pageSize: 25,
      })
      .catch((e) => {
        this.$toast.error(this.$getMessageFromError(e));
      });
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
