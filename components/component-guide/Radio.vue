<template>
  <div class="mb-4 mx-6">
    <h3 class="font-bold text-2xl mb-3">Radio:</h3>
    <div class="flex flex-wrap -m-2">
      <div class="form-control m-2">
        <label class="cursor-pointer label">
          <span class="label-text mr-2">Primary</span>
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
          <span class="label-text mr-2">Secondary</span>
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
          <span class="label-text mr-2">Disabled</span>
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
