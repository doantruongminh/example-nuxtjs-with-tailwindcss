<template>
  <div class="mb-4 mx-6">
    <h3 class="font-bold text-2xl mb-3">{{ $t('guide.range') }}:</h3>
    <div class="flex flex-wrap -m-2">
      <input
        type="range"
        max="100"
        value="50"
        class="range range-primary m-2"
      />
      <input
        type="range"
        max="100"
        value="60"
        class="range range-secondary m-2"
      />
    </div>
  </div>
</template>
