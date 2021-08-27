<template>
  <div class="flex-1 max-w-full mb-4">
    <h3 class="font-bold text-2xl mb-2">
      {{ $t('guide.breadcrumbs') }}:
    </h3>
    <div class="w-full text-base breadcrumbs mr-2">
      <ul class="flex-wrap">
        <li>
          <a>{{ $t('guide.home') }}</a>
        </li>
        <li>
          <a>{{ $t('guide.guide') }}</a>
        </li>
        <li>
          <a>{{ $t('guide.components') }}</a>
        </li>
        <li>
          <a>{{ $t('guide.input') }}</a>
        </li>
        <li>
          <a>{{ $t('guide.textarea') }}</a>
        </li>
        <li>
          <a>{{ $t('guide.select') }}</a>
        </li>
        <li>
          <a>{{ $t('guide.radio') }}</a>
        </li>
        <li>
          <a>{{ $t('guide.checkbox') }}</a>
        </li>
        <li>
          <a>{{ $t('guide.switch') }}</a>
        </li>
        <li>
          <a>{{ $t('guide.button') }}</a>
        </li>
        <li>
          <a>{{ $t('guide.table') }}</a>
        </li>
      </ul>
    </div>
  </div>
</template>
