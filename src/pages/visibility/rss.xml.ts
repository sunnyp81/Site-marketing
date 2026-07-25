import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';
import { pillarPath } from '../../lib/urls';

export async function GET(context: APIContext) {
  const entries = await getCollection(
    'pillars',
    ({ data }) => !data.draft && data.section === 'visibility',
  );
  return rss({
    title: 'site.marketing — Search Visibility',
    description: 'Search visibility for existing websites: getting retrieved and cited by AI engines.',
    site: context.site!,
    items: entries
      .sort((a, b) => b.data.dateModified.valueOf() - a.data.dateModified.valueOf())
      .map((entry) => ({
        title: entry.data.title,
        description: entry.data.description,
        pubDate: entry.data.dateModified,
        link: pillarPath(entry),
      })),
  });
}
