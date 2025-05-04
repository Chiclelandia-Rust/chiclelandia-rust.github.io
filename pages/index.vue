<template>
  <main
    class="flex items-center justify-center min-h-[calc(100vh-6rem)] px-4 py-8 flex-col space-y-6"
  >
    <DiscordCard />
    <ServerCard />
  </main>
</template>

<script setup lang="ts">
import DiscordCard from "@/components/DiscordCard.vue";
import ServerCard from "@/components/ServerCard.vue";
</script>
