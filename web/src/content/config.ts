import { defineCollection, z } from 'astro:content'

export const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    author: z.string(),
    tags: z.optional(z.array(z.string())),
  }),
})

export const readingList = defineCollection({
  type: 'content',
})

export const collections = {
  readingList,
  blog,
}
