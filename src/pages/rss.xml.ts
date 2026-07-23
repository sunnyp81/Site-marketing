import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const pillars = await getCollection('pillars', ({ data }) => !data.draft);
  return rss({
    title: 'site.marketing',
    description: "The operator's manual for marketing an existing website.",
    site: context.site!,
    items: pillars
      .sort((a, b) => b.data.dateModified.valueOf() - a.data.dateModified.valueOf())
      .map((entry) => ({
        title: entry.data.title,
        description: entry.data.description,
        pubDate: entry.data.dateModified,
        link: `/${entry.id}/`,
      })),
  });
}
