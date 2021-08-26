<template>
  <div class="mb-4 mx-6">
    <h3 class="font-bold text-2xl mb-3">{{ $t('guide.content.radio') }}:</h3>
    <div class="flex flex-wrap -m-2">
      <div class="form-control m-2">
        <label class="cursor-pointer label">
          <span class="label-text mr-2">{{ $t('guide.content.primary') }}</span>
          <input
            type="radio"
            name="opt"
            checked="checked"
            class="radio radio-primary"
            value=""
          />
        </label>
      </div>
      <div class="form-control m-2">
        <label class="cursor-pointer label">
          <span class="label-text mr-2">{{ $t('guide.content.secondary') }}</span>
          <input
            type="radio"
            name="opt"
            checked="checked"
            class="radio radio-secondary"
            value=""
          />
        </label>
      </div>
      <div class="form-control m-2">
        <label class="cursor-pointer label">
          <span class="label-text mr-2">{{ $t('guide.content.disabled') }}</span>
          <input
            disabled="true"
            type="radio"
            name="opt"
            checked="checked"
            class="radio"
            value=""
          />
        </label>
      </div>
    </div>
  </div>
</template>
