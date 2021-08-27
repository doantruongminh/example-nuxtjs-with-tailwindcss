<template>
  <div class="flex flex-col flex-1 bg-secondary">
    <h1 class="text-center text-white font-bold text-3xl mt-6 uppercase">
      {{ $t('guide.guide') }}
    </h1>
    <div class="card shadow m-6 bg-white">
      <div class="card-body">
        <div class="flex flex-wrap min-w-263px">
          <GuideBreadcrumbs />
        </div>
        <div class="flex flex-wrap -mx-6">
          <div class="flex-1 min-w-263px">
            <GuideInput />
            <GuideSelect />
          </div>
          <div class="flex-1 min-w-263px">
            <GuideTextarea />
            <GuideSwitch />
          </div>
        </div>
        <div class="flex flex-wrap -mx-6">
          <div class="flex-1 min-w-263px">
            <GuideRadio />
          </div>
          <div class="flex-1 min-w-263px">
            <GuideCheckbox />
          </div>
        </div>
        <div class="flex flex-wrap -mx-6">
          <div class="flex-1 min-w-263px">
            <GuideRange />
          </div>
          <div class="flex-1 min-w-263px">
            <GuideButton />
          </div>
        </div>
        <div class="flex flex-wrap min-w-263px">
          <GuideTable />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  layout: 'main',
});
</script>
<style scoped>
.min-w-263px {
  max-width: 100%;
  min-width: 263px;
}
</style>
