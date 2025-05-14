<template>
  <!-- Selector de idioma -->
  <div class="rust-divider" />
  <div class="text-amber-100 uppercase text-sm font-semibold px-2">
    {{ $t('header.language') }}
  </div>
  <template  v-for="locale in locales" :key="locale.name" >
    <a @click.prevent="setLocale(locale.code)" class="rust-menu-item flex items-center px-2 py-2"  href="#">
      <span class="mr-2"><img :src="getFlag(locale.language!)" width="16" height="16"></span> {{ locale.name }}
    </a>
  </template>
</template>

<script setup lang="ts">
const { locales, setLocale } = useI18n()
const flags = import.meta.glob('../assets/images/flags/*.svg', { eager: true, as: 'url' })

const getFlag = (code: string) => {
  return flags[`../assets/images/flags/${code.split('-')[1].toLowerCase()}.svg`] || ''
}
</script>

<style scoped>
.rust-divider {
  @apply h-px bg-gradient-to-r from-transparent via-[#5c3a21] to-transparent mx-2;
}
</style>
