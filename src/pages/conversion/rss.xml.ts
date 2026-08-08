import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';
import { clusterPath } from '../../lib/urls';

export async function GET(context: APIContext) {
  const entries = await getCollection('conversion', ({ data }) => !data.draft);
  return rss({
    title: 'site.marketing — Conversion & Revenue',
    description: 'CRO for existing websites: testing, messaging, forms, pricing pages and friction removal.',
    site: context.site!,
    items: entries
      .sort((a, b) => b.data.dateModified.valueOf() - a.data.dateModified.valueOf())
      .map((entry) => ({
        title: entry.data.title,
        description: entry.data.description,
        pubDate: entry.data.dateModified,
        link: clusterPath('conversion', entry),
      })),
  });
}
