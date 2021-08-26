<template>
  <div class="mb-4 mx-6">
    <h3 class="font-bold text-2xl mb-3">{{ $t('guide.content.select') }}:</h3>
    <div class="flex flex-wrap -m-2">
      <div class="form-control m-2">
        <label class="label">
          <span class="label-text">{{ $t('guide.content.primary') }}</span>
        </label>
        <select class="select select-bordered select-primary w-full max-w-xs">
          <option selected="selected">{{ $t('guide.content.primary') }}</option>
        </select>
      </div>
      <div class="form-control m-2">
        <label class="label">
          <span class="label-text">{{ $t('guide.content.secondary') }}</span>
        </label>
        <select class="select select-bordered select-secondary w-full max-w-xs">
          <option selected="selected">{{ $t('guide.content.secondary') }}</option>
        </select>
      </div>
      <div class="form-control m-2">
        <label class="label">
          <span class="label-text">{{ $t('guide.content.info') }}</span>
        </label>
        <select class="select select-bordered select-info w-full max-w-xs">
          <option selected="selected">{{ $t('guide.content.info') }}</option>
        </select>
      </div>
      <div class="form-control m-2">
        <label class="label">
          <span class="label-text">{{ $t('guide.content.success') }}</span>
        </label>
        <select class="select select-bordered select-success w-full max-w-xs">
          <option selected="selected">{{ $t('guide.content.success') }}</option>
        </select>
      </div>
      <div class="form-control m-2">
        <label class="label">
          <span class="label-text">{{ $t('guide.content.warning') }}</span>
        </label>
        <select class="select select-bordered select-warning w-full max-w-xs">
          <option selected="selected">{{ $t('guide.content.warning') }}</option>
        </select>
      </div>
      <div class="form-control m-2">
        <label class="label">
          <span class="label-text">{{ $t('guide.content.error') }}</span>
        </label>
        <select class="select select-bordered select-error w-full max-w-xs">
          <option selected="selected">{{ $t('guide.content.error') }}</option>
        </select>
      </div>
      <div class="form-control m-2">
        <label class="label">
          <span class="label-text">{{ $t('guide.content.disabled') }}</span>
        </label>
        <select class="select select-bordered select-primary w-full max-w-xs" disabled="true">
          <option selected="selected">{{ $t('guide.content.disabled') }}</option>
        </select>
      </div>
    </div>
  </div>
</template>
