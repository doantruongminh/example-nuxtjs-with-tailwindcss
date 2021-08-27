<template>
  <div class="mb-4 mx-6">
    <h3 class="font-bold text-2xl mb-3">{{ $t('guide.textarea') }}:</h3>
    <div class="flex flex-wrap -m-2">
      <div class="form-control m-2">
        <label class="label">
          <span class="label-text">{{ $t('guide.primary') }}</span>
        </label>
        <textarea
          class="textarea h-24 textarea-primary textarea-bordered"
          :placeholder="$t('guide.primary')"
        ></textarea>
      </div>
      <div class="form-control m-2">
        <label class="label">
          <span class="label-text">{{ $t('guide.secondary') }}</span>
        </label>
        <textarea
          class="textarea h-24 textarea-secondary textarea-bordered"
          :placeholder="$t('guide.secondary')"
        ></textarea>
      </div>
      <div class="form-control m-2">
        <label class="label">
          <span class="label-text">{{ $t('guide.info') }}</span>
        </label>
        <textarea
          class="textarea h-24 textarea-info textarea-bordered"
          :placeholder="$t('guide.info')"
        ></textarea>
      </div>
      <div class="form-control m-2">
        <label class="label">
          <span class="label-text">{{ $t('guide.success') }}</span>
        </label>
        <textarea
          class="textarea h-24 textarea-success textarea-bordered"
          :placeholder="$t('guide.success')"
        ></textarea>
      </div>
      <div class="form-control m-2">
        <label class="label">
          <span class="label-text">{{ $t('guide.warning') }}</span>
        </label>
        <textarea
          class="textarea h-24 textarea-warning textarea-bordered"
          :placeholder="$t('guide.warning')"
        ></textarea>
      </div>
      <div class="form-control m-2">
        <label class="label">
          <span class="label-text">{{ $t('guide.error') }}</span>
        </label>
        <textarea
          class="textarea h-24 textarea-error textarea-bordered"
          :placeholder="$t('guide.error')"
        ></textarea>
      </div>
      <div class="form-control m-2">
        <label class="label">
          <span class="label-text">{{ $t('guide.disabled') }}</span>
        </label>
        <textarea
          class="textarea h-24 textarea-primary textarea-bordered"
          :placeholder="$t('guide.disabled')"
          disabled="true"
        />
      </div>
    </div>
  </div>
</template>
