<template>
  <div class="flex-1 max-w-full mb-4">
    <h3 class="font-bold text-2xl mb-2">
      {{ $t('guide.content.breadcrumbs') }}:
    </h3>
    <div class="w-full text-base breadcrumbs mr-2">
      <ul class="flex-wrap">
        <li>
          <a>{{ $t('guide.content.home') }}</a>
        </li>
        <li>
          <a>{{ $t('guide.content.guide') }}</a>
        </li>
        <li>
          <a>{{ $t('guide.content.components') }}</a>
        </li>
        <li>
          <a>{{ $t('guide.content.input') }}</a>
        </li>
        <li>
          <a>{{ $t('guide.content.textarea') }}</a>
        </li>
        <li>
          <a>{{ $t('guide.content.select') }}</a>
        </li>
        <li>
          <a>{{ $t('guide.content.radio') }}</a>
        </li>
        <li>
          <a>{{ $t('guide.content.checkbox') }}</a>
        </li>
        <li>
          <a>{{ $t('guide.content.switch') }}</a>
        </li>
        <li>
          <a>{{ $t('guide.content.button') }}</a>
        </li>
        <li>
          <a>{{ $t('guide.content.table') }}</a>
        </li>
      </ul>
    </div>
  </div>
</template>
