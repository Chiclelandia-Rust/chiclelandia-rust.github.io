<template>
  <!-- Selector de idioma -->
  <div
    class="relative"
    @mouseenter="isLanguageDropdownOpen = true"
    @mouseleave="isLanguageDropdownOpen = false"
  >
    <button
      class="rust-button flex items-center px-3 py-1 text-sm"
      @click="isLanguageDropdownOpen = !isLanguageDropdownOpen"
    >
      <span class="mr-1"><LanguagesIcon :size="12" /></span>
      <span>{{ localeProperties.name?.toUpperCase() }}</span>
      <svg
        class="w-4 h-4 ml-1 transition-transform duration-200"
        :class="{ 'rotate-180': isLanguageDropdownOpen }"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M19 9l-7 7-7-7"
        />
      </svg>
    </button>

    <!-- Dropdown -->
    <transition
      enter-active-class="transition duration-100 ease-out"
      enter-from-class="transform scale-95 opacity-0"
      enter-to-class="transform scale-100 opacity-100"
      leave-active-class="transition duration-75 ease-in"
      leave-from-class="transform scale-100 opacity-100"
      leave-to-class="transform scale-95 opacity-0"
    >
      <div
        v-show="isLanguageDropdownOpen"
        class="absolute right-0 mt-1 w-32 bg-[#2a1e13] border border-[#5c3a21] shadow-lg rounded-sm z-50"
        @mouseenter="isLanguageDropdownOpen = true"
        @mouseleave="isLanguageDropdownOpen = false"
      >
        <template  v-for="(locale, index) in locales" :key="locale.name" >
          <div v-if="index>0" class="rust-divider" />
          <NuxtLink @click.prevent="setLocale(locale.code)" class="block px-4 py-2 text-amber-100 hover:bg-[#3a2a18] hover:text-amber-300 transition flex items-center" to="/">
            <span class="mr-2"><img :src="getFlag(locale.language!)" width="16" height="16"></span> {{ locale.name }}
          </NuxtLink>
        </template>
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { LanguagesIcon } from 'lucide-vue-next'
const { localeProperties, locales, setLocale } = useI18n()
const flags = import.meta.glob('../assets/images/flags/*.svg', { eager: true, as: 'url' })

const isLanguageDropdownOpen = ref(false);

const getFlag = (code: string) => {
  return flags[`../assets/images/flags/${code.split('-')[1].toLowerCase()}.svg`] || ''
}
</script>

<style scoped>
.rust-divider {
  @apply h-px bg-gradient-to-r from-transparent via-[#5c3a21] to-transparent mx-2;
}
</style>
