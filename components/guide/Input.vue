<template>
  <div class="mb-4 mx-6">
    <h3 class="font-bold text-2xl mb-3">{{ $t('guide.content.input') }}:</h3>
    <div class="flex flex-wrap -m-2">
      <div class="form-control m-2">
        <label class="label">
          <span class="label-text">{{ $t('guide.content.primary') }}</span>
        </label>
        <input
          type="text"
          :placeholder="$t('guide.content.primary')"
          class="input input-primary input-bordered"
        />
      </div>
      <div class="form-control m-2">
        <label class="label">
          <span class="label-text">{{ $t('guide.content.secondary') }}</span>
        </label>
        <input
          type="text"
          :placeholder="$t('guide.content.secondary')"
          class="input input-secondary input-bordered"
        />
      </div>
      <div class="form-control m-2">
        <label class="label">
          <span class="label-text">{{ $t('guide.content.info') }}</span>
        </label>
        <input
          type="text"
          :placeholder="$t('guide.content.info')"
          class="input input-info input-bordered"
        />
      </div>
      <div class="form-control m-2">
        <label class="label">
          <span class="label-text">{{ $t('guide.content.success') }}</span>
        </label>
        <input
          type="text"
          :placeholder="$t('guide.content.success')"
          class="input input-success input-bordered"
        />
      </div>
      <div class="form-control m-2">
        <label class="label">
          <span class="label-text">{{ $t('guide.content.warning') }}</span>
        </label>
        <input
          type="text"
          :placeholder="$t('guide.content.warning')"
          class="input input-warning input-bordered"
        />
      </div>
      <div class="form-control m-2">
        <label class="label">
          <span class="label-text">{{ $t('guide.content.error') }}</span>
        </label>
        <input
          type="text"
          :placeholder="$t('guide.content.error')"
          class="input input-error input-bordered"
        />
      </div>
      <div class="form-control m-2">
        <label class="label">
          <span class="label-text">{{ $t('guide.content.disabled') }}</span>
        </label>
        <input
          type="text"
          :placeholder="$t('guide.content.disabled')"
          disabled="true"
          class="input input-primary input-bordered"
        />
      </div>
    </div>
  </div>
</template>
