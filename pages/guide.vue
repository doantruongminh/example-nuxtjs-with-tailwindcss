<template>
  <div class="flex flex-col flex-1 bg-secondary">
    <h1 class="text-center text-white font-bold text-3xl mt-6 uppercase">
      Component Guide
    </h1>
    <div class="card shadow m-6 bg-white">
      <div class="card-body">
        <div class="flex">
          <ComponentGuideBreadcrumbs />
        </div>
        <div class="flex -mx-6">
          <div class="flex-1">
            <ComponentGuideInput />
            <ComponentGuideSelect />
          </div>
          <div class="flex-1">
            <ComponentGuideTextarea />
            <ComponentGuideSwitch />
          </div>
        </div>
        <div class="flex -mx-6">
          <div class="flex-1">
            <ComponentGuideRadio />
          </div>
          <div class="flex-1">
            <ComponentGuideCheckbox />
          </div>
        </div>
        <div class="flex -mx-6">
          <div class="flex-1">
            <ComponentGuideRange />
          </div>
          <div class="flex-1">
            <ComponentGuideButton />
          </div>
        </div>
        <div class="flex">
          <ComponentGuideTable />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  layout: 'guide',
});
</script>
