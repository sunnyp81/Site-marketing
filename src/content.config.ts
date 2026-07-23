import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const pillars = defineCollection({
  loader: glob({ pattern: ['**/*.md', '!**/*.review-notes.md'], base: './content/pillars' }),
  schema: z.object({
    title: z.string(),
    description: z.string().max(200),
    datePublished: z.coerce.date(),
    dateModified: z.coerce.date(),
    section: z.string(),
    cluster: z.string().optional(),
    author: z.string().default('sunny'),
    draft: z.boolean().default(false),
    faqs: z.array(z.object({ q: z.string(), a: z.string() })).default([]),
    sources: z.array(z.object({ label: z.string(), url: z.string().url() })).default([]),
  }),
});

export const collections = { pillars };
