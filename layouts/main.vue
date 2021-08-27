<template>
  <div class="relative flex flex-col w-full max-h-screen pt-20">
    <header
      class="
        absolute
        top-0
        z-10
        w-full
        h-20
        flex
        items-center
        justify-between
        px-8
      "
    >
      <h1 class="text-4xl font-bold">{{ $t('layout.main.title') }}</h1>
      <div class="flex items-center">
        <button
          v-for="locale in $i18n.locales"
          :key="locale.code"
          class="mx-2"
          :class="buttonLocaleClasses(locale.code)"
          @click.prevent.stop="$i18n.setLocale(locale.code)"
        >
          {{ locale.name }}
        </button>
      </div>
    </header>
    <div class="flex flex-col h-content overflow-auto">
      <Nuxt />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  layout: 'main',
  methods: {
    buttonLocaleClasses(locale: string): { [key: string]: boolean } {
      return { 'text-primary': locale === this.$i18n.locale };
    },
  },
});
</script>

<style scoped>
.h-content {
  max-height: calc(100vh - 5rem);
  min-height: calc(100vh - 5rem);
}
</style>
