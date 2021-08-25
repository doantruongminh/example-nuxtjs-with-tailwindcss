<template>
  <div class="mb-4 mx-6">
    <h3 class="font-bold text-2xl mb-3">Select:</h3>
    <div class="flex flex-wrap -m-2">
      <div class="form-control m-2">
        <label class="label">
          <span class="label-text">Primary</span>
        </label>
        <select class="select select-bordered select-primary w-full max-w-xs">
          <option selected="selected">Primary</option>
        </select>
      </div>
      <div class="form-control m-2">
        <label class="label">
          <span class="label-text">Secondary</span>
        </label>
        <select class="select select-bordered select-secondary w-full max-w-xs">
          <option selected="selected">Secondary</option>
        </select>
      </div>
      <div class="form-control m-2">
        <label class="label">
          <span class="label-text">Info</span>
        </label>
        <select class="select select-bordered select-info w-full max-w-xs">
          <option selected="selected">Info</option>
        </select>
      </div>
      <div class="form-control m-2">
        <label class="label">
          <span class="label-text">Success</span>
        </label>
        <select class="select select-bordered select-success w-full max-w-xs">
          <option selected="selected">Success</option>
        </select>
      </div>
      <div class="form-control m-2">
        <label class="label">
          <span class="label-text">Warning</span>
        </label>
        <select class="select select-bordered select-warning w-full max-w-xs">
          <option selected="selected">Warning</option>
        </select>
      </div>
      <div class="form-control m-2">
        <label class="label">
          <span class="label-text">Error</span>
        </label>
        <select class="select select-bordered select-error w-full max-w-xs">
          <option selected="selected">Error</option>
        </select>
      </div>
      <div class="form-control m-2">
        <label class="label">
          <span class="label-text">Disabled</span>
        </label>
        <select class="select select-bordered select-primary w-full max-w-xs" disabled="true">
          <option selected="selected">Disabled</option>
        </select>
      </div>
    </div>
  </div>
</template>
