<!-- DiscordCard.vue -->
<template>
  <div class="w-full max-w-2xl">
    <div
      class="rust-card bg-[#1e1a16] border border-[#5c3a21] rounded-sm overflow-hidden shadow-lg"
    >
      <!-- Header de la tarjeta -->
      <div class="bg-[#2a1e13] border-b border-[#5c3a21] px-6 py-4">
        <div class="flex items-center">
          <svg
            class="w-8 h-8 text-[#5865F2]"
            fill="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19.27 5.33C17.94 4.71 16.5 4.26 15 4a.09.09 0 0 0-.07.03c-.18.33-.39.76-.53 1.09a16.09 16.09 0 0 0-4.8 0c-.14-.34-.35-.76-.54-1.09c-.01-.02-.04-.03-.07-.03c-1.5.26-2.93.71-4.27 1.33c-.01 0-.02.01-.03.02c-2.72 4.07-3.47 8.03-3.1 11.95c0 .02.01.04.03.05c1.8 1.32 3.53 2.12 5.24 2.65c.03.01.06 0 .07-.02c.4-.55.76-1.13 1.07-1.74c.02-.04 0-.08-.04-.09c-.57-.22-1.11-.48-1.64-.78c-.04-.02-.04-.08-.01-.11c.11-.08.22-.17.33-.25c.02-.02.05-.02.07-.01c3.44 1.57 7.15 1.57 10.55 0c.02-.01.05-.01.07.01c.11.09.22.17.33.26c.04.03.04.09-.01.11c-.52.31-1.07.56-1.64.78c-.04.01-.05.06-.04.09c.32.61.68 1.19 1.07 1.74c.03.01.06.02.09.01c1.72-.53 3.45-1.33 5.25-2.65c.02-.01.03-.03.03-.05c.44-4.53-.73-8.46-3.1-11.95c-.01-.01-.02-.02-.04-.02zM8.52 14.91c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.84 2.12-1.89 2.12zm6.97 0c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.83 2.12-1.89 2.12z"
            />
          </svg>
          <h2
            class="ml-3 text-xl font-bold text-amber-300 uppercase tracking-wide"
          >
            {{ discordServer.name }} Discord
          </h2>
        </div>
      </div>

      <!-- Contenido de la tarjeta -->
      <div class="px-6 py-4">
        <p class="text-amber-100 mb-4 text-center sm:text-left">
          {{ $t('discord.description') }}
        </p>

        <div
          class="flex flex-col sm:flex-row justify-between items-center space-y-3 sm:space-y-0"
        >
          <div class="flex-row items-center">
            <div class="flex items-center mb-3 sm:mb-0">
              <div class="h-3 w-3 rounded-full bg-green-500 mr-2" />
              <span class="text-green-400 text-sm"
                >{{ $t('discord.online') }}: <span>{{ discordServer.online }}</span></span
              >
            </div>
            <div class="flex items-center mb-3 sm:mb-0">
              <div class="h-3 w-3 rounded-full bg-gray-500 mr-2" />
              <span class="text-gray-400 text-sm"
                >{{ $t('discord.joined') }}: <span>{{ discordServer.total }}</span></span
              >
            </div>
          </div>

          <a
            href="https://discord.gg/H2MfDyvukj"
            target="_blank"
            class="rust-button-discord px-6 py-2 rounded-sm font-semibold text-white transition-all flex items-center justify-center"
          >
            <svg
              class="w-5 h-5 mr-2"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.27 5.33C17.94 4.71 16.5 4.26 15 4a.09.09 0 0 0-.07.03c-.18.33-.39.76-.53 1.09a16.09 16.09 0 0 0-4.8 0c-.14-.34-.35-.76-.54-1.09c-.01-.02-.04-.03-.07-.03c-1.5.26-2.93.71-4.27 1.33c-.01 0-.02.01-.03.02c-2.72 4.07-3.47 8.03-3.1 11.95c0 .02.01.04.03.05c1.8 1.32 3.53 2.12 5.24 2.65c.03.01.06 0 .07-.02c.4-.55.76-1.13 1.07-1.74c.02-.04 0-.08-.04-.09c-.57-.22-1.11-.48-1.64-.78c-.04-.02-.04-.08-.01-.11c.11-.08.22-.17.33-.25c.02-.02.05-.02.07-.01c3.44 1.57 7.15 1.57 10.55 0c.02-.01.05-.01.07.01c.11.09.22.17.33.26c.04.03.04.09-.01.11c-.52.31-1.07.56-1.64.78c-.04.01-.05.06-.04.09c.32.61.68 1.19 1.07 1.74c.03.01.06.02.09.01c1.72-.53 3.45-1.33 5.25-2.65c.02-.01.03-.03.03-.05c.44-4.53-.73-8.46-3.1-11.95c-.01-.01-.02-.02-.04-.02zM8.52 14.91c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.84 2.12-1.89 2.12zm6.97 0c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.83 2.12-1.89 2.12z"
              />
            </svg>
            {{ $t('discord.join') }}
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from "vue";

const discordServer = ref({
  name: "Chiclelandia Rust",
  online: 0,
  total: 0,
});

onMounted(async () => {
  const discordData = await fetch(
    "https://discordapp.com/api/v6/invite/H2MfDyvukj?with_counts=true"
  );
  const dataJson = await discordData.json();
  console.log(dataJson);

  discordServer.value.total = dataJson.approximate_member_count as number;
  discordServer.value.online = dataJson.approximate_presence_count as number;
});
</script>

<style scoped></style>
