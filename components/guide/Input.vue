<template>
  <div class="mb-4 mx-6">
    <h3 class="font-bold text-2xl mb-3">{{ $t('guide.input') }}:</h3>
    <div class="flex flex-wrap -m-2">
      <div class="form-control m-2">
        <label class="label">
          <span class="label-text">{{ $t('guide.primary') }}</span>
        </label>
        <input
          type="text"
          :placeholder="$t('guide.primary')"
          class="input input-primary input-bordered"
        />
      </div>
      <div class="form-control m-2">
        <label class="label">
          <span class="label-text">{{ $t('guide.secondary') }}</span>
        </label>
        <input
          type="text"
          :placeholder="$t('guide.secondary')"
          class="input input-secondary input-bordered"
        />
      </div>
      <div class="form-control m-2">
        <label class="label">
          <span class="label-text">{{ $t('guide.info') }}</span>
        </label>
        <input
          type="text"
          :placeholder="$t('guide.info')"
          class="input input-info input-bordered"
        />
      </div>
      <div class="form-control m-2">
        <label class="label">
          <span class="label-text">{{ $t('guide.success') }}</span>
        </label>
        <input
          type="text"
          :placeholder="$t('guide.success')"
          class="input input-success input-bordered"
        />
      </div>
      <div class="form-control m-2">
        <label class="label">
          <span class="label-text">{{ $t('guide.warning') }}</span>
        </label>
        <input
          type="text"
          :placeholder="$t('guide.warning')"
          class="input input-warning input-bordered"
        />
      </div>
      <div class="form-control m-2">
        <label class="label">
          <span class="label-text">{{ $t('guide.error') }}</span>
        </label>
        <input
          type="text"
          :placeholder="$t('guide.error')"
          class="input input-error input-bordered"
        />
      </div>
      <div class="form-control m-2">
        <label class="label">
          <span class="label-text">{{ $t('guide.disabled') }}</span>
        </label>
        <input
          type="text"
          :placeholder="$t('guide.disabled')"
          disabled="true"
          class="input input-primary input-bordered"
        />
      </div>
    </div>
  </div>
</template>
