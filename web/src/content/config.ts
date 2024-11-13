import { defineCollection, z } from 'astro:content'

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    author: z.string(),
    tags: z.optional(z.array(z.string())),
  }),
})

const readingList = defineCollection({
  type: 'content',
  schema: z.object({
    pubDate: z.coerce.date(),
  }),
})

export const collections = {
  ['reading-list']: {
    ...readingList,
  },
  blog,
}
