<template>
  <div class="mb-4 mx-6">
    <h3 class="font-bold text-2xl mb-3">{{ $t('guide.multiSelect') }}:</h3>
    <div class="flex flex-wrap -m-2">
      <div class="form-control m-2">
        <label class="label">
          <span class="label-text">{{ $t('guide.primary') }}</span>
        </label>
        <MultiSelect
          class="multi-select-primary"
          :v-model="value"
          :options="options"
          :searchable="false"
          :close-on-select="false"
          :show-labels="false"
          placeholder="Primary"
          :loading="true"
        ></MultiSelect>
      </div>
      <div class="form-control m-2">
        <label class="label">
          <span class="label-text">{{ $t('guide.secondary') }}</span>
        </label>
        <MultiSelect
          class="multi-select-secondary"
          :v-model="value"
          :options="options"
          :searchable="false"
          :close-on-select="false"
          :show-labels="false"
          placeholder="Secondary"
          :loading="true"
        ></MultiSelect>
      </div>
      <div class="form-control m-2">
        <label class="label">
          <span class="label-text">{{ $t('guide.info') }}</span>
        </label>
        <MultiSelect
          class="multi-select-info"
          :v-model="value"
          :options="options"
          :searchable="false"
          :close-on-select="false"
          :show-labels="false"
          placeholder="Secondary"
          :loading="true"
        ></MultiSelect>
      </div>
      <div class="form-control m-2">
        <label class="label">
          <span class="label-text">{{ $t('guide.success') }}</span>
        </label>
        <MultiSelect
          class="multi-select-success"
          :v-model="value"
          :options="options"
          :searchable="false"
          :close-on-select="false"
          :show-labels="false"
          placeholder="Secondary"
          :loading="true"
        ></MultiSelect>
      </div>
      <div class="form-control m-2">
        <label class="label">
          <span class="label-text">{{ $t('guide.warning') }}</span>
        </label>
        <MultiSelect
          class="multi-select-warning"
          :v-model="value"
          :options="options"
          :searchable="false"
          :close-on-select="false"
          :show-labels="false"
          placeholder="Secondary"
          :loading="true"
        ></MultiSelect>
      </div>
      <div class="form-control m-2">
        <label class="label">
          <span class="label-text">{{ $t('guide.error') }}</span>
        </label>
        <MultiSelect
          class="multi-select-error"
          :v-model="value"
          :options="options"
          :searchable="false"
          :close-on-select="false"
          :show-labels="false"
          placeholder="Secondary"
          :loading="true"
        ></MultiSelect>
      </div>
      <div class="form-control m-2">
        <label class="label">
          <span class="label-text">{{ $t('guide.disabled') }}</span>
        </label>
        <MultiSelect
          :disabled="true"
          :v-model="value"
          :options="options"
          :searchable="false"
          :close-on-select="false"
          :show-labels="false"
          placeholder="Disabled"
          :loading="true"
        ></MultiSelect>
      </div>
    </div>
  </div>
</template>
<script>
import Vue from 'vue';

export default Vue.extend({
  data() {
    return {
      value: '',
      options: [
        'Primary',
        'Secondary',
        'Info',
        'Success',
        'Warning',
        'Error',
        'Disabled',
      ],
    };
  },
  methods: {
    asyncFind() {
      setTimeout(() => {
        this.options = [];
      }, 5000);
    },
  },
});
</script>
