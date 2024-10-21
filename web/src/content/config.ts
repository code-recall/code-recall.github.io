import { defineCollection, z } from 'astro:content'

const readingList = defineCollection({
  type: 'content',
})

export const collections = {
  readingList,
}
