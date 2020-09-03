<template>
  <q-card class="my-card shadow-1">
    <q-item>
      <div class="row"></div>
      <div class="row q-pl-sm">
        <q-item-section>
          <q-item-label class="text-h6 text-primary text-weight-bolder">
            <slot name="title"></slot>
          </q-item-label>
          <q-item-label caption>
            <slot name="subtitle"></slot>
          </q-item-label>
        </q-item-section>
      </div>
    </q-item>
  </q-card>
</template>