<template>
  <div class="relative flex flex-col w-full max-h-screen pt-20">
    <header
      class="absolute top-0 z-10 w-full h-20 flex items-center justify-between px-8"
    >
      <!-- <h1 class="">{{ $t('guide.header.title') }}</h1> -->
      <h1>Guide</h1>
      <button class="btn btn-primary">Primary</button>
      <!-- <div class="buttonGroup">
        <button
          v-for="locale in availableLocales"
          :key="locale.code"
          @click.prevent.stop="$i18n.setLocale(locale.code)"
        >
          {{ locale.name }}
        </button>
      </div> -->
    </header>
    <div class="flex flex-col h-content overflow-auto">
      <Nuxt />
    </div>
  </div>
</template>

<script lang="ts">
export default {
  layout: 'guide',
  props: {},
  //   computed: {
  //     availableLocales(): () => Array<Locale> {
  //       return this.$i18n.locales;
  //     },
  //   },
};
</script>

<style scoped>
.h-content {
  max-height: calc(100vh - 5rem);
  min-height: calc(100vh - 5rem);
}
</style>
