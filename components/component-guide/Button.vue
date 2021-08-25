<template>
  <div class="mb-4 mx-6">
    <h3 class="font-bold text-2xl mb-3">Button:</h3>
    <div class="flex flex-wrap -m-2">
      <button
        class="btn btn-primary m-2"
        :class="{ loading: loading }"
        @click="handleClick"
      >
        Primary
      </button>
      <button
        class="btn btn-secondary m-2"
        :class="{ loading: loading }"
        @click="handleClick"
      >
        Secondary
      </button>
      <button
        class="btn btn-info m-2"
        :class="{ loading: loading }"
        @click="handleClick"
      >
        Info
      </button>
      <button
        class="btn btn-success m-2"
        :class="{ loading: loading }"
        @click="handleClick"
      >
        Success
      </button>
      <button
        class="btn btn-warning m-2"
        :class="{ loading: loading }"
        @click="handleClick"
      >
        Warning
      </button>
      <button
        class="btn btn-error m-2"
        :class="{ loading: loading }"
        @click="handleClick"
      >
        Danger
      </button>
      <button
        class="btn btn-primary m-2"
        :class="{ loading: loading }"
        @click="handleClick"
      >
        Primary
      </button>
      <button
        class="btn btn-outline btn-primary m-2"
        :class="{ loading: loading }"
        @click="handleClick"
      >
        Primary
      </button>
      <button
        class="btn btn-outline btn-secondary m-2"
        :class="{ loading: loading }"
        @click="handleClick"
      >
        Secondary
      </button>
    </div>
  </div>
</template>
<script>
export default {
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
};
</script>
