import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const articleSchema = z.object({
  title: z.string(),
  description: z.string().max(200),
  slug: z.string().optional(),
  datePublished: z.coerce.date(),
  dateModified: z.coerce.date(),
  section: z.string().optional(),
  cluster: z.string().optional(),
  author: z.string().default('sunny'),
  draft: z.boolean().default(false),
  faqs: z.array(z.object({ q: z.string(), a: z.string() })).default([]),
  sources: z.array(z.object({ label: z.string(), url: z.string().url() })).default([]),
});

const pillars = defineCollection({
  loader: glob({ pattern: ['**/*.md', '!**/*.review-notes.md'], base: './content/pillars' }),
  schema: articleSchema,
});

const strategy = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './content/clusters/strategy' }),
  schema: articleSchema,
});

const glossary = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './content/glossary/terms' }),
  schema: z.object({
    title: z.string(),
    description: z.string().max(160),
    term: z.string(),
    datePublished: z.coerce.date(),
    dateModified: z.coerce.date(),
    author: z.string().default('sunny'),
    draft: z.boolean().default(false),
  }),
});

export const collections = { pillars, strategy, glossary };
