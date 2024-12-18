// @ts-check
import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'

import tailwind from '@astrojs/tailwind'

import sitemap from '@astrojs/sitemap'

// https://astro.build/config
export default defineConfig({
  site: 'https://code-recall.github.io',
  markdown: {
    shikiConfig: {
      theme: 'dracula',
    },
    remarkPlugins: ['remark-code-titles'],
    rehypePlugins: [
      'rehype-slug',
      ['rehype-autolink-headings', { behavior: 'prepend' }],
      ['rehype-toc', { headings: ['h2', 'h3'] }],
    ],
  },
  integrations: [mdx(), tailwind(), sitemap()],
})
