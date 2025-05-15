import { defineContentConfig, defineCollection, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    rules: defineCollection({
      type: 'page',
      source: 'rules/*.md',
      schema: z.object({
        date: z.string()
      })
    })
  }
})
