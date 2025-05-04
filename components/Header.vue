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
          >DISCORD</a
        >
        <a
          href="#"
          class="rust-menu-item text-amber-100 hover:text-amber-300 px-2 py-1"
          >TIENDA</a
        >
        <a
          href="#"
          class="rust-menu-item text-amber-100 hover:text-amber-300 px-2 py-1"
          >REGLAS</a
        >

        <div class="flex items-center space-x-3">
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
              <span>{{ currentLanguage.toUpperCase() }}</span>
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
                <a
                  href="#"
                  class="block px-4 py-2 text-amber-100 hover:bg-[#3a2a18] hover:text-amber-300 transition flex items-center"
                  @click.prevent="changeLanguage('es')"
                >
                  <span class="mr-2"
                    ><img
                      src="../assets/images/flags/es.svg"
                      width="16"
                      height="16"
                  ></span>
                  Español
                </a>
                <div class="rust-divider" />
                <a
                  href="#"
                  class="block px-4 py-2 text-amber-100 hover:bg-[#3a2a18] hover:text-amber-300 transition flex items-center"
                  @click.prevent="changeLanguage('en')"
                >
                  <span class="mr-2"
                    ><img
                      src="../assets/images/flags/gb.svg"
                      width="16"
                      height="16"
                  ></span>
                  English
                </a>
              </div>
            </transition>
          </div>

          <button
            class="rust-button text-amber-100 px-4 py-1 rounded-sm text-sm font-semibold"
          >
            CONECTAR
          </button>
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
        <a
          href="https://discord.gg/H2MfDyvukj"
          target="_blank"
          class="rust-menu-item text-amber-100 hover:text-amber-300 px-2 py-2"
          >DISCORD</a
        >
        <div class="rust-divider my-1" />
        <a
          href="#"
          class="rust-menu-item text-amber-100 hover:text-amber-300 px-2 py-2"
          >TIENDA</a
        >
        <div class="rust-divider my-1" />
        <a
          href="#"
          class="rust-menu-item text-amber-100 hover:text-amber-300 px-2 py-2"
          >REGLAS</a
        >
        <div class="pt-2 flex flex-col space-y-3">
          <div class="rust-divider" />
          <div class="text-amber-100 uppercase text-sm font-semibold px-2">
            Idioma
          </div>
          <a
            href="#"
            class="rust-menu-item flex items-center px-2 py-2"
            @click.prevent="changeLanguage('es')"
          >
            <span class="mr-2"
              ><img src="../assets/images/flags/es.svg" width="16" height="16"
            ></span>
            Español
          </a>
          <a
            href="#"
            class="rust-menu-item flex items-center px-2 py-2"
            @click.prevent="changeLanguage('en')"
          >
            <span class="mr-2"
              ><img src="../assets/images/flags/gb.svg" width="16" height="16"
            ></span>
            English
          </a>
          <div class="rust-divider" />
          <button
            class="rust-button w-full text-amber-100 px-4 py-2 rounded-sm text-sm font-semibold"
          >
            CONECTAR
          </button>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { LanguagesIcon } from "lucide-vue-next";

const isLanguageDropdownOpen = ref(false);
const currentLanguage = ref("es");

const isMobileMenuOpen = ref(false);

const toggleMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};

const changeLanguage = (lang: string) => {
  console.log(lang);
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
