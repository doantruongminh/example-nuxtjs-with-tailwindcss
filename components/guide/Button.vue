<template>
  <div class="mb-4 mx-6">
    <h3 class="font-bold text-2xl mb-3">Button:</h3>
    <div class="flex flex-wrap -m-2">
      <button
        class="btn btn-primary m-2"
        :class="{ loading: loading }"
        @click="handleClick"
      >
        {{ $t('guide.content.primary') }}
      </button>
      <button
        class="btn btn-secondary m-2"
        :class="{ loading: loading }"
        @click="handleClick"
      >
        {{ $t('guide.content.secondary') }}
      </button>
      <button
        class="btn btn-info m-2"
        :class="{ loading: loading }"
        @click="handleClick"
      >
        {{ $t('guide.content.info') }}
      </button>
      <button
        class="btn btn-success m-2"
        :class="{ loading: loading }"
        @click="handleClick"
      >
        {{ $t('guide.content.success') }}
      </button>
      <button
        class="btn btn-warning m-2"
        :class="{ loading: loading }"
        @click="handleClick"
      >
        {{ $t('guide.content.warning') }}
      </button>
      <button
        class="btn btn-error m-2"
        :class="{ loading: loading }"
        @click="handleClick"
      >
        {{ $t('guide.content.error') }}
      </button>
      <button
        class="btn btn-outline btn-primary m-2"
        :class="{ loading: loading }"
        @click="handleClick"
      >
        {{ $t('guide.content.primary') }}
      </button>
      <button
        class="btn btn-outline btn-secondary m-2"
        :class="{ loading: loading }"
        @click="handleClick"
      >
        {{ $t('guide.content.secondary') }}
      </button>
    </div>
  </div>
</template>
<script>
import Vue from 'vue';

export default Vue.extend({
  data() {
    return {
      loading: false,
    };
  },
  methods: {
    handleClick() {
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
      }, 3000);
    },
  },
});
</script>
