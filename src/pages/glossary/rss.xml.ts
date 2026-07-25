import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const entries = await getCollection('glossary', ({ data }) => !data.draft);
  return rss({
    title: 'site.marketing — Glossary',
    description: 'Website marketing terms defined with a stance.',
    site: context.site!,
    items: entries
      .sort((a, b) => b.data.dateModified.valueOf() - a.data.dateModified.valueOf())
      .map((entry) => ({
        title: entry.data.term,
        description: entry.data.description,
        pubDate: entry.data.dateModified,
        link: `/glossary/${entry.id}/`,
      })),
  });
}
