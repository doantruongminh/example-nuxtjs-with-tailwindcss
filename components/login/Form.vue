<template>
  <div class="mb-4 mx-6 flex items-center justify-center">
    <form class="flex flex-col w-96">
      <div class="form-control m-2">
        <label class="label">
          <span class="label-text">{{ $t('login.content.username') }}</span>
        </label>
        <input
          type="text"
          :placeholder="$t('login.content.username')"
          class="input input-primary input-bordered"
        />
      </div>
      <div class="form-control m-2">
        <label class="label">
          <span class="label-text">{{ $t('login.content.password') }}</span>
        </label>
        <input
          type="password"
          :placeholder="$t('login.content.password')"
          class="input input-primary input-bordered"
        />
      </div>
      <button class="btn btn-primary m-2 mt-4">
        {{ $t('login.content.login') }}
      </button>
    </form>
  </div>
</template>
