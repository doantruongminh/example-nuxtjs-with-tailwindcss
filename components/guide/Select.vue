<template>
  <div class="mb-4 mx-6">
    <h3 class="font-bold text-2xl mb-3">{{ $t('guide.select') }}:</h3>
    <div class="flex flex-wrap -m-2">
      <div class="form-control m-2">
        <label class="label">
          <span class="label-text">{{ $t('guide.primary') }}</span>
        </label>
        <select class="select select-bordered select-primary w-full max-w-xs">
          <option selected="selected">{{ $t('guide.primary') }}</option>
        </select>
      </div>
      <div class="form-control m-2">
        <label class="label">
          <span class="label-text">{{ $t('guide.secondary') }}</span>
        </label>
        <select class="select select-bordered select-secondary w-full max-w-xs">
          <option selected="selected">{{ $t('guide.secondary') }}</option>
        </select>
      </div>
      <div class="form-control m-2">
        <label class="label">
          <span class="label-text">{{ $t('guide.info') }}</span>
        </label>
        <select class="select select-bordered select-info w-full max-w-xs">
          <option selected="selected">{{ $t('guide.info') }}</option>
        </select>
      </div>
      <div class="form-control m-2">
        <label class="label">
          <span class="label-text">{{ $t('guide.success') }}</span>
        </label>
        <select class="select select-bordered select-success w-full max-w-xs">
          <option selected="selected">{{ $t('guide.success') }}</option>
        </select>
      </div>
      <div class="form-control m-2">
        <label class="label">
          <span class="label-text">{{ $t('guide.warning') }}</span>
        </label>
        <select class="select select-bordered select-warning w-full max-w-xs">
          <option selected="selected">{{ $t('guide.warning') }}</option>
        </select>
      </div>
      <div class="form-control m-2">
        <label class="label">
          <span class="label-text">{{ $t('guide.error') }}</span>
        </label>
        <select class="select select-bordered select-error w-full max-w-xs">
          <option selected="selected">{{ $t('guide.error') }}</option>
        </select>
      </div>
      <div class="form-control m-2">
        <label class="label">
          <span class="label-text">{{ $t('guide.disabled') }}</span>
        </label>
        <select class="select select-bordered select-primary w-full max-w-xs" disabled="true">
          <option selected="selected">{{ $t('guide.disabled') }}</option>
        </select>
      </div>
    </div>
  </div>
</template>
