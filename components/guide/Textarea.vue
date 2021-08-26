<template>
  <div class="mb-4 mx-6">
    <h3 class="font-bold text-2xl mb-3">{{ $t('guide.content.textarea') }}:</h3>
    <div class="flex flex-wrap -m-2">
      <div class="form-control m-2">
        <label class="label">
          <span class="label-text">{{ $t('guide.content.primary') }}</span>
        </label>
        <textarea
          class="textarea h-24 textarea-primary textarea-bordered"
          :placeholder="$t('guide.content.primary')"
        ></textarea>
      </div>
      <div class="form-control m-2">
        <label class="label">
          <span class="label-text">{{ $t('guide.content.secondary') }}</span>
        </label>
        <textarea
          class="textarea h-24 textarea-secondary textarea-bordered"
          :placeholder="$t('guide.content.secondary')"
        ></textarea>
      </div>
      <div class="form-control m-2">
        <label class="label">
          <span class="label-text">{{ $t('guide.content.info') }}</span>
        </label>
        <textarea
          class="textarea h-24 textarea-info textarea-bordered"
          :placeholder="$t('guide.content.info')"
        ></textarea>
      </div>
      <div class="form-control m-2">
        <label class="label">
          <span class="label-text">{{ $t('guide.content.success') }}</span>
        </label>
        <textarea
          class="textarea h-24 textarea-success textarea-bordered"
          :placeholder="$t('guide.content.success')"
        ></textarea>
      </div>
      <div class="form-control m-2">
        <label class="label">
          <span class="label-text">{{ $t('guide.content.warning') }}</span>
        </label>
        <textarea
          class="textarea h-24 textarea-warning textarea-bordered"
          :placeholder="$t('guide.content.warning')"
        ></textarea>
      </div>
      <div class="form-control m-2">
        <label class="label">
          <span class="label-text">{{ $t('guide.content.error') }}</span>
        </label>
        <textarea
          class="textarea h-24 textarea-error textarea-bordered"
          :placeholder="$t('guide.content.error')"
        ></textarea>
      </div>
      <div class="form-control m-2">
        <label class="label">
          <span class="label-text">{{ $t('guide.content.disabled') }}</span>
        </label>
        <textarea
          class="textarea h-24 textarea-primary textarea-bordered"
          :placeholder="$t('guide.content.disabled')"
          disabled="true"
        />
      </div>
    </div>
  </div>
</template>
