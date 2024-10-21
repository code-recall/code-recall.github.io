import { defineCollection } from 'astro:content'

const readingList = defineCollection({
  type: 'content',
})

export const collections = {
  readingList,
}
