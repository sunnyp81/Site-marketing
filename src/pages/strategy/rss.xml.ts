import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const entries = await getCollection('strategy', ({ data }) => !data.draft);
  return rss({
    title: 'site.marketing — Strategy',
    description: 'Website marketing strategy: sequencing, budgets, audits, plans.',
    site: context.site!,
    items: entries
      .sort((a, b) => b.data.dateModified.valueOf() - a.data.dateModified.valueOf())
      .map((entry) => {
        const slug = entry.data.slug
          ? entry.data.slug.replace(/^\/|\/$/g, '').split('/').pop()!
          : entry.id;
        return {
          title: entry.data.title,
          description: entry.data.description,
          pubDate: entry.data.dateModified,
          link: `/strategy/${slug}/`,
        };
      }),
  });
}
