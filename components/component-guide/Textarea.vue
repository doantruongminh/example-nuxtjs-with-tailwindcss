<template>
  <div class="mb-4 mx-6">
    <h3 class="font-bold text-2xl mb-3">Textarea:</h3>
    <div class="flex flex-wrap -m-2">
      <div class="form-control m-2">
        <label class="label">
          <span class="label-text">Primary</span>
        </label>
        <textarea
          class="textarea h-24 textarea-primary textarea-bordered"
          placeholder="Primary"
        ></textarea>
      </div>
      <div class="form-control m-2">
        <label class="label">
          <span class="label-text">Secondary</span>
        </label>
        <textarea
          class="textarea h-24 textarea-secondary textarea-bordered"
          placeholder="Secondary"
        ></textarea>
      </div>
      <div class="form-control m-2">
        <label class="label">
          <span class="label-text">Info</span>
        </label>
        <textarea
          class="textarea h-24 textarea-info textarea-bordered"
          placeholder="Info"
        ></textarea>
      </div>
      <div class="form-control m-2">
        <label class="label">
          <span class="label-text">Success</span>
        </label>
        <textarea
          class="textarea h-24 textarea-success textarea-bordered"
          placeholder="Success"
        ></textarea>
      </div>
      <div class="form-control m-2">
        <label class="label">
          <span class="label-text">Warning</span>
        </label>
        <textarea
          class="textarea h-24 textarea-warning textarea-bordered"
          placeholder="Warning"
        ></textarea>
      </div>
      <div class="form-control m-2">
        <label class="label">
          <span class="label-text">Error</span>
        </label>
        <textarea
          class="textarea h-24 textarea-error textarea-bordered"
          placeholder="Error"
        ></textarea>
      </div>
      <div class="form-control m-2">
        <label class="label">
          <span class="label-text">Disabled</span>
        </label>
        <textarea
          class="textarea h-24 textarea-primary textarea-bordered"
          placeholder="Disabled"
          disabled="true"
        />
      </div>
    </div>
  </div>
</template>
