<template>
  <div class="mb-4 mx-6">
    <h3 class="font-bold text-2xl mb-3">Checkbox:</h3>
    <div class="flex flex-wrap -m-2">
      <div class="form-control m-2">
        <label class="cursor-pointer label">
          <span class="label-text mr-2">Primary</span>
          <input type="checkbox" checked="checked" class="checkbox checkbox-primary" />
        </label>
      </div>
      <div class="form-control m-2">
        <label class="cursor-pointer label">
          <span class="label-text mr-2">Secondary</span>
          <input type="checkbox" checked="checked" class="checkbox checkbox-secondary" />
        </label>
      </div>
      <div class="form-control m-2">
        <label class="cursor-pointer label">
          <span class="label-text mr-2">Disabled</span>
          <input type="checkbox" checked="checked" class="checkbox" disabled="true" />
        </label>
      </div>
    </div>
  </div>
</template>
