<template>
  <header class="rust-header fixed w-full z-50">
    <div class="container mx-auto px-4 py-3 flex justify-between items-center">
      <div class="flex items-center space-x-3 select-none">
        <img
          src="@/assets/images/chiclelandia-logo.png"
          alt="Chiclelandia Logo"
          class="h-10 w-10 rounded-sm"
        >
        <span class="text-xl font-bold text-amber-400 tracking-wide"
          >CHICLELANDIA</span
        >
      </div>

      <!-- Menú desktop -->
      <nav class="hidden md:flex space-x-6 items-center">
        <a
          href="https://discord.gg/H2MfDyvukj"
          target="_blank"
          class="rust-menu-item text-amber-100 hover:text-amber-300 px-2 py-1"
          >{{ $t('header.discord') }}</a
        >
        <a
          href="#"
          class="rust-menu-item text-amber-100 hover:text-amber-300 px-2 py-1"
          >{{ $t('header.shop') }}</a
        >
        <a
          href="#"
          class="rust-menu-item text-amber-100 hover:text-amber-300 px-2 py-1"
          >{{ $t('header.rules') }}</a
        >

        <div class="flex items-center space-x-3">
          <!-- Selector de idioma -->
          <LanguageSelector />
        </div>
      </nav>

      <!-- Botón hamburguesa -->
      <button class="md:hidden focus:outline-none" @click="toggleMenu">
        <svg
          v-if="isMobileMenuOpen"
          class="w-8 h-8 text-amber-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
        <svg
          v-else
          class="w-8 h-8 text-amber-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
    </div>

    <!-- Menú móvil -->
    <div
      v-show="isMobileMenuOpen"
      class="mobile-menu md:hidden absolute top-full left-0 right-0 py-3 px-4"
    >
      <div class="flex flex-col space-y-3">
        <NuxtLink class="rust-menu-item text-amber-100 hover:text-amber-300 px-2 py-2" to="https://discord.gg/H2MfDyvukj" target="_blank"> {{ $t('header.discord') }} </NuxtLink>
        <div class="rust-divider my-1" />
        <NuxtLink class="rust-menu-item text-amber-100 hover:text-amber-300 px-2 py-2" to="/"> {{ $t('header.shop') }} </NuxtLink>
        <div class="rust-divider my-1" />
        <NuxtLink class="rust-menu-item text-amber-100 hover:text-amber-300 px-2 py-2" to="/"> {{ $t('header.rules') }} </NuxtLink>
        <div class="pt-2 flex flex-col space-y-3">
          <LanguageSelectorMobile />
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref } from "vue";

const isMobileMenuOpen = ref(false);

const toggleMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};
</script>

<style scoped>
.rust-header {
  background: rgba(20, 20, 20, 0.85);
  border-bottom: 2px solid #5c3a21;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
}

.rust-menu-item {
  position: relative;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 600;
}

.rust-menu-item::after {
  content: "";
  position: absolute;
  width: 0;
  height: 2px;
  bottom: -2px;
  left: 0;
  background-color: #d38a3a;
  transition: width 0.3s;
}

.rust-menu-item:hover::after {
  width: 100%;
}

.mobile-menu {
  background: rgba(30, 25, 20, 0.95);
  border: 1px solid #5c3a21;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
}
</style>
