<!-- RulesCard.vue -->
<template>
  <div class="w-full max-w-2xl">
    <div
      class="rust-card bg-[#1e1a16] border border-[#5c3a21] rounded-sm overflow-hidden shadow-lg"
    >
      <!-- Header de la tarjeta -->
      <div class="bg-[#2a1e13] border-b border-[#5c3a21] px-6 py-4">
        <div class="flex items-center">
          <h2
            class="ml-3 text-xl font-bold text-amber-300 uppercase tracking-wide"
          >
            {{ $t('header.rules') }}
          </h2>
        </div>
      </div>

      <!-- Contenido de la tarjeta -->
      <div class="px-6 py-4">
        <!-- Render the blog post as Prose & Vue components -->
        <ContentRenderer v-if="post" class="prose dark:prose-invert rules-rust" :value="post" />
        <div v-else />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { locale } = useI18n()
useNuxtApp().hook('i18n:localeSwitched', async () => {
    post.value = await queryCollection('rules').path(`/rules/${locale.value.split('-', 2)[0]}`).first()
  })

const { data: post } = await useAsyncData(`rules-${locale.value.split('-', 2)[0]}`, () => {
  return queryCollection('rules').path(`/rules/${locale.value.split('-', 2)[0]}`).first()
})
</script>

<style scoped></style>
