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
            class="w-8 h-8 text-amber-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M13 10V3L4 14h7v7l9-11h-7z"
            />
          </svg>
          <h2
            class="ml-3 text-xl font-bold text-amber-300 uppercase tracking-wide"
          >
            {{ $t('server.connectToServer') }}
          </h2>
        </div>
      </div>

      <!-- Contenido de la tarjeta -->
      <div class="px-6 py-4">
        <!-- Pestañas de servidores -->
        <div class="flex border-b border-[#5c3a21] mb-4">
          <button
            v-for="server in servers"
            :key="server.id"
            class="rust-tab px-4 py-2 font-medium text-sm uppercase tracking-wider"
            :class="{ active: selectedServer === server.id }"
            @click="selectServer(server.id)"
          >
            {{ server.id }}
          </button>
        </div>

        <!-- Contenido del servidor seleccionado -->
        <div v-if="currentServerData" class="server-content">
          <div
            class="flex flex-col sm:flex-row justify-between items-center mb-4"
          >
            <div class="flex items-center mb-3 sm:mb-0">
              <div
                class="h-3 w-3 rounded-full mr-2"
                :class="
                  currentServerData.status === 'online'
                    ? 'bg-green-500'
                    : 'bg-red-500'
                "
              />
              <span class="text-green-400 text-sm"
                >{{ $t('server.status') }}:
                <span
                  :class="
                    currentServerData.status === 'online'
                      ? 'text-green-400'
                      : 'text-red-400'
                  "
                >
                  {{ $t(`server.${currentServerData.status}Status`) }}
                </span>
              </span>
            </div>
            <span class="text-amber-200 text-sm"
              >{{ $t('server.players') }}:
              <span>
                {{ currentServerData.players ?? 0 }} / {{ currentServerData.maxplayers ?? '???' }}
              </span>
            </span>
          </div>

          <div class="bg-[#2a1e13] p-4 rounded-sm border border-[#5c3a21] mb-4">
            <div class="flex items-center justify-between mb-2">
              <span class="text-amber-100 font-mono text-sm"
                >{{ $t('server.serverIP') }}:</span
              >
              <span class="text-amber-300 font-mono">{{
                currentServerData.ip
              }}</span>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-3">
              <!-- Botón Copiar IP -->
              <button
                class="rust-button-action flex items-center justify-center px-4 py-2"
                @click="copyToClipboard(currentServerData.ip)"
              >
                <svg
                  class="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"
                  />
                </svg>
                {{ $t('server.copyIP') }}
              </button>

              <!-- Botón Conectar Directamente -->
              <a
                :href="`steam://run/252490//+connect ${currentServerConnect}`"
                class="rust-button-action flex items-center justify-center px-4 py-2 text-center"
              >
                <svg
                  class="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
                {{ $t('server.connectDirectly') }}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from "vue";

// Datos de los servidores
const servers = ref([
  {
    id: "x5",
    name: "EU/ESP x5",
    ip: "rust-eu1.chiclelandia.com",
    status: "online",
    players: "32/100",
  },
  {
    id: "x2",
    name: "EU/ESP x2",
    ip: "rust-eu1.chiclelandia.com",
    status: "online",
    players: "45/100",
  },
  {
    id: "vanilla",
    name: "Vanilla",
    ip: "rust-eu1.chiclelandia.com",
    status: "online",
    players: "28/100",
  },
]);

// Servidor seleccionado
const selectedServer = ref("x5");

// Computed para obtener los datos del servidor actual
const currentServerData = computed(() => {
  return servers.value.find((server) => server.id === selectedServer.value);
});

const currentServerConnect = computed(() => {
  if (currentServerData.value === undefined) return '';
  return currentServerData.value.ip + ':' + currentServerData.value.gameport;
});

const selectServer = (serverId: string) => {
  selectedServer.value = serverId;
};

const copyToClipboard = async (text: string) => {
  try {
    await navigator.clipboard.writeText(text);
    // Aquí podrías añadir un toast o notificación de éxito
  } catch (err) {
    console.error("Error al copiar al portapapeles:", err);
  }
};

// Simular carga de datos al montar el componente
onMounted(async () => {
  const rustData = await fetch(
    "https://rust-server-query.chiclelandia.com/"
  );
  const dataJson = await rustData.json();
  servers.value = dataJson;
  if (servers.value.find((server) => server.id === selectedServer.value) === undefined) {
    selectedServer.value = servers.value[0].id;
  }
});
</script>

<style scoped>
</style>
