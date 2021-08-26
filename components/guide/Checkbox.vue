<template>
  <div class="mb-4 mx-6">
    <h3 class="font-bold text-2xl mb-3">{{ $t('guide.content.checkbox') }}:</h3>
    <div class="flex flex-wrap -m-2">
      <div class="form-control m-2">
        <label class="cursor-pointer label">
          <span class="label-text mr-2">{{ $t('guide.content.primary') }}</span>
          <input type="checkbox" checked="checked" class="checkbox checkbox-primary" />
        </label>
      </div>
      <div class="form-control m-2">
        <label class="cursor-pointer label">
          <span class="label-text mr-2">{{ $t('guide.content.secondary') }}</span>
          <input type="checkbox" checked="checked" class="checkbox checkbox-secondary" />
        </label>
      </div>
      <div class="form-control m-2">
        <label class="cursor-pointer label">
          <span class="label-text mr-2">{{ $t('guide.content.disabled') }}</span>
          <input type="checkbox" checked="checked" class="checkbox" disabled="true" />
        </label>
      </div>
    </div>
  </div>
</template>
